import { cn } from "@/lib/utils.js";

const statusStyles = {
  done: "bg-ac-green-light text-[#166534]",
  warn: "bg-ac-amber-light text-[#92400e]",
  gray: "bg-ac-gray-light text-muted-foreground",
  blue: "bg-ac-blue-light text-[#1e40af]",
};

const dotStyles = {
  done: "bg-ac-green",
  warn: "bg-ac-amber",
  gray: "bg-border-strong",
  blue: "bg-ac-blue",
};

const StatusPill = ({ label, status }) => (
  <span className={cn("inline-flex items-center gap-1 px-2 py-0.75 rounded-xl text-[11px] whitespace-nowrap", statusStyles[status])}>
    <span className={cn("w-1.25 h-1.25 rounded-full shrink-0", dotStyles[status])} />
    {label}
  </span>
);

export default StatusPill;
