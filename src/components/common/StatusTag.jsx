const typeStyles = {
  delivered: "bg-ac-green-light text-[#166534]",
  initiated: "bg-ac-amber-light text-[#92400e]",
  review: "bg-ac-purple-light text-[#5b21b6]",
  pending: "bg-ac-gray-light text-muted-foreground",
  client: "bg-ac-blue-light text-[#1e40af]",
};

const StatusTag = ({ label, type }) => (
  <span
    className={`inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.75 rounded-full ${typeStyles[type] || ""}`}
  >
    {label}
  </span>
);

export default StatusTag;
