import { Container, Row, Col, Card } from 'react-bootstrap'

function Recipes() {
  return (
    <Container id="recipes" className="my-5">
      <h2 className="section-title">Popular Recipes</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="recipe-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600" />
            <Card.Body>
              <Card.Title>Pasta</Card.Title>
              <Card.Text>Classic Italian dish with tomato sauce.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="recipe-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" />
            <Card.Body>
              <Card.Title>Burger</Card.Title>
              <Card.Text>Juicy and flavorful homemade burger.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="recipe-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" />
            <Card.Body>
              <Card.Title>Salad</Card.Title>
              <Card.Text>Healthy and fresh vegetables bowl.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Recipes
