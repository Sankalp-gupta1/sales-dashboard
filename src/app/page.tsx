import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 px-6 py-16 text-white">
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-8 rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-soft backdrop-blur md:p-14">
        <span className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-emerald-200">Next.js 15 • TypeScript • Tailwind • Recharts</span>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Sales Performance Dashboard</h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">A polished frontend assessment project showing 2022, 2023 and 2024 sales with chart switching, threshold filtering, KPI cards and an atomic component structure.</p>
        </div>
        <Link href="/dashboard" className="rounded-2xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-emerald-300">Open Dashboard</Link>
      </section>
    </main>
  );
}
