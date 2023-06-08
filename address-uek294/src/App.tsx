import "./App.css";
import HomePage from "./components/Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import SingleCard from "./components/Pages/SingleCard";

function App() {
  return (
      <Routes>
        <Route path="address/" element={<HomePage />} />
          
          <Route path="address/:id" element={<SingleCard />}/>
        
        <Route path="login/" element={<LoginPage />}></Route>
      </Routes>
  );
}

export default App;
