import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { useScrollToTop } from "./Hooks/useScrollToTop";
import { Routes } from "./routes";
import { UserStorage } from "./context/UserContext";
import "./App.css";

export function App() {
  useScrollToTop();

  return (
    <div className="App">
      <UserStorage>
        <Header />

        <main className="AppBody">
          <Routes />
        </main>

        <Footer />
      </UserStorage>
    </div>
  );
}
