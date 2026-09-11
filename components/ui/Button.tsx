import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-gold-500 text-navy-900 hover:bg-gold-300',
  secondary: 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  ghost: 'text-navy-900 underline underline-offset-4 hover:text-gold-500',
  onDark: 'border border-white/60 text-white hover:border-gold-500 hover:bg-gold-500 hover:text-navy-900',
};

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function buttonClass(variant: Variant = 'primary', size: Size = 'md', extra = '') {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${extra}`.trim();
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: { variant?: Variant; size?: Size; children: ReactNode } & ComponentProps<'button'>) {
  return (
    <button className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'className'> & {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const external = href.startsWith('http') || href.startsWith('mailto:');
  if (external) {
    return (
      <a
        href={href}
        className={buttonClass(variant, size, className)}
        rel="noopener noreferrer"
        target={href.startsWith('http') ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}
