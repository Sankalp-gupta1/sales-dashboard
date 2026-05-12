'use client';

import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { SalesRecord } from '@/data/sales';
import type { ChartType } from '@/components/molecules/ChartControls';

type Props = { data: SalesRecord[]; chartType: ChartType };

const money = (value: number) => `$${Math.round(value / 1000)}k`;

export function SalesChart({ data, chartType }: Props) {
  const yearly = [2022, 2023, 2024].map((year) => ({
    year: String(year),
    sales: data.filter((item) => item.year === year).reduce((sum, item) => sum + item.sales, 0)
  }));

  const monthly = data.map((item) => ({ ...item, label: `${item.month} ${item.year}` }));

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-950">Sales Analytics</h2>
        <p className="text-sm text-slate-500">Mock sales dataset inspired by retail sales dashboards for 2022, 2023 and 2024.</p>
      </div>
      <div className="h-[420px] w-full">
        {chartType === 'bar' && (
          <ResponsiveContainer>
            <BarChart data={monthly}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="label" hide /><YAxis tickFormatter={money} /><Tooltip formatter={(v) => money(Number(v))} /><Legend /><Bar dataKey="sales" name="Monthly Sales" fill="#059669" radius={[8,8,0,0]} /></BarChart>
          </ResponsiveContainer>
        )}
        {chartType === 'line' && (
          <ResponsiveContainer>
            <LineChart data={monthly}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="label" hide /><YAxis tickFormatter={money} /><Tooltip formatter={(v) => money(Number(v))} /><Legend /><Line type="monotone" dataKey="sales" name="Monthly Sales" stroke="#059669" strokeWidth={3} dot={false} /></LineChart>
          </ResponsiveContainer>
        )}
        {chartType === 'pie' && (
          <ResponsiveContainer>
            <PieChart><Tooltip formatter={(v) => money(Number(v))} /><Legend /><Pie data={yearly} dataKey="sales" nameKey="year" outerRadius={140} label>{yearly.map((_, i) => <Cell key={i} fill={["#047857", "#059669", "#34d399"][i]} />)}</Pie></PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
