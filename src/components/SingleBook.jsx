// import
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import React from "react";

// obiettivo far apparire una singola card, con al foto della copertina di un genere scelto da noi
// abbiamo creato un componente a classe

class SingleBook extends React.Component {
  render() {
    // chiediamo con this.props di prendere ogni attributo del libro della categoria scelta
    const { book } = this.props;
    return (
      <Col xs={12} md={4} lg={3} key={book.asin}>
        {" "}
        {/* incolliamo la modello card*/}
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <p> {book.category} </p>
            </Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <p> {book.price} € price </p>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

// 2)esporto
export default SingleBook;
