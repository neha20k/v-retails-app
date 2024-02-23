import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seats from "./views/Seats/Seats";
import SalesMembers from "./views/SalesMembers/SalesMembers";
import Analytics from "./views/Analytics/Analytics";
import ChatsTags from "./views/Chats&Tags/Chats&Tags";
import Custom from "./views/Custom/Custom";
import Sidebar from "./components/Sidebar/Sidebar";
import { routes } from "./routes/route";
import { PROJECT_LOGO_TEXT } from "./utils/constants";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Sidebar routes={routes} title={PROJECT_LOGO_TEXT} />
        <Routes>
          <Route path="/" index element={<Seats />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/sales-members" element={<SalesMembers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/chats-tags" element={<ChatsTags />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
