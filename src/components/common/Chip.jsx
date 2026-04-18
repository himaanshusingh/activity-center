const Chip = ({ label, active, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-1.25 px-3.5 py-1.25 rounded-full text-xs border cursor-pointer whitespace-nowrap transition-all ${
      active
        ? "bg-ac-blue-light text-ac-blue border-ac-blue-mid font-medium"
        : "bg-card text-muted-foreground border-border hover:border-border-strong hover:text-foreground"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Chip;
