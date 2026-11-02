import { useMemo, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import StatusBadge from '../components/StatusBadge';
import { customers } from '../data/customers';

const statusFilters = ['All', 'Active', 'Inactive'];

export default function Customers() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');

  const filtered = useMemo(() => {
    return customers.filter((c) => {
      const matchesQuery =
        c.name.toLowerCase().includes(query.toLowerCase()) || c.email.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === 'All' || c.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  const columns = [
    {
      key: 'name',
      header: 'Customer',
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt="" className="h-9 w-9 rounded-full bg-brand-50 dark:bg-white/10" />
          <div>
            <p className="font-medium text-ink dark:text-white">{row.name}</p>
            <p className="text-xs text-ink/40 dark:text-white/35">{row.id}</p>
          </div>
        </div>
      ),
    },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
    { key: 'orders', header: 'Orders' },
    { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-xl text-ink dark:text-white">Customers</h2>
        <p className="text-sm text-ink/45 dark:text-white/40">{filtered.length} customers found</p>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by name or email..." className="sm:w-80" />
          <div className="flex gap-2">
            {statusFilters.map((s) => (
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
