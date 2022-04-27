import React from "react";
import { Row, Col, Container, Image, Form, Button, Alert } from "react-bootstrap";
import { whitelistApi } from "../Apis/whitelist";

export default function WhitelistForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    wallet: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      setLoading(true);
      await whitelistApi.create(form);
      setSuccess('Whitelist request sent successfully');
    } catch (error) {
      setError(Array.isArray(error.response.data.message) ? error.response.data.message[0] : error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="about" className="feature-class">
      <Container>
        <Row>
          <Col md={12} lg={7} className="mb-5 mt-5 p-4 featureLeft">
            <Form onSubmit={handleSubmit}>

              {success && <Alert variant="success">{success}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"
                  onChange={e => setForm({ ...form, email: e.target.value })} value={form.email} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" name="name"
                  onChange={e => setForm({ ...form, name: e.target.value })} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Wallet address</Form.Label>
                <Form.Control type="text" placeholder="Enter wallet address" name="wallet"
                  onChange={e => setForm({ ...form, wallet: e.target.value })} required />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={1} />
          <Col md={12} lg={4} className="mb-5 mt-5 p-4 align-items-center">
            <img className="mt-3" src="image/slide-gif.png" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
