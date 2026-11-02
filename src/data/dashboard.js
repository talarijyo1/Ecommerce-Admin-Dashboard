// Dummy data simulating a backend response for the Dashboard page

export const summaryStats = [
  {
    id: 'sales',
    label: 'Total Sales',
    value: 128450,
    format: 'currency',
    change: 12.4,
    trend: 'up',
  },
  {
    id: 'orders',
    label: 'Total Orders',
    value: 3482,
    format: 'number',
    change: 8.1,
    trend: 'up',
  },
  {
    id: 'customers',
    label: 'Total Customers',
    value: 1926,
    format: 'number',
    change: 4.6,
    trend: 'up',
  },
  {
    id: 'products',
    label: 'Total Products',
    value: 642,
    format: 'number',
    change: -2.3,
    trend: 'down',
  },
];

export const revenueUpdates = [
  { month: 'Jan', footwear: 2.1, fashionware: 1.4 },
  { month: 'Feb', footwear: 3.2, fashionware: 2.0 },
  { month: 'Mar', footwear: 1.8, fashionware: 2.6 },
  { month: 'Apr', footwear: 3.6, fashionware: 1.2 },
  { month: 'May', footwear: 2.4, fashionware: 3.1 },
  { month: 'Jun', footwear: 3.9, fashionware: 2.3 },
];

export const salesOverview = {
  profit: 21256,
  expense: 22325,
  total: 43581,
};

export const monthlyEarnings = [
  { month: 'Jan', value: 4200 },
  { month: 'Feb', value: 5100 },
  { month: 'Mar', value: 4700 },
  { month: 'Apr', value: 6300 },
  { month: 'May', value: 5900 },
  { month: 'Jun', value: 8320 },
];

export const weeklyStats = [
  { day: 'Mon', sales: 320 },
  { day: 'Tue', sales: 480 },
  { day: 'Wed', sales: 260 },
  { day: 'Thu', sales: 610 },
  { day: 'Fri', sales: 540 },
  { day: 'Sat', sales: 710 },
  { day: 'Sun', sales: 390 },
];

export const yearlySales = [
  { month: 'Jan', sales: 4200 },
  { month: 'Feb', sales: 3100 },
  { month: 'Mar', sales: 5300 },
  { month: 'Apr', sales: 2800 },
  { month: 'May', sales: 6100 },
  { month: 'Jun', sales: 4600 },
  { month: 'Jul', sales: 6963 },
];

export const topLists = {
  topSales: { label: 'Top Sales', sublabel: 'Johnathon Doe', change: 68 },
  bestSeller: { label: 'Best Seller', sublabel: 'Footwear', change: 68 },
  mostCommented: { label: 'Most Commented', sublabel: 'Fashionware', change: 68 },
};

export const paymentGateways = [
  { id: 'paypal', name: 'PayPal', desc: 'Big Brands', amount: 7852, trend: 'up' },
  { id: 'wallet', name: 'Wallet', desc: 'Bill payment', amount: 325, trend: 'up' },
  { id: 'card', name: 'Credit card', desc: 'Money reversed', amount: 3546, trend: 'up' },
  { id: 'refund', name: 'Refund', desc: 'Bill payment', amount: -49, trend: 'down' },
];

export const recentActivity = [
  { id: 1, text: 'New order #ORD-3821 placed by Priya Nair', time: '5 min ago' },
  { id: 2, text: 'Product "Aero Runner Sneakers" is low on stock', time: '22 min ago' },
  { id: 3, text: 'Customer Aditya Rao left a 5-star review', time: '1 hr ago' },
  { id: 4, text: 'Order #ORD-3810 marked as delivered', time: '3 hr ago' },
];
