import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Pagination from "@/components/common/Pagination.jsx";
import Panel from "@/components/common/Panel.jsx";
import ProgressBar from "@/components/common/ProgressBar.jsx";
import StatusPill from "@/components/common/StatusPill.jsx";
import { useActivity } from "@/context/ActivityContext.jsx";

const ITEMS_PER_PAGE = 5;

const NAVOverview = () => {
  const { data, openModal, searchQuery } = useActivity();
  const { navOverview } = data;
  const [page, setPage] = useState(1);

  const filtered = navOverview.workflows.filter((w) => !searchQuery || w.fund.toLowerCase().includes(searchQuery.toLowerCase()) || w.workflow.toLowerCase().includes(searchQuery.toLowerCase()));
  const totalPages = Math.ceil(navOverview.totalWorkflows / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Panel
      title={navOverview.title}
      icon={navOverview.icon}
      iconColor={navOverview.iconColor}
      badge={navOverview.totalWorkflows}
      fullWidth
      actions={
        <>
          <button className="text-xs px-3 py-1.5 rounded-md border border-border bg-card text-muted-foreground hover:bg-surface2 hover:border-border-strong hover:text-foreground transition-all">Export</button>
          <button className="text-xs px-3 py-1.5 rounded-md border border-ac-blue bg-ac-blue text-primary-foreground hover:opacity-90 transition-all">+ New workflow</button>
        </>
      }
      footer={
        <>
          <span className="text-[11px] text-muted-foreground">Showing {(page - 1) * ITEMS_PER_PAGE + 1}-{Math.min(page * ITEMS_PER_PAGE, navOverview.totalWorkflows)} of {navOverview.totalWorkflows} workflows</span>
          <Pagination current={page} total={totalPages} onPageChange={setPage} />
        </>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-215 border-collapse">
        <thead>
          <tr className="bg-surface2">
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">Fund & entity</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">Workflow</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">Value date</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">Progress</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border whitespace-nowrap">Status checkpoints</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border" />
          </tr>
        </thead>
        <tbody>
          {displayed.map((wf) => (
            <tr key={wf.id} onClick={() => openModal({ fund: wf.fund, workflow: wf.workflow, entity: wf.entity, valueDate: wf.valueDate, progress: wf.progress })} className="border-b border-border last:border-b-0 hover:bg-surface2 cursor-pointer transition-colors group">
              <td className="px-4 py-3 min-w-35">
                <div className="font-medium text-sm group-hover:text-ac-blue transition-colors">{wf.fund}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5 max-w-32.5 truncate">{wf.entity}</div>
              </td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{wf.workflow}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground font-mono whitespace-nowrap">{wf.valueDate}</td>
              <td className="px-4 py-3"><ProgressBar value={wf.progress} color={wf.progressColor} /></td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1 max-w-[320px]">
                  {wf.checkpoints.map((cp, i) => <StatusPill key={i} label={cp.label} status={cp.status} />)}
                </div>
              </td>
              <td className="px-4 py-3 text-muted-foreground group-hover:text-ac-blue"><ChevronRight className="w-4 h-4" /></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </Panel>
  );
};

export default NAVOverview;
