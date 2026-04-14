import { AlertTriangle, Check } from "lucide-react";
import { cn } from "@/lib/utils.js";

const stateStyles = {
  done: "bg-ac-green-light text-ac-green",
  warn: "bg-ac-amber-light text-ac-amber",
  gray: "bg-ac-gray-light text-muted-foreground",
};

const WorkflowStep = ({ name, status, state }) => (
  <div className="border border-border rounded-lg p-3 flex items-center gap-3 bg-card">
    <div className={cn("w-7.5 h-7.5 rounded-full flex items-center justify-center text-sm shrink-0 font-semibold", stateStyles[state])}>
      {state === "done" ? <Check className="w-4 h-4" /> : state === "warn" ? <AlertTriangle className="w-4 h-4" /> : "-"}
    </div>
    <div>
      <div className="text-sm font-medium text-foreground">{name}</div>
      <div className={cn("text-[11px] text-muted-foreground", state === "warn" && "text-ac-amber")}>{status}</div>
    </div>
  </div>
);

export default WorkflowStep;
