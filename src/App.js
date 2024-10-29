import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MyForm from "./components/section/form/MyForm";
import FinancialGoalSummary from "./components/section/FinancialGoalSummary";
import ShowTask from "./components/showTable/ShowTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Record from "./components/allRecord/Record";

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

                {/* Second Column */}
                <div className="p-3 border bg-light" style={{ flex: 1 }}>
                  <FinancialGoalSummary></FinancialGoalSummary>
                </div>
              </div>
            }
          />
            <Route
            exact
            path="/ShowTask"
            element={<ShowTask />}
          />
            <Route
            exact
            path="/Login"
            element={<Login />}
          />
           <Route
            exact
            path="/Register"
            element={<Register />}
          />
        <Route
            exact
            path="/Record"
            element={<Record />}
          />
          <Route
            exact
            path="/compare"
            element={<compare />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
