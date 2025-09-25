import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>HOME</h1>
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <h1>ABOUT</h1>
            </>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <>
              <h1>PROJECTS</h1>
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <h1>CONTACT</h1>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
