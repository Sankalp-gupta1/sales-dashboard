import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

export type ChartType = 'bar' | 'line' | 'pie';

type Props = { chartType: ChartType; setChartType: (type: ChartType) => void; threshold: number; setThreshold: (value: number) => void };

export function ChartControls({ chartType, setChartType, threshold, setThreshold }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-500">Chart Type</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(['bar', 'line', 'pie'] as ChartType[]).map((type) => (
            <Button key={type} active={chartType === type} onClick={() => setChartType(type)}>{type.toUpperCase()}</Button>
          ))}
        </div>
      </div>
      <label className="w-full max-w-sm">
        <span className="text-sm font-semibold text-slate-500">Custom Sales Threshold</span>
        <Input type="number" min={0} value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} placeholder="Example: 80000" />
      </label>
    </div>
  );
}
