import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/Navbar";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Trending from "./pages/Trending/Trending";
import Tvseries from "./pages/Tv-series/Tvseries";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending/>} exact />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/tvseries" element={<Tvseries/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
