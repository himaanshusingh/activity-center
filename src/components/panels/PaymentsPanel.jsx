import Panel from "@/components/common/Panel.jsx";
import StatusTag from "@/components/common/StatusTag.jsx";
import { useActivity } from "@/context/ActivityContext.jsx";

const PaymentsPanel = () => {
  const { data } = useActivity();
  const { payments } = data;
  return (
    <Panel title={payments.title} icon={payments.icon} iconColor={payments.iconColor} badge={payments.total} fullWidth footer={<span className="text-[11px] text-muted-foreground">1-{payments.total} of {payments.total}</span>}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-205 border-collapse">
        <thead><tr className="bg-surface2">{["ID", "Type", "Value date", "Amount", "Description", "Status"].map((h) => <th key={h} className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">{h}</th>)}</tr></thead>
        <tbody>
          {payments.items.map((item) => (
            <tr key={item.id} className="border-b border-border last:border-b-0 hover:bg-surface2 cursor-pointer transition-colors">
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{item.id}</td>
              <td className="px-4 py-3 font-medium text-sm">{item.type}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground font-mono whitespace-nowrap">{item.valueDate}</td>
              <td className="px-4 py-3 font-mono text-xs font-medium">{item.amount}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{item.description}</td>
              <td className="px-4 py-3"><StatusTag label="Client review" type="client" /></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </Panel>
  );
};

export default PaymentsPanel;
