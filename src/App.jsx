import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActivityProvider } from "@/context/ActivityContext.jsx";
import ActivityCentre from "./pages/ActivityCentre.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <BrowserRouter>
    <ActivityProvider>
      <Routes>
        <Route path="/" element={<ActivityCentre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ActivityProvider>
  </BrowserRouter>
);

export default App;
