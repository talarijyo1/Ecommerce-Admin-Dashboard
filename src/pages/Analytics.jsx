import Card from '../components/Card';
import Table from '../components/Table';
import { SimpleBarChart, SimpleLineChart, SimpleDonutChart, COLORS } from '../components/Charts';
import { monthlySales, ordersByCategory, topProducts, revenueByChannel } from '../data/analytics';
import { formatCurrency, formatNumber } from '../utils/format';

export default function Analytics() {
  const columns = [
    { key: 'name', header: 'Product' },
    { key: 'unitsSold', header: 'Units Sold', render: (row) => formatNumber(row.unitsSold) },
    { key: 'revenue', header: 'Revenue', render: (row) => formatCurrency(row.revenue) },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-xl text-ink dark:text-white">Analytics</h2>
        <p className="text-sm text-ink/45 dark:text-white/40">Performance overview across sales, revenue, and products</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Monthly Sales" subtitle="Units sold per month">
          <SimpleBarChart data={monthlySales} xKey="month" bars={[{ key: 'sales', name: 'Sales', color: '#5B5FEF' }]} height={240} />
        </Card>
        <Card title="Revenue Trend" subtitle="Monthly revenue in USD">
          <SimpleLineChart data={monthlySales} xKey="month" lines={[{ key: 'revenue', name: 'Revenue', color: '#33D2C0' }]} height={240} />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Orders by Category" className="lg:col-span-1">
          <SimpleDonutChart data={ordersByCategory} height={200} centerLabel="Categories" centerValue={ordersByCategory.length} />
          <div className="space-y-2 mt-4">
            {ordersByCategory.map((c, i) => (
              <div key={c.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-ink/70 dark:text-white/60">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  {c.name}
                </span>
                <span className="font-semibold text-ink dark:text-white">{c.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Revenue by Channel" className="lg:col-span-1">
          <SimpleDonutChart
            data={revenueByChannel.map((r) => ({ name: r.channel, value: r.value }))}
            height={200}
            centerLabel="Channels"
            centerValue={revenueByChannel.length}
          />
          <div className="space-y-2 mt-4">
            {revenueByChannel.map((c, i) => (
              <div key={c.channel} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-ink/70 dark:text-white/60">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  {c.channel}
                </span>
                <span className="font-semibold text-ink dark:text-white">{c.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Top Products" subtitle="Best performing this quarter" className="lg:col-span-1">
          <Table columns={columns} data={topProducts} />
        </Card>
      </div>
    </div>
  );
}
