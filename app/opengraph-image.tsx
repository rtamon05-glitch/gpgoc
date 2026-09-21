import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = "God's Plan Group of Company — six companies, one long-range plan";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage({
    eyebrow: 'Group',
    title: 'Six companies. One long-range plan.',
    accent: '#e4c765',
  });
}
