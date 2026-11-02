import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = 'Search...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/35 dark:text-white/35" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-sm placeholder:text-ink/40 dark:placeholder:text-white/40 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
      />
    </div>
  );
}
