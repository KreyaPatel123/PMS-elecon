import { Routes, Route, useNavigate } from "react-router-dom"
import Header from "./components/structure/Header"
import Footer from "./components/structure/Footer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Button } from "./components/ui/button"
import "./App.css"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex gap-4 p-6">
      <Button onClick={() => navigate("/login")}>Login Page</Button>
      <Button onClick={() => navigate("/signup")}>Signup Page</Button>
    </div>
  )
}

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
    </Routes>
    <Footer />
    </>
    
  )
}

export default App
