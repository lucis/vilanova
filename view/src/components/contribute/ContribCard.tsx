interface ContribCardProps {
  title: string;
  icon: string;
  description: string;
  items: string[];
  actionLabel: string;
  actionUrl?: string;
  difficulty?: "easy" | "medium" | "hard";
  highlight?: boolean;
}

export function ContribCard({ 
  title, 
  icon, 
  description, 
  items, 
  actionLabel,
  actionUrl,
  difficulty,
  highlight = false
}: ContribCardProps) {
  const difficultyColors = {
    easy: "bg-[#4A7C59]",
    medium: "bg-[#D49B54]",
    hard: "bg-[#C84B31]",
  };

  const difficultyLabels = {
    easy: "FÁCIL",
    medium: "MÉDIO",
    hard: "DIFÍCIL",
  };

  return (
    <div className={`border-2 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      highlight 
        ? "border-[#C84B31] bg-gradient-to-br from-[#C84B31]/5 to-[#D49B54]/5" 
        : "border-[#8B6F47] bg-[#F5EBE0]"
    }`}>
      <div className="text-4xl mb-4">{icon}</div>
      
      <h3 className="font-bold text-xl text-[#2E5266] mb-3">
        {title}
      </h3>
      
      {highlight && (
        <div className="mb-3 inline-block">
          <span className="text-xs bg-[#C84B31] text-white px-3 py-1 rounded-full font-semibold">
            ⚠️ PRECISAMOS DE AJUDA!
          </span>
        </div>
      )}
      
      <p className="text-sm text-[#2E5266]/80 leading-relaxed mb-4">
        {description}
      </p>
      
      {items.length > 0 && (
        <ul className="space-y-2 mb-4">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-[#2E5266]/70 flex items-start gap-2">
              <span className="text-[#C84B31] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="flex items-center gap-2 flex-wrap mt-4">
        {actionUrl ? (
          <a
            href={actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-[#C84B31] text-white px-4 py-2 rounded-lg hover:bg-[#A63D40] transition-colors font-semibold"
          >
            {actionLabel} →
          </a>
        ) : (
          <button className="inline-flex items-center gap-2 text-sm bg-[#C84B31] text-white px-4 py-2 rounded-lg hover:bg-[#A63D40] transition-colors font-semibold">
            {actionLabel} →
          </button>
        )}
        
        {difficulty && (
          <span className={`text-xs ${difficultyColors[difficulty]} text-white px-3 py-1 rounded-full font-semibold`}>
            {difficultyLabels[difficulty]}
          </span>
        )}
      </div>
    </div>
  );
}
