type Props = { title: string; value: string; note: string };
export function KpiCard({ title, value, note }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="mt-2 text-3xl font-bold text-slate-950">{value}</h3>
      <p className="mt-2 text-sm text-slate-500">{note}</p>
    </div>
  );
}
