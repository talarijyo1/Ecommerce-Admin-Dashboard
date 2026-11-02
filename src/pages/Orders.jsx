import { useMemo, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import StatusBadge from '../components/StatusBadge';
import { orders, orderStatuses } from '../data/orders';
import { formatCurrency, formatDate } from '../utils/format';

export default function Orders() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const matchesQuery =
        o.id.toLowerCase().includes(query.toLowerCase()) || o.customer.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === 'All' || o.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  const columns = [
    { key: 'id', header: 'Order ID', render: (row) => <span className="font-mono text-xs font-semibold text-ink dark:text-white">{row.id}</span> },
    { key: 'customer', header: 'Customer' },
    { key: 'product', header: 'Product' },
    { key: 'amount', header: 'Amount', render: (row) => formatCurrency(row.amount) },
    { key: 'date', header: 'Date', render: (row) => formatDate(row.date) },
    { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-xl text-ink dark:text-white">Orders</h2>
        <p className="text-sm text-ink/45 dark:text-white/40">{filtered.length} orders found</p>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by order ID or customer..." className="sm:w-80" />
          <div className="flex gap-2 flex-wrap">
            {orderStatuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  status === s
                    ? 'bg-brand-500 text-white'
                    : 'bg-black/5 dark:bg-white/5 text-ink/60 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <Table columns={columns} data={filtered} />
      </Card>
    </div>
  );
}
