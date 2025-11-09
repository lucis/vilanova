import { Link } from "@tanstack/react-router";

interface MetricPillProps {
  value: number;
  label: string;
  to: string;
}

export function MetricPill({ value, label, to }: MetricPillProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 px-6 py-4 bg-white border-3 border-[#C84B31] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-[#A63D40]"
    >
      <span className="text-4xl md:text-5xl font-bold text-[#C84B31]">{value}</span>
      <span className="text-base md:text-lg font-semibold text-[#2E5266]">{label}</span>
    </Link>
  );
}
