import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import History from "./sections/History";
import Portfolio from "./sections/Works";
import "./assets/scss/index.scss";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Intro />
        <Skills />
        <History />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
