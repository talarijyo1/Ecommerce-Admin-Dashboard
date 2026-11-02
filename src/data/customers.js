// Dummy customer data

const avatar = (seed) => `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}`;

export const customers = [
  { id: 'C-001', name: 'Priya Nair', email: 'priya.nair@example.com', phone: '+91 98450 12345', orders: 12, status: 'Active', avatar: avatar('priya') },
  { id: 'C-002', name: 'Rohan Mehta', email: 'rohan.mehta@example.com', phone: '+91 99870 22341', orders: 5, status: 'Active', avatar: avatar('rohan') },
  { id: 'C-003', name: 'Ananya Iyer', email: 'ananya.iyer@example.com', phone: '+91 90210 55667', orders: 21, status: 'Active', avatar: avatar('ananya') },
  { id: 'C-004', name: 'Vikram Singh', email: 'vikram.singh@example.com', phone: '+91 98120 88990', orders: 2, status: 'Inactive', avatar: avatar('vikram') },
  { id: 'C-005', name: 'Sneha Reddy', email: 'sneha.reddy@example.com', phone: '+91 97531 44556', orders: 8, status: 'Active', avatar: avatar('sneha') },
  { id: 'C-006', name: 'Aditya Rao', email: 'aditya.rao@example.com', phone: '+91 96123 77889', orders: 16, status: 'Active', avatar: avatar('aditya') },
  { id: 'C-007', name: 'Kavya Menon', email: 'kavya.menon@example.com', phone: '+91 95432 11223', orders: 3, status: 'Inactive', avatar: avatar('kavya') },
  { id: 'C-008', name: 'Arjun Desai', email: 'arjun.desai@example.com', phone: '+91 94123 99887', orders: 9, status: 'Active', avatar: avatar('arjun') },
  { id: 'C-009', name: 'Ishita Kapoor', email: 'ishita.kapoor@example.com', phone: '+91 93456 65432', orders: 14, status: 'Active', avatar: avatar('ishita') },
  { id: 'C-010', name: 'Karan Malhotra', email: 'karan.malhotra@example.com', phone: '+91 92345 33221', orders: 1, status: 'Inactive', avatar: avatar('karan') },
];
