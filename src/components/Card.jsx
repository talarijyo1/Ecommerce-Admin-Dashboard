export default function Card({ children, className = '', title, subtitle, action }) {
  return (
    <div className={`card p-5 ${className}`}>
      {(title || action) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="font-display font-bold text-ink dark:text-white text-[15px]">{title}</h3>}
            {subtitle && <p className="text-xs text-ink/45 dark:text-white/40 mt-0.5">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
