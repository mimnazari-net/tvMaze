import "../../styles/home.css";
import Footer from "./Components/footer";
import Header from "./Components/header";
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
