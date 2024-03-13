import "./App.css";
// 4)AGGIUNGIAMO L'IMPORT DEL CSS DI BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
// 3)MY NAV -importo il file MyNav
import MyNav from "./components/MyNav";

// D)MY FOOTER - importo il file Myfooter
import MyFooter from "./components/MyFooter";

// III) WELCOME - importo il file di Welcome
import Welcome from "./components/Welcome";

// ALLTHEBOKS LIBRI
import AllTheBooks from "./components/AllTheBooks";

// SINGLEBOOK
import SingleBook from "./components/SingleBook";

import fantasy from "./books/fantasy.json";
import horror from "./books/horror.json";

// BOOKLIST
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      {/* 5) MY NAV - invoco la funzione */}
      <MyNav subtitle="La mia liberia personale" />
      {/* IV */}
      <Welcome />

      {/* CARD-LIBRI/ ALLTHEBOOKS */}
      {/* <AllTheBooks /> */}
      {/* <AllTheBooks /> */}

      {/* SINGLE BOOK */}
      {/* di far apparire la foto copertina del primo libro di horror */}

      {/* <SingleBook book={fantasy[0]} /> */}

      <BookList books={horror} />

      {/* E)MY FOOTER - invoco la funzione */}
      <MyFooter />
    </div>
  );
}

export default App;
