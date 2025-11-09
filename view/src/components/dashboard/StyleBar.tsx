interface StyleBarProps {
  styleName: string;
  count: number;
  maxCount: number;
}

export function StyleBar({ styleName, count, maxCount }: StyleBarProps) {
  const percentage = (count / maxCount) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-[#2E5266]">{styleName}</span>
        <span className="text-sm font-bold text-[#C84B31]">{count}</span>
      </div>
      <div className="w-full bg-[#E8D4B0] rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-[#C84B31] to-[#D49B54] h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
