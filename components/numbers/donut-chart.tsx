'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export interface DonutDatum {
  label: string;
  value: number;
  colorVar: string;
}

interface DonutChartProps {
  title: string;
  data: DonutDatum[];
}

const DonutChart = ({ title, data }: DonutChartProps) => {
  return (
    <figure className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(0,20rem)_1fr]">
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.label} fill={`var(${entry.colorVar})`} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, label) => [`${value}%`, label]}
              contentStyle={{
                borderRadius: 'var(--radius-card)',
                borderColor: 'var(--color-border)',
                fontSize: '0.875rem',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <figcaption>
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          {title}
        </p>
        <ul className="flex flex-col gap-3">
          {data.map((entry) => (
            <li key={entry.label} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-3 shrink-0 rounded-full"
                style={{ backgroundColor: `var(${entry.colorVar})` }}
              />
              <span className="text-sm text-foreground">{entry.label}</span>
              <span className="ml-auto font-body text-sm font-bold text-foreground">
                {entry.value}%
              </span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
};

export default DonutChart;
