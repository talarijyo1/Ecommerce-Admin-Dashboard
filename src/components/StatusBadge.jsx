const styles = {
  Active: 'bg-teal-500/10 text-teal-500',
  Inactive: 'bg-ink/10 text-ink/50 dark:bg-white/10 dark:text-white/50',
  'Low Stock': 'bg-amber-500/10 text-amber-500',
  'Out of Stock': 'bg-rose-500/10 text-rose-500',
  Pending: 'bg-amber-500/10 text-amber-500',
  Shipped: 'bg-brand-500/10 text-brand-500',
  Delivered: 'bg-teal-500/10 text-teal-500',
  Cancelled: 'bg-rose-500/10 text-rose-500',
  'In Stock': 'bg-teal-500/10 text-teal-500',
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
        styles[status] || 'bg-black/5 text-ink/60'
      }`}
    >
      {status}
    </span>
  );
}
