
import { Breakpoint, breakpoints } from "./breakpoints";

export default function computeSizes(value: number, size: number = 768) {
  const persantage = value / (size / 100);
  const bps: Record<Breakpoint, number> = {} as any;

  Object.keys(breakpoints).forEach((_bp) => {
    const bp = (_bp as unknown) as Breakpoint;
    const bpValue =
      (parseInt(breakpoints[bp].replace("px", "")) / 16) * 9;
    bps[bp] = (bpValue / 100) * persantage;
  });

  return bps;
}

// (window as any).computeSizes = computeSizes;