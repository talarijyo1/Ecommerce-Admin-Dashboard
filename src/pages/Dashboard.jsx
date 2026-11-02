import { DollarSign, ShoppingBag, Users, Package, Wallet, CreditCard, RefreshCcw } from 'lucide-react';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import { SimpleBarChart, SimpleAreaChart, SimpleDonutChart } from '../components/Charts';
import {
  summaryStats,
  revenueUpdates,
  salesOverview,
  monthlyEarnings,
  weeklyStats,
  yearlySales,
  topLists,
  paymentGateways,
} from '../data/dashboard';
import { formatCurrency } from '../utils/format';

const icons = { sales: DollarSign, orders: ShoppingBag, customers: Users, products: Package };
const gatewayIcons = { paypal: Wallet, wallet: Wallet, card: CreditCard, refund: RefreshCcw };

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="card p-6 bg-gradient-to-r from-brand-500 to-brand-700 text-white flex flex-col sm:flex-row items-center gap-6 overflow-hidden relative">
        <img
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Mathew&backgroundColor=b6e3f4"
          alt=""
          className="h-24 w-24 rounded-2xl bg-white/20 shrink-0 order-1 sm:order-2 sm:ml-auto"
        />
        <div className="order-2 sm:order-1 text-center sm:text-left">
          <h2 className="font-display font-bold text-xl">Welcome back, Mathew Anderson!</h2>
          <p className="text-white/70 text-sm mt-1">Here's what's happening with your store today.</p>
          <div className="flex items-center gap-8 mt-4 justify-center sm:justify-start">
            <div>
              <p className="font-display font-extrabold text-2xl">$2,763</p>
              <p className="text-xs text-white/70">Today's Sales</p>
            </div>
            <div className="w-px h-9 bg-white/20" />
            <div>
              <p className="font-display font-extrabold text-2xl">39%</p>
              <p className="text-xs text-white/70">Overall Performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} icon={icons[stat.id]} />
        ))}
      </div>

      {/* Revenue + Sales Overview + Income/Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Revenue Updates" subtitle="Overview of profit" className="lg:col-span-1">
          <SimpleBarChart
            data={revenueUpdates}
            xKey="month"
            bars={[
              { key: 'footwear', name: 'Footwear', color: '#5B5FEF' },
              { key: 'fashionware', name: 'Fashionware', color: '#C7C9FA' },
            ]}
            height={200}
          />
        </Card>

        <Card title="Sales Overview" subtitle="Every month">
          <SimpleDonutChart
            data={[
              { name: 'Profit', value: salesOverview.profit },
              { name: 'Expense', value: salesOverview.expense },
            ]}
            centerValue={formatCurrency(salesOverview.total)}
            centerLabel="Total"
            height={180}
          />
          <div className="flex justify-center gap-6 mt-2 text-sm">
            <div>
              <p className="text-ink/45 dark:text-white/40 text-xs">Profit</p>
              <p className="font-semibold text-ink dark:text-white">{formatCurrency(salesOverview.profit)}</p>
            </div>
            <div>
              <p className="text-ink/45 dark:text-white/40 text-xs">Expense</p>
              <p className="font-semibold text-ink dark:text-white">{formatCurrency(salesOverview.expense)}</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-rows-2 gap-4">
          <Card title="Income" subtitle="$22,329" className="[&>div]:mb-2">
            <SimpleBarChart data={weeklyStats} xKey="day" bars={[{ key: 'sales', name: 'Income', color: '#5B5FEF' }]} height={80} />
          </Card>
          <Card title="Monthly Earnings" subtitle={formatCurrency(monthlyEarnings.at(-1).value)}>
            <SimpleAreaChart data={monthlyEarnings} xKey="month" areaKey="value" color="#33D2C0" height={80} />
          </Card>
        </div>
      </div>

      {/* Weekly stats, yearly sales, payment gateways */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card title="Weekly Stats" subtitle="Average sales">
          <SimpleAreaChart data={weeklyStats} xKey="day" areaKey="sales" color="#5B5FEF" height={140} />
          <div className="space-y-3 mt-4">
            {Object.values(topLists).map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">{item.label}</p>
                  <p className="text-xs text-ink/45 dark:text-white/40">{item.sublabel}</p>
                </div>
                <span className="text-teal-500 text-sm font-semibold">+{item.change}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Yearly Sales" subtitle="Every month">
          <SimpleBarChart data={yearlySales} xKey="month" bars={[{ key: 'sales', name: 'Sales', color: '#5B5FEF' }]} height={180} />
          <div className="flex justify-between mt-4 text-sm">
            <div>
              <p className="text-ink/45 dark:text-white/40 text-xs">Total Sales</p>
              <p className="font-semibold text-ink dark:text-white">{formatCurrency(38654)}</p>
            </div>
            <div>
              <p className="text-ink/45 dark:text-white/40 text-xs">Expenses</p>
              <p className="font-semibold text-ink dark:text-white">{formatCurrency(6963)}</p>
            </div>
          </div>
        </Card>

        <Card title="Payment Gateways" subtitle="Platform for income">
          <div className="space-y-4">
            {paymentGateways.map((g) => {
              const Icon = gatewayIcons[g.id];
              return (
                <div key={g.id} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-brand-50 dark:bg-white/10 grid place-items-center text-brand-500 shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink dark:text-white truncate">{g.name}</p>
                    <p className="text-xs text-ink/45 dark:text-white/40">{g.desc}</p>
                  </div>
                  <span className={`text-sm font-semibold ${g.trend === 'up' ? 'text-teal-500' : 'text-rose-500'}`}>
                    {g.amount > 0 ? '+' : ''}
                    {formatCurrency(g.amount)}
                  </span>
                </div>
              );
            })}
          </div>
          <button className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-brand-500 hover:bg-brand-50 dark:hover:bg-white/5 transition-colors">
            View all transactions
          </button>
        </Card>
      </div>
    </div>
  );
}
