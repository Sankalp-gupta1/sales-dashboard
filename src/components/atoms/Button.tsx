import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean };

export function Button({ active = false, className = '', ...props }: Props) {
  return (
    <button
      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${active ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'} ${className}`}
      {...props}
    />
  );
}
