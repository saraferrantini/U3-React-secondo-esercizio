// import
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import items from "../books/scifi.json";

// I)creo la funzione

let AllTheBooks = function () {
  return (
    <Container fluid>
      {/* .map lo mettiamo dentro la row*/}
      {/* 1).map fa una copia degli array e un ciclo for -   */}
      {/* 2) inserisci items(si poteva chiamare anche scifi).map(libri - si poteva chiamare in qualsiasi modo)*/}
      {/* 3) il map mappa tutto e abbiamo popolato le card  */}
      <Row>
        {
          // allininterno metto tutto quello che devo moltiplicare
          items.map((libri) => {
            return (
              <Col>
                <Card style={{ width: "14rem" }}>
                  <Card.Img variant="top" src={libri.img} />
                  <Card.Body>
                    <Card.Title>{libri.title}</Card.Title>
                    <Card.Text>
                      <p> {libri.category} </p>
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <p> {libri.price} € price </p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        }
      </Row>
    </Container>
  );
};

export default AllTheBooks;
