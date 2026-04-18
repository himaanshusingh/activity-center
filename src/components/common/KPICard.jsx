const KPICard = ({ label, value, sub, warn }) => (
  <div className="bg-surface2 border border-border rounded-lg p-3.5">
    <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
      {label}
    </div>
    <div className={`text-[22px] font-semibold text-foreground ${warn ? "text-ac-amber" : ""}`}
    >
      {value}
    </div>
    {sub && (
      <div className="text-[11px] text-muted-foreground mt-0.5">{sub}</div>
    )}
  </div>
);

export default KPICard;
