import { Calendar, LayoutGrid } from "lucide-react";
import { useActivity } from "@/context/ActivityContext.jsx";

const Navbar = () => {
  const { data, activeTab, setActiveTab } = useActivity();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-30 shadow-sm">
      {/* Mobile-only navbar */}
      <div className="md:hidden">
        <div className="px-3 pt-3 pb-2 flex items-center gap-2.5">
          <div className="w-7.5 h-7.5 bg-ac-blue rounded-md flex items-center justify-center shrink-0">
            <LayoutGrid className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground truncate">Activity Centre</span>
        </div>

        <nav className="px-3 border-t border-border overflow-x-auto">
          <div className="flex min-w-max">
            {data.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2.5 text-xs border-b-2 border-transparent cursor-pointer whitespace-nowrap transition-colors ${
                  activeTab === tab ? "text-ac-blue border-b-ac-blue font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Tablet + laptop + desktop navbar (restored) */}
      <div className="hidden md:flex h-14 items-center px-4 lg:px-6 gap-0 overflow-x-auto">
        <div className="flex items-center gap-2.5 mr-6 lg:mr-9 shrink-0">
          <div className="w-7.5 h-7.5 bg-ac-blue rounded-md flex items-center justify-center">
            <LayoutGrid className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-[15px] font-semibold text-foreground whitespace-nowrap">Activity Centre</span>
        </div>

        <nav className="flex h-14 gap-0 min-w-max">
          {data.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 lg:px-4 text-[13px] border-b-2 border-transparent cursor-pointer flex items-center whitespace-nowrap transition-colors ${
                activeTab === tab ? "text-ac-blue border-b-ac-blue font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 bg-surface2 border border-border rounded-md px-3 py-1.5 text-xs text-muted-foreground cursor-pointer font-mono text-[11px] whitespace-nowrap">
            <Calendar className="w-3 h-3" />
            <strong className="text-foreground font-medium">{data.dateRange.from}</strong>
            <span>-</span>
            <strong className="text-foreground font-medium">{data.dateRange.to}</strong>
          </div>
          <div className="w-8 h-8 rounded-full bg-ac-blue text-primary-foreground text-xs font-semibold flex items-center justify-center">
            {data.user.initials}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
