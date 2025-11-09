interface ContribCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  items: string[];
  callout?: {
    title: string;
    description: string;
  };
  linkText: string;
  linkUrl: string;
  badgeText?: string;
  badgeColor?: string;
}

export function ContribCard({
  icon,
  title,
  subtitle,
  items,
  callout,
  linkText,
  linkUrl,
  badgeText,
  badgeColor = "#4A7C59"
}: ContribCardProps) {
  return (
    <div className="border-2 border-[#8B6F47] rounded-lg p-6 bg-[#F5EBE0] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="text-4xl mb-3">{icon}</div>
      
      <h3 className="font-bold text-xl text-[#2E5266] mb-2">
        {title}
      </h3>
      
      {subtitle && (
        <p className="text-sm text-[#2E5266]/70 mb-4 font-medium">
          {subtitle}
        </p>
      )}
      
      <ul className="space-y-2 text-sm text-[#2E5266]/80 leading-relaxed mb-4 flex-grow">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
      
      {callout && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg mb-4">
          <p className="text-sm font-semibold text-[#2E5266] mb-1">
            {callout.title}
          </p>
          <p className="text-xs text-[#2E5266]/80">
            {callout.description}
          </p>
        </div>
      )}
      
      <div className="flex items-center gap-2 mt-auto">
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#C84B31] font-semibold hover:underline"
        >
          {linkText} →
        </a>
        {badgeText && (
          <span 
            className="text-xs text-white px-2 py-1 rounded"
            style={{ backgroundColor: badgeColor }}
          >
            {badgeText}
          </span>
        )}
      </div>
    </div>
  );
}
