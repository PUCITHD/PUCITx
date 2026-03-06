import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "./components/Toast";
import CommandPalette from "./components/CommandPalette";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseView from "./pages/CourseView";
import About from "./pages/About";
import Contribute from "./pages/Contribute";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white/87 font-sans antialiased">
      <ScrollToTop />
      <CommandPalette />
      <ToastContainer />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseView />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
