import { useMemo, useState } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';
import { products as initialProducts, categories } from '../data/products';
import { formatCurrency } from '../utils/format';

export default function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  const confirmDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
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
    { key: 'price', header: 'Price', render: (row) => formatCurrency(row.price) },
    { key: 'stock', header: 'Stock' },
    { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
    {
      key: 'actions',
      header: 'Actions',
      render: (row) => (
        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-lg hover:bg-brand-50 dark:hover:bg-white/10 text-brand-500"
            aria-label={`Edit ${row.name}`}
          >
            <Pencil size={15} />
          </button>
          <button
            onClick={() => setDeleteTarget(row)}
            className="p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-white/10 text-rose-500"
            aria-label={`Delete ${row.name}`}
          >
            <Trash2 size={15} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-xl text-ink dark:text-white">Products</h2>
          <p className="text-sm text-ink/45 dark:text-white/40">{filtered.length} products found</p>
        </div>
        <button className="btn-primary flex items-center gap-2 px-4 py-2.5 text-sm">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <SearchBar value={query} onChange={setQuery} placeholder="Search products..." className="sm:w-72" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-sm text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <Table columns={columns} data={filtered} />
      </Card>

      <Modal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete product"
        footer={
          <>
            <button
              onClick={() => setDeleteTarget(null)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-ink/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/10"
            >
              Cancel
            </button>
            <button onClick={confirmDelete} className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600">
              Delete
            </button>
          </>
        }
      >
        Are you sure you want to delete <span className="font-semibold text-ink dark:text-white">{deleteTarget?.name}</span>? This action
        cannot be undone.
      </Modal>
    </div>
  );
}
