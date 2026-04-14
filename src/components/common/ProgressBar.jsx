import { cn } from "@/lib/utils.js";

const colorMap = {
  green: "bg-ac-green",
  blue: "bg-ac-blue",
  amber: "bg-ac-amber",
};

const ProgressBar = ({ value, color, className }) => (
  <div className={cn("flex items-center gap-2.5 min-w-27.5", className)}>
    <div className="flex-1 h-1.25 bg-ac-gray-mid rounded-full overflow-hidden">
      <div className={cn("h-full rounded-full transition-all duration-300", colorMap[color])} style={{ width: `${value}%` }} />
    </div>
    <span className="text-[11px] text-muted-foreground font-mono min-w-7.5 text-right">{value}%</span>
  </div>
);

export default ProgressBar;
