import { ChevronRight, Home as HomeIcon } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; page: string }[];
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Breadcrumbs({ items, currentPage, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1 text-muted-foreground hover:text-[#D62828] transition-colors"
      >
        <HomeIcon className="w-4 h-4" />
        <span>Home</span>
      </button>

      {items.map((item, index) => (
        <div key={item.page} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {index === items.length - 1 ? (
            <span className="font-semibold text-foreground">{item.label}</span>
          ) : (
            <button
              onClick={() => onNavigate(item.page)}
              className="text-muted-foreground hover:text-[#D62828] transition-colors"
            >
              {item.label}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}
