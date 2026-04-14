import Panel from "@/components/common/Panel.jsx";
import StatusTag from "@/components/common/StatusTag.jsx";
import { useActivity } from "@/context/ActivityContext.jsx";

const ReportsPanel = () => {
  const { data } = useActivity();
  const { reports } = data;
  return (
    <Panel title={reports.title} icon={reports.icon} iconColor={reports.iconColor} badge={reports.total} footer={<span className="text-[11px] text-muted-foreground">1-{reports.total} of {reports.total}</span>}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-175 border-collapse">
        <thead><tr className="bg-surface2">{["Entity", "Report", "Group", "Created", "Status"].map((h) => <th key={h} className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">{h}</th>)}</tr></thead>
        <tbody>
          {reports.items.map((item) => (
            <tr key={item.id} className="border-b border-border last:border-b-0 hover:bg-surface2 cursor-pointer transition-colors">
              <td className="px-4 py-3 font-medium text-sm">{item.entity}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{item.report}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{item.group}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground font-mono whitespace-nowrap">{item.created}</td>
              <td className="px-4 py-3"><StatusTag label={item.status === "delivered" ? "Delivered" : "Pending"} type={item.status} /></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </Panel>
  );
};

export default ReportsPanel;
