import { useState } from "react";
import Pagination from "@/components/common/Pagination.jsx";
import Panel from "@/components/common/Panel.jsx";
import StatusTag from "@/components/common/StatusTag.jsx";
import { useActivity } from "@/context/ActivityContext.jsx";

const CapitalEvents = () => {
  const { data } = useActivity();
  const { capitalEvents } = data;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(capitalEvents.total / 5);

  return (
    <Panel
      title={capitalEvents.title}
      icon={capitalEvents.icon}
      iconColor={capitalEvents.iconColor}
      badge={capitalEvents.total}
      actions={<button className="text-xs px-3 py-1.5 rounded-md border border-border bg-card text-muted-foreground hover:bg-surface2 hover:border-border-strong hover:text-foreground transition-all">View all</button>}
      footer={<><span className="text-[11px] text-muted-foreground">1-5 of {capitalEvents.total}</span><Pagination current={page} total={totalPages} onPageChange={setPage} /></>}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-165 border-collapse">
        <thead><tr className="bg-surface2">{["ID", "Fund", "Type", "Value date", "Status"].map((h) => <th key={h} className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">{h}</th>)}</tr></thead>
        <tbody>
          {capitalEvents.items.map((item) => (
            <tr key={item.id} className="border-b border-border last:border-b-0 hover:bg-surface2 cursor-pointer transition-colors">
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{item.id}</td>
              <td className="px-4 py-3 font-medium text-sm">{item.fund}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{item.type}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground font-mono whitespace-nowrap">{item.valueDate}</td>
              <td className="px-4 py-3"><StatusTag label={item.status === "initiated" ? "Initiated" : "Oversight review"} type={item.status} /></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </Panel>
  );
};

export default CapitalEvents;
