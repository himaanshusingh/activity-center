import { createContext, useCallback, useContext, useState } from "react";
import activityData from "@/data/activityData.json";

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(activityData.tabs[0]);
  const [activeFilter, setActiveFilter] = useState("All funds");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = useCallback((data) => {
    setModalData(data);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalData(null);
  }, []);

  return (
    <ActivityContext.Provider
      value={{
        data: activityData,
        activeTab,
        setActiveTab,
        activeFilter,
        setActiveFilter,
        searchQuery,
        setSearchQuery,
        modalOpen,
        modalData,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => {
  const ctx = useContext(ActivityContext);
  if (!ctx) throw new Error("useActivity must be used within ActivityProvider");
  return ctx;
};
