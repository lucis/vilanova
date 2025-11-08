interface MetricPillProps {
  value: number;
  label: string;
}

export function MetricPill({ value, label }: MetricPillProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#8B6F47] rounded-full shadow-sm">
      <span className="text-2xl font-bold text-[#C84B31]">{value}</span>
      <span className="text-sm text-[#2E5266]/70">{label}</span>
    </div>
  );
}
