import "./App.css";
// 4)AGGIUNGIAMO L'IMPORT DEL CSS DI BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
// 3)MY NAV -importo il file MyNav
import MyNav from "./components/MyNav";

// D)MY FOOTER - importo il file Myfooter
import MyFooter from "./components/MyFooter";

// III) WELCOME - importo il file di Welcome
import Welcome from "./components/Welcome";

// CARD LIBRI
import AllTheBooks from "./components/AllTheBooks";

// ALLTHEBOOKS - importo il file allthebooks

function App() {
  return (
    <div>
      {/* 5) MY NAV - invoco la funzione */}
      <MyNav subtitle="La mia liberia personale" />
      {/* IV */}
      <Welcome />

      {/* CARD-LIBRI/ ALLTHEBOOKS */}
      <AllTheBooks />
      {/* E)MY FOOTER - invoco la funzione */}
      <MyFooter />
    </div>
  );
}

export default App;
