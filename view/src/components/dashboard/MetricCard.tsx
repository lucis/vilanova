interface MetricCardProps {
  value: number;
  label: string;
  icon?: string;
}

export function MetricCard({ value, label, icon = "📊" }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border-2 border-[#8B6F47] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-5xl font-bold text-[#C84B31] mb-2">{value}</div>
      <div className="text-sm text-[#2E5266]/70 font-medium">{label}</div>
    </div>
  );
}
