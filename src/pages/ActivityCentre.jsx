import Navbar from "../components/layout/Navbar";
import FilterBar from "../components/layout/FilterBar";
import NAVOverview from "../components/panels/NAVOverview";
import OtherWorkflows from "../components/panels/OtherWorkflows";
import CapitalEvents from "../components/panels/CapitalEvents";
import ReportsPanel from "../components/panels/ReportsPanel";
import PaymentsPanel from "../components/panels/PaymentsPanel";
import WorkflowModal from "../components/modal/WorkflowModal";

const ActivityCentre = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <FilterBar />
      <main className="p-3 sm:p-4 lg:p-5 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 max-w-400 mx-auto w-full">
        <NAVOverview />
        <OtherWorkflows />
        <CapitalEvents />
        <ReportsPanel />
        <PaymentsPanel />
      </main>
      <WorkflowModal />
    </div>
  );
};

export default ActivityCentre;
