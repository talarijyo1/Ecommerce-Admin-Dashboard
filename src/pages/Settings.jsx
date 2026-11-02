import { useState } from 'react';
import { Sun, Moon, Camera } from 'lucide-react';
import Card from '../components/Card';
import { useTheme } from '../context/ThemeContext';

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${checked ? 'bg-brand-500' : 'bg-black/10 dark:bg-white/15'}`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [profile, setProfile] = useState({
    name: 'Mathew Anderson',
    email: 'mathew.anderson@emart.com',
    phone: '+1 (555) 012-3456',
    role: 'Store Administrator',
  });
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    lowStock: true,
    newCustomers: false,
    weeklyReports: true,
    promotions: false,
  });
  const [saved, setSaved] = useState(false);

  const handleProfileChange = (field) => (e) => setProfile((p) => ({ ...p, [field]: e.target.value }));
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="font-display font-bold text-xl text-ink dark:text-white">Settings</h2>
        <p className="text-sm text-ink/45 dark:text-white/40">Manage your profile, notifications, and appearance</p>
      </div>

      <Card title="Profile">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Mathew"
              alt="Profile avatar"
              className="h-16 w-16 rounded-full bg-brand-50 dark:bg-white/10"
            />
            <button className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-brand-500 grid place-items-center text-white">
              <Camera size={12} />
            </button>
          </div>
          <div>
            <p className="font-semibold text-ink dark:text-white">{profile.name}</p>
            <p className="text-sm text-ink/45 dark:text-white/40">{profile.role}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-semibold text-ink/50 dark:text-white/40">Full name</span>
            <input
              value={profile.name}
              onChange={handleProfileChange('name')}
              className="mt-1.5 w-full px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-sm text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-ink/50 dark:text-white/40">Email address</span>
            <input
              value={profile.email}
              onChange={handleProfileChange('email')}
              className="mt-1.5 w-full px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-sm text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-ink/50 dark:text-white/40">Phone number</span>
            <input
              value={profile.phone}
              onChange={handleProfileChange('phone')}
              className="mt-1.5 w-full px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-sm text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-ink/50 dark:text-white/40">Role</span>
            <input
              value={profile.role}
              onChange={handleProfileChange('role')}
              className="mt-1.5 w-full px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-sm text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </label>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button onClick={handleSave} className="btn-primary px-5 py-2.5 text-sm">
            Save changes
          </button>
          {saved && <span className="text-teal-500 text-sm font-medium">Saved</span>}
        </div>
      </Card>

      <Card title="Notifications" subtitle="Choose what updates you want to receive">
        <div className="space-y-4">
          {[
            { key: 'orderUpdates', label: 'Order updates', desc: 'Get notified when an order status changes' },
            { key: 'lowStock', label: 'Low stock alerts', desc: 'Get notified when a product is running low' },
            { key: 'newCustomers', label: 'New customer signups', desc: 'Get notified when a customer creates an account' },
            { key: 'weeklyReports', label: 'Weekly reports', desc: 'Receive a performance summary every Monday' },
            { key: 'promotions', label: 'Promotions and tips', desc: 'Occasional product updates from eMart' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-ink dark:text-white">{item.label}</p>
                <p className="text-xs text-ink/45 dark:text-white/40">{item.desc}</p>
              </div>
              <Toggle
                checked={notifications[item.key]}
                onChange={(val) => setNotifications((n) => ({ ...n, [item.key]: val }))}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card title="Appearance" subtitle="Choose how eMart Admin looks to you">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-colors ${
              theme === 'light' ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-black/10 dark:border-white/10'
            }`}
          >
            <Sun size={18} className="text-amber-500" />
            <span className="text-sm font-semibold text-ink dark:text-white">Light mode</span>
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-colors ${
              theme === 'dark' ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-black/10 dark:border-white/10'
            }`}
          >
            <Moon size={18} className="text-brand-500" />
            <span className="text-sm font-semibold text-ink dark:text-white">Dark mode</span>
          </button>
        </div>
      </Card>
    </div>
  );
}
