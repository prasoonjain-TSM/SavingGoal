import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MyForm from "./components/section/form/MyForm";
import FinancialGoalSummary from "./components/section/FinancialGoalSummary";
import ShowTask from "./components/showTable/ShowTask";
import History from "./components/showTable/History";
import TaskDetail from "./components/showTable/TaskDetail";
import EditTask from "./components/showTable/EditTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Record from "./components/allRecord/Record";
import CompareTask from "./components/compare/CompareTask";
import Notification from "./components/notification/NotificationIcon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <div
                className="d-flex flex-column flex-md-row m-5 mx-10"
                style={{ gap: "1rem" }}
              >
                {/* First Column */}
                <div className="p-3 border bg-light" style={{ flex: 1 }}>
                  <MyForm></MyForm>
                </div>
              </div>
            }
          />
          <Route exact path="/ShowTask" element={<ShowTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Record" element={<Record />} />
          <Route exact path="/CompareTask" element={<CompareTask />} />
          <Route path="/edit" element={<EditTask />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
