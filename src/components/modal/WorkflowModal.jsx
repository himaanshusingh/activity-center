import { useEffect, useState } from "react";
import { X } from "lucide-react";
import KPICard from "@/components/common/KPICard.jsx";
import WorkflowStep from "@/components/common/WorkflowStep.jsx";
import { useActivity } from "@/context/ActivityContext.jsx";

const WorkflowModal = () => {
  const { modalOpen, modalData, closeModal, data } = useActivity();
  const { modalDefaults } = data;
  const [activeTab, setActiveTab] = useState(modalDefaults.tabs[0]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeModal]);

  if (!modalOpen || !modalData) return null;
  const kpis = modalDefaults.kpis.map((k) =>
    k.dynamic ? { ...k, value: `${modalData.progress}%` } : k,
  );

  return (
    <div
      className="fixed inset-0 bg-foreground/45 backdrop-blur-[3px] z-100 flex items-start justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="bg-card border border-border rounded-xl w-full max-w-225 shadow-lg animate-slide-up my-auto">
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-border flex items-start justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-base sm:text-[17px] font-semibold text-foreground">
              {modalData.fund} - {modalData.workflow}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {modalData.entity} - Value date: {modalData.valueDate}
            </p>
          </div>
          <button
            onClick={closeModal}
            className="w-8 h-8 border border-border rounded-md flex items-center justify-center text-muted-foreground hover:bg-surface2 hover:text-foreground transition-all shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex border-b border-border px-4 sm:px-6 bg-card overflow-x-auto">
          {modalDefaults.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2.5 text-sm border-b-2 border-transparent cursor-pointer transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "text-ac-blue border-b-ac-blue font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {kpis.map((kpi, i) => (
              <KPICard
                key={i}
                label={kpi.label}
                value={kpi.value}
                sub={kpi.sub}
                warn={kpi.warn}
              />
            ))}
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3 mt-5">
            Workflow steps
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {modalDefaults.workflowSteps.map((step, i) => (
              <WorkflowStep
                key={i}
                name={step.name}
                status={step.status}
                state={step.state}
              />
            ))}
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3 mt-5">
            Investor capital tracking
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-215 border-collapse">
              <thead>
                <tr className="bg-surface2">
                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">
                    Investor
                  </th>
                  {[
                    "Opening bal.",
                    "Subscriptions",
                    "Redemptions",
                    "P&L alloc.",
                    "Fees",
                    "Closing bal.",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-right text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {modalDefaults.investors.map((inv, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-b-0 hover:bg-surface2 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-sm">
                      {inv.name}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-xs">
                      {inv.opening}
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-mono text-xs ${inv.subscriptions.startsWith("+") ? "text-ac-green" : ""}`}
                    >
                      {inv.subscriptions}
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-mono text-xs ${inv.redemptions.startsWith("-") ? "text-ac-red" : ""}`}
                    >
                      {inv.redemptions}
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-mono text-xs ${inv.pnl.startsWith("+") ? "text-ac-green" : ""}`}
                    >
                      {inv.pnl}
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-mono text-xs ${inv.fees.startsWith("-") ? "text-ac-red" : ""}`}
                    >
                      {inv.fees}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-xs font-semibold">
                      {inv.closing}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-ac-green-light text-[#166534]">
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowModal;
