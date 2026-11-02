// Dummy product catalog data

const img = (seed) => `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}`;

export const categories = [
  'All',
  'Footwear',
  'Fashionware',
  'Electronics',
  'Accessories',
  'Home & Living',
];

export const products = [
  { id: 'P-1001', name: 'Aero Runner Sneakers', category: 'Footwear', price: 89.99, stock: 42, status: 'Active', image: img('sneaker1') },
  { id: 'P-1002', name: 'Classic Denim Jacket', category: 'Fashionware', price: 64.5, stock: 18, status: 'Active', image: img('jacket1') },
  { id: 'P-1003', name: 'Wireless Earbuds Pro', category: 'Electronics', price: 129.0, stock: 0, status: 'Out of Stock', image: img('earbuds1') },
  { id: 'P-1004', name: 'Leather Crossbody Bag', category: 'Accessories', price: 74.25, stock: 27, status: 'Active', image: img('bag1') },
  { id: 'P-1005', name: 'Minimalist Desk Lamp', category: 'Home & Living', price: 39.99, stock: 6, status: 'Low Stock', image: img('lamp1') },
  { id: 'P-1006', name: 'Trail Hiking Boots', category: 'Footwear', price: 112.0, stock: 33, status: 'Active', image: img('boot1') },
  { id: 'P-1007', name: 'Oversized Cotton Hoodie', category: 'Fashionware', price: 45.0, stock: 51, status: 'Active', image: img('hoodie1') },
  { id: 'P-1008', name: 'Smart Fitness Watch', category: 'Electronics', price: 159.99, stock: 14, status: 'Active', image: img('watch1') },
  { id: 'P-1009', name: 'Polarized Sunglasses', category: 'Accessories', price: 29.99, stock: 0, status: 'Out of Stock', image: img('sunglasses1') },
  { id: 'P-1010', name: 'Ceramic Table Vase', category: 'Home & Living', price: 22.5, stock: 9, status: 'Low Stock', image: img('vase1') },
  { id: 'P-1011', name: 'Canvas Slip-On Shoes', category: 'Footwear', price: 54.0, stock: 38, status: 'Active', image: img('shoe2') },
  { id: 'P-1012', name: 'Linen Summer Shirt', category: 'Fashionware', price: 41.75, stock: 22, status: 'Active', image: img('shirt1') },
  { id: 'P-1013', name: 'Bluetooth Speaker Mini', category: 'Electronics', price: 49.99, stock: 61, status: 'Active', image: img('speaker1') },
  { id: 'P-1014', name: 'Woven Wool Scarf', category: 'Accessories', price: 19.99, stock: 4, status: 'Low Stock', image: img('scarf1') },
  { id: 'P-1015', name: 'Rattan Storage Basket', category: 'Home & Living', price: 33.0, stock: 17, status: 'Active', image: img('basket1') },
];
