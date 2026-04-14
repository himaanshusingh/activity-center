import Panel from "@/components/common/Panel.jsx";
import StatusTag from "@/components/common/StatusTag.jsx";
import { useActivity } from "@/context/ActivityContext.jsx";

const OtherWorkflows = () => {
  const { data } = useActivity();
  const { otherWorkflows } = data;
  return (
    <Panel title={otherWorkflows.title} icon={otherWorkflows.icon} iconColor={otherWorkflows.iconColor} badge={otherWorkflows.total} footer={<span className="text-[11px] text-muted-foreground">1-{otherWorkflows.total} of {otherWorkflows.total}</span>}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-160 border-collapse">
        <thead><tr className="bg-surface2">{["Fund", "Name", "Value date", "Status"].map((h) => <th key={h} className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">{h}</th>)}</tr></thead>
        <tbody>
          {otherWorkflows.items.map((item) => (
            <tr key={item.id} className="border-b border-border last:border-b-0 hover:bg-surface2 cursor-pointer transition-colors">
              <td className="px-4 py-3"><div className="font-medium text-sm">{item.fund}</div><div className="text-[11px] text-muted-foreground mt-0.5">{item.entity}</div></td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{item.name}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground font-mono whitespace-nowrap">{item.valueDate}</td>
              <td className="px-4 py-3"><div className="flex flex-col gap-1">{item.statuses.map((s, i) => <StatusTag key={i} label={s.label} type={s.type} />)}</div></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </Panel>
  );
};

export default OtherWorkflows;
