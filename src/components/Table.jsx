export default function Table({ columns, data, emptyMessage = 'No records found.' }) {
  return (
    <div className="overflow-x-auto -mx-5 px-5">
      <table className="w-full text-sm min-w-[640px]">
        <thead>
          <tr className="border-b border-black/5 dark:border-white/10">
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left font-semibold text-xs uppercase tracking-wide text-ink/40 dark:text-white/35 pb-3 pr-4 whitespace-nowrap"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="py-10 text-center text-ink/40 dark:text-white/40">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={row.id || i}
                className="border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors"
              >
                {columns.map((col) => (
                  <td key={col.key} className="py-3.5 pr-4 text-ink/75 dark:text-white/75 whitespace-nowrap">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
