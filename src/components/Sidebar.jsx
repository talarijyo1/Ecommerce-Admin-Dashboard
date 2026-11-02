import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Boxes,
  BarChart3,
  Settings,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
  Store,
  X,
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/orders', label: 'Orders', icon: ShoppingBag },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/inventory', label: 'Inventory', icon: Boxes },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
];

export default function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/50 lg:hidden"
          onClick={onCloseMobile}
        />
      )}
      <aside
        className={`fixed z-50 inset-y-0 left-0 flex flex-col bg-navy-950 text-white/80 transition-all duration-200 ease-out
          ${collapsed ? 'w-20' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-5 h-16 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="grid place-items-center h-8 w-8 rounded-lg bg-brand-500 shrink-0">
              <Store size={18} className="text-white" />
            </div>
            {!collapsed && (
              <span className="font-display font-bold text-lg text-white whitespace-nowrap">
                eMart
              </span>
            )}
          </div>
          <button
            className="lg:hidden text-white/60 hover:text-white"
            onClick={onCloseMobile}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 mt-4 space-y-6 overflow-y-auto">
          <div>
            {!collapsed && (
              <p className="px-3 text-[11px] font-semibold tracking-wider text-white/35 uppercase mb-2">
                Admin Tools
              </p>
            )}
            <ul className="space-y-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={onCloseMobile}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors
                      ${isActive ? 'bg-brand-500 text-white shadow-soft' : 'text-white/65 hover:bg-white/5 hover:text-white'}
                      ${collapsed ? 'justify-center' : ''}`
                    }
                    title={collapsed ? label : undefined}
                  >
                    <Icon size={18} className="shrink-0" />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {!collapsed && (
              <p className="px-3 text-[11px] font-semibold tracking-wider text-white/35 uppercase mb-2">
                Configuration
              </p>
            )}
            <ul className="space-y-1">
              <li>
                <NavLink
                  to="/settings"
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors
                    ${isActive ? 'bg-brand-500 text-white shadow-soft' : 'text-white/65 hover:bg-white/5 hover:text-white'}
                    ${collapsed ? 'justify-center' : ''}`
                  }
                  title={collapsed ? 'Settings' : undefined}
                >
                  <Settings size={18} className="shrink-0" />
                  {!collapsed && <span>Settings</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="px-3 pb-4 pt-2 border-t border-white/5 space-y-1">
          <button
            className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors ${collapsed ? 'justify-center' : ''}`}
            title="Log out"
          >
            <LogOut size={18} />
            {!collapsed && <span>Log out</span>}
          </button>
          <button
            onClick={onToggleCollapse}
            className={`hidden lg:flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/50 hover:bg-white/5 hover:text-white transition-colors ${collapsed ? 'justify-center' : ''}`}
          >
            {collapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
