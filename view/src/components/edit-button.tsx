import { Edit } from "lucide-react";

interface EditButtonProps {
  filePath: string; // "repentes/acervo-estruturado.json"
  label?: string;
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md";
}

export function EditButton({ 
  filePath, 
  label = "Sugerir Melhoria",
  variant = "secondary",
  size = "md" 
}: EditButtonProps) {
  const githubUrl = `https://github.com/lucis/vilanova/edit/main/${filePath}`;
  
  const classes = {
    primary: "bg-[#C84B31] text-white hover:bg-[#A63D40]",
    secondary: "border-2 border-[#8B6F47] text-[#2E5266] hover:bg-[#8B6F47] hover:text-white",
    text: "text-[#C84B31] hover:underline"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm"
  };
  
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg transition-colors font-semibold ${classes[variant]} ${sizeClasses[size]}`}
      title="Abrir editor do GitHub para sugerir melhorias neste conteúdo"
    >
      <Edit className="w-4 h-4" />
      {label}
    </a>
  );
}

