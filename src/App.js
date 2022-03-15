import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/Navbar";
import Movies from "./pages/Movies/Movies";
import Searchbar from "./pages/Searchbar/Searchbar";
import Trending from "./pages/Trending/Trending";
import Tvseries from "./pages/Tv-series/Tvseries";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/tvseries" component={Tvseries} />
            <Route path="/search" component={Searchbar} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
