import { cn } from '@/lib/utils';
import { BRAND } from '@/lib/brand';

export function BrandLogo({
  className,
  markClassName,
  wordmark = true,
  priority = false,
}: {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/images/brand/logo.png"
        alt=""
        width={346}
        height={245}
        className={cn('h-9 w-auto object-contain sm:h-10', markClassName)}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        draggable={false}
      />
      {wordmark ? (
        <span className="font-serif text-2xl italic tracking-tight sm:text-3xl">{BRAND.shortName}</span>
      ) : null}
      <span className="sr-only">{BRAND.displayName}</span>
    </span>
  );
}
