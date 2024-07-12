import "../../styles/home.css";
import Footer from "./Components/footer/page";
import Header from "./Components/header/page";
import Showmovies from "./pages/showMovies/page";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Showmovies />
      <Footer />
    </main>
  );
}
