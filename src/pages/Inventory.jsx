import { useMemo, useState } from 'react';
import { AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { products } from '../data/products';

const LOW_STOCK_THRESHOLD = 10;

function stockStatus(stock) {
  if (stock === 0) return 'Out of Stock';
  if (stock <= LOW_STOCK_THRESHOLD) return 'Low Stock';
  return 'In Stock';
}

export default function Inventory() {
  const [query, setQuery] = useState('');

  const inventory = useMemo(
    () => products.map((p) => ({ ...p, invStatus: stockStatus(p.stock) })),
    []
  );

  const filtered = inventory.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  const summary = {
    inStock: inventory.filter((p) => p.invStatus === 'In Stock').length,
    lowStock: inventory.filter((p) => p.invStatus === 'Low Stock').length,
    outOfStock: inventory.filter((p) => p.invStatus === 'Out of Stock').length,
  };

  const columns = [
    {
      key: 'name',
      header: 'Product',
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.image} alt="" className="h-9 w-9 rounded-lg bg-brand-50 dark:bg-white/10" />
          <div>
            <p className="font-medium text-ink dark:text-white">{row.name}</p>
            <p className="text-xs text-ink/40 dark:text-white/35">{row.id}</p>
          </div>
        </div>
      ),
    },
    { key: 'category', header: 'Category' },
    {
      key: 'stock',
      header: 'Stock Level',
      render: (row) => (
        <div className="flex items-center gap-2 w-36">
          <div className="flex-1 h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
            <div
              className={`h-full rounded-full ${
                row.invStatus === 'Out of Stock' ? 'bg-rose-500' : row.invStatus === 'Low Stock' ? 'bg-amber-500' : 'bg-teal-500'
              }`}
              style={{ width: `${Math.min((row.stock / 60) * 100, 100)}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-ink/60 dark:text-white/50 w-6 text-right">{row.stock}</span>
        </div>
      ),
    },
    {
      key: 'invStatus',
      header: 'Status',
      render: (row) => {
        const cfg = {
          'In Stock': { icon: CheckCircle2, color: 'text-teal-500' },
          'Low Stock': { icon: AlertTriangle, color: 'text-amber-500' },
          'Out of Stock': { icon: XCircle, color: 'text-rose-500' },
        }[row.invStatus];
        const Icon = cfg.icon;
        return (
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${cfg.color}`}>
            <Icon size={14} /> {row.invStatus}
          </span>
        );
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-xl text-ink dark:text-white">Inventory</h2>
        <p className="text-sm text-ink/45 dark:text-white/40">Track stock levels across all products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-teal-500/10 grid place-items-center text-teal-500">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="font-display font-extrabold text-xl text-ink dark:text-white">{summary.inStock}</p>
            <p className="text-xs text-ink/45 dark:text-white/40">In Stock</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-amber-500/10 grid place-items-center text-amber-500">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="font-display font-extrabold text-xl text-ink dark:text-white">{summary.lowStock}</p>
            <p className="text-xs text-ink/45 dark:text-white/40">Low Stock</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-rose-500/10 grid place-items-center text-rose-500">
            <XCircle size={20} />
          </div>
          <div>
            <p className="font-display font-extrabold text-xl text-ink dark:text-white">{summary.outOfStock}</p>
            <p className="text-xs text-ink/45 dark:text-white/40">Out of Stock</p>
          </div>
        </Card>
      </div>

      <Card>
        <SearchBar value={query} onChange={setQuery} placeholder="Search inventory..." className="sm:w-72 mb-5" />
        <Table columns={columns} data={filtered} />
      </Card>
    </div>
  );
}
