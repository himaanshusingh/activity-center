import { Clock, Search } from "lucide-react";
import Chip from "@/components/common/Chip.jsx";
import { useActivity } from "@/context/ActivityContext.jsx";

const FilterBar = () => {
  const { data, activeFilter, setActiveFilter, searchQuery, setSearchQuery } = useActivity();

  return (
    <div className="bg-card border-b border-border px-3 sm:px-4 lg:px-6 py-2.5 flex flex-wrap items-center gap-2">
      {data.filters.funds.map((fund) => (
        <Chip key={fund} label={fund} active={activeFilter === fund} onClick={() => setActiveFilter(fund)} />
      ))}
      <div className="w-px h-5 bg-border mx-1 shrink-0" />
      {data.filters.statuses.map((status) => (
        <Chip
          key={status}
          label={status}
          icon={status === "Pending action" ? <Clock className="w-2.75 h-2.75" /> : undefined}
          onClick={() => {}}
        />
      ))}
      <div className="flex items-center gap-2 bg-surface2 border border-border rounded-md px-3 py-1.5 text-xs text-muted-foreground w-full sm:w-auto sm:ml-auto min-w-0 sm:min-w-55">
        <Search className="w-3.25 h-3.25" />
        <input
          type="text"
          placeholder="Search workflows..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground w-full text-xs"
        />
      </div>
    </div>
  );
};

export default FilterBar;
