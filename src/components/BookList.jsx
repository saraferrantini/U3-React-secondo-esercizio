// importo

import SingleBook from "./SingleBook";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// passiamo una props generica e poi gli ho chiesto di associarla ai libri con (riga12)
// con prop gli andiamo a passare un valore dinamico

let BookList = function (props) {
  // gli ho chiesto di associare la props generica ai libri
  const books = props.books;
  //   con il return, mettiamo il .map per moltiplicare i libri presenti nell'array
  return (
    <Container fluid>
      <Row>
        {books.map(function (book, index) {
          // mappiamo il singlebook creato
          return <SingleBook key={index} book={book} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
