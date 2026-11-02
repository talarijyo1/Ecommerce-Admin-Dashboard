import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

const tooltipStyle = {
  borderRadius: 12,
  border: 'none',
  boxShadow: '0 8px 24px -8px rgba(15,18,41,0.25)',
  fontSize: 12,
  fontFamily: 'Inter, sans-serif',
};

export const COLORS = ['#5B5FEF', '#33D2C0', '#FFB84D', '#FF6F47', '#EF476F'];

export function SimpleBarChart({ data, xKey, bars, height = 220 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} barGap={6}>
        <CartesianGrid vertical={false} stroke="rgba(15,18,41,0.06)" />
        <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#8A8FB8' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#8A8FB8' }} axisLine={false} tickLine={false} width={30} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(91,95,239,0.06)' }} />
        {bars.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
        {bars.map((b, i) => (
          <Bar key={b.key} dataKey={b.key} name={b.name} fill={b.color || COLORS[i % COLORS.length]} radius={[6, 6, 0, 0]} maxBarSize={28} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export function SimpleLineChart({ data, xKey, lines, height = 220 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} stroke="rgba(15,18,41,0.06)" />
        <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#8A8FB8' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#8A8FB8' }} axisLine={false} tickLine={false} width={30} />
        <Tooltip contentStyle={tooltipStyle} />
        {lines.map((l, i) => (
          <Line
            key={l.key}
            type="monotone"
            dataKey={l.key}
            name={l.name}
            stroke={l.color || COLORS[i % COLORS.length]}
            strokeWidth={2.5}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function SimpleAreaChart({ data, xKey, areaKey, color = '#5B5FEF', height = 220 }) {
  const gradId = `grad-${areaKey}`;
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#8A8FB8' }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey={areaKey} stroke={color} strokeWidth={2.5} fill={`url(#${gradId})`} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function SimpleDonutChart({ data, height = 220, centerLabel, centerValue }) {
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="68%"
            outerRadius="90%"
            paddingAngle={3}
            stroke="none"
          >
            {data.map((entry, i) => (
              <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
      {(centerLabel || centerValue) && (
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="text-center">
            {centerValue && <p className="font-display font-extrabold text-xl text-ink dark:text-white">{centerValue}</p>}
            {centerLabel && <p className="text-xs text-ink/45 dark:text-white/40">{centerLabel}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
