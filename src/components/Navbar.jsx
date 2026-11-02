import { Menu, Search, Bell, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenMobileMenu, title = 'Dashboard' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center gap-3 px-4 sm:px-6 bg-canvas/80 dark:bg-navy-950/80 backdrop-blur border-b border-black/5 dark:border-white/5">
      <button
        onClick={onOpenMobileMenu}
        className="lg:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-ink dark:text-white/80"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      <h1 className="font-display font-bold text-lg text-ink dark:text-white hidden sm:block">
        {title}
      </h1>

      <div className="flex-1" />

      <div className="relative hidden md:block w-64">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/35 dark:text-white/35" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/5 dark:bg-white/5 text-sm placeholder:text-ink/40 dark:placeholder:text-white/40 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      </div>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-ink/70 dark:text-white/70"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-ink/70 dark:text-white/70 relative">
        <Mail size={18} />
      </button>

      <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-ink/70 dark:text-white/70 relative">
        <Bell size={18} />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-coral-500" />
      </button>

      <div className="flex items-center gap-2 pl-2 border-l border-black/5 dark:border-white/10">
        <img
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Mathew"
          alt="Admin avatar"
          className="h-9 w-9 rounded-full bg-brand-100"
        />
        <div className="hidden sm:block leading-tight">
          <p className="text-sm font-semibold text-ink dark:text-white">Mathew Anderson</p>
          <p className="text-xs text-ink/50 dark:text-white/40">Admin</p>
        </div>
      </div>
    </header>
  );
}
