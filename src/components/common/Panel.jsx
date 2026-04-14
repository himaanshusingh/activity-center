import { Clipboard, Clock, CreditCard, DollarSign, FileText } from "lucide-react";
import { cn } from "@/lib/utils.js";

const iconMap = {
  clipboard: Clipboard,
  clock: Clock,
  dollar: DollarSign,
  file: FileText,
  creditCard: CreditCard,
};

const colorMap = {
  blue: "bg-ac-blue-light text-ac-blue",
  green: "bg-ac-green-light text-ac-green",
  amber: "bg-ac-amber-light text-ac-amber",
  purple: "bg-ac-purple-light text-ac-purple",
  gray: "bg-ac-gray-light text-muted-foreground",
};

const Panel = ({ title, icon, iconColor, badge, actions, footer, fullWidth, children }) => {
  const IconComp = iconMap[icon] || Clipboard;

  return (
    <div className={cn("bg-card border border-border rounded-xl overflow-hidden shadow-sm", fullWidth && "col-span-full")}>
      <div className="px-3 sm:px-4 py-3.5 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 bg-card">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground min-w-0">
          <div className={cn("w-7 h-7 rounded-md flex items-center justify-center shrink-0", colorMap[iconColor])}>
            <IconComp className="w-3.5 h-3.5" />
          </div>
          <span className="truncate">{title}</span>
          {badge !== undefined && <span className="bg-ac-gray-light text-muted-foreground text-[11px] font-medium px-2 py-0.5 rounded-full">{badge}</span>}
        </div>
        {actions && <div className="flex gap-1.5 w-full sm:w-auto justify-start sm:justify-end">{actions}</div>}
      </div>
      {children}
      {footer && <div className="px-3 sm:px-4 py-2.5 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 justify-between bg-surface2">{footer}</div>}
    </div>
  );
};

export default Panel;
