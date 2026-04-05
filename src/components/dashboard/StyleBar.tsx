interface StyleBarProps {
  estilo: string;
  count: number;
  maxCount: number;
  color?: string;
}

export function StyleBar({ estilo, count, maxCount, color = "#C84B31" }: StyleBarProps) {
  const percentage = (count / maxCount) * 100;
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-sm">
        <span className="text-[#2E5266] font-medium">{estilo}</span>
        <span className="text-[#2E5266]/60">({count})</span>
      </div>
      <div className="w-full bg-[#E8D4B0] rounded-full h-3 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
}
