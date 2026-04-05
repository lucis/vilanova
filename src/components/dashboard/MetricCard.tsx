interface MetricCardProps {
  value: number;
  label: string;
  icon?: string;
  color?: string;
}

export function MetricCard({ value, label, icon, color = "#C84B31" }: MetricCardProps) {
  return (
    <div className="text-center hover:scale-105 transition-transform">
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <div 
        className="text-5xl md:text-6xl font-bold mb-2"
        style={{ color }}
      >
        {value}
      </div>
      <div className="text-sm md:text-base text-[#2E5266]/70">{label}</div>
    </div>
  );
}
