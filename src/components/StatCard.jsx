import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatCurrency, formatNumber } from '../utils/format';

const iconBg = {
  sales: 'bg-brand-500',
  orders: 'bg-teal-500',
  customers: 'bg-amber-500',
  products: 'bg-coral-500',
};

export default function StatCard({ stat, icon: Icon }) {
  const isUp = stat.trend === 'up';
  const value = stat.format === 'currency' ? formatCurrency(stat.value) : formatNumber(stat.value);

  return (
    <div className="card p-5 flex items-center justify-between gap-3">
      <div>
        <p className="text-xs font-medium text-ink/50 dark:text-white/40">{stat.label}</p>
        <p className="font-display font-extrabold text-2xl text-ink dark:text-white mt-1">{value}</p>
        <div
          className={`inline-flex items-center gap-1 mt-2 text-xs font-semibold ${
            isUp ? 'text-teal-500' : 'text-rose-500'
          }`}
        >
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {Math.abs(stat.change)}%
        </div>
      </div>
      {Icon && (
        <div className={`h-11 w-11 rounded-2xl grid place-items-center text-white shrink-0 ${iconBg[stat.id] || 'bg-brand-500'}`}>
          <Icon size={20} />
        </div>
      )}
    </div>
  );
}
