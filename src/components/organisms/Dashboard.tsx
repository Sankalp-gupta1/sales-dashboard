'use client';

import { useMemo, useState } from 'react';
import { salesData } from '@/data/sales';
import { KpiCard } from '@/components/atoms/KpiCard';
import { ChartControls, ChartType } from '@/components/molecules/ChartControls';
import { SalesChart } from '@/components/organisms/SalesChart';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function Dashboard() {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState(0);

  const filtered = useMemo(() => salesData.filter((item) => item.sales >= threshold), [threshold]);
  const total = filtered.reduce((sum, item) => sum + item.sales, 0);
  const best = filtered.reduce((max, item) => (item.sales > max.sales ? item : max), filtered[0] ?? salesData[0]);
  const orders = filtered.reduce((sum, item) => sum + item.orders, 0);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 md:px-10">
      <section className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-950 to-emerald-900 p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Frontend Final Assessment</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Sales Dashboard 2022-2024</h1>
          <p className="mt-3 max-w-3xl text-slate-200">Built with Next.js 15, TypeScript, Tailwind CSS, Recharts and an atomic design structure. Use filters and chart type controls to explore yearly sales performance.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <KpiCard title="Filtered Revenue" value={currency.format(total)} note={`${filtered.length} monthly records visible`} />
          <KpiCard title="Total Orders" value={orders.toLocaleString()} note="Mock order volume" />
          <KpiCard title="Best Month" value={`${best.month} ${best.year}`} note={currency.format(best.sales)} />
        </div>
        <ChartControls chartType={chartType} setChartType={setChartType} threshold={threshold} setThreshold={setThreshold} />
        <SalesChart data={filtered} chartType={chartType} />
      </section>
    </main>
  );
}
