import { cn } from '@/lib/utils';

const bottomPaths = {
  wave: 'M0 108 C220 156 360 42 590 74 C860 112 980 28 1220 68 C1340 90 1390 46 1440 58 L1440 160 L0 160 Z',
  swoop: 'M0 72 C160 18 340 132 620 86 C900 40 1080 148 1440 64 L1440 160 L0 160 Z',
  lift: 'M0 96 C260 28 420 150 740 78 C1040 10 1220 124 1440 52 L1440 160 L0 160 Z',
} as const;

const topPaths = {
  wave: 'M0 0 L1440 0 L1440 58 C1390 46 1340 90 1220 68 C980 28 860 112 590 74 C360 42 220 156 0 108 Z',
  swoop: 'M0 0 L1440 0 L1440 64 C1080 148 900 40 620 86 C340 132 160 18 0 72 Z',
  lift: 'M0 0 L1440 0 L1440 52 C1220 124 1040 10 740 78 C420 150 260 28 0 96 Z',
} as const;

type Variant = keyof typeof bottomPaths;

export function CurveDefs() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
      <defs>
        <clipPath id="ulead-arch" clipPathUnits="objectBoundingBox">
          <path d="M0.07,1 C0.07,1 0.07,0.42 0.07,0.36 C0.07,0.12 0.26,0.015 0.5,0.015 C0.74,0.015 0.93,0.12 0.93,0.36 C0.93,0.42 0.93,1 0.93,1 Z" />
        </clipPath>
        <clipPath id="ulead-garden" clipPathUnits="objectBoundingBox">
          <path d="M0,0.16 C0.22,0.02 0.34,0.2 0.52,0.06 C0.7,0 0.78,0.14 1,0.05 L1,0.92 C0.78,1 0.55,0.9 0.32,0.98 C0.14,1 0,0.9 0,0.84 Z" />
        </clipPath>
        <clipPath id="ulead-tomorrow" clipPathUnits="objectBoundingBox">
          <path d="M0.16,0 C0.05,0.18 0.1,0.38 0.04,0.58 C0.1,0.78 0.05,0.92 0.14,1 L1,1 L1,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function OrganicSectionBottom({
  fill = '#f3efe6',
  variant = 'wave',
  className,
}: {
  fill?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className={cn('block h-[110px] w-full md:h-[170px]', className)}
      aria-hidden
    >
      <path d={bottomPaths[variant]} fill={fill} />
    </svg>
  );
}

export function OrganicSectionTop({
  fill = '#f3efe6',
  variant = 'wave',
  className,
}: {
  fill?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className={cn('block h-[110px] w-full md:h-[170px]', className)}
      aria-hidden
    >
      <path d={topPaths[variant]} fill={fill} />
    </svg>
  );
}

export function UCurve({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className={cn('block h-[90px] w-full md:h-[140px]', className)} aria-hidden>
      <path
        d="M0 120 C280 40 520 180 820 90 C1080 16 1260 150 1440 70 L1440 200 L0 200 Z"
        fill="currentColor"
      />
    </svg>
  );
}
