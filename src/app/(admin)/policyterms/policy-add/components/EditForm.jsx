'use client';

import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row, Table, Form } from 'react-bootstrap';

const PricingPolicyPage = () => {
  return (
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as="h4">Pricing & Policy</CardTitle>
          </CardHeader>

          <CardBody>
            <Row>
              {/* Departure City */}
              <Col lg={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Departure City</Form.Label>
                  <Form.Control type="text" defaultValue="Mumbai" />
                </Form.Group>
              </Col>

              {/* Departure Date */}
              <Col lg={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Departure Date</Form.Label>
                  <Form.Control type="date" defaultValue="2026-03-06" />
                </Form.Group>
              </Col>

              {/* Cancellation Policy Table */}
              <Col lg={12} className="mb-3">
                <h5>Cancellation Policy</h5>
                <Table bordered responsive>
                  <thead>
                    <tr>
                      <th>From Days</th>
                      <th>To Days</th>
                      <th>From Date</th>
                      <th>To Date</th>
                      <th>Fee (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Form.Control type="number" defaultValue={121} /></td>
                      <td><Form.Control type="number" defaultValue={900} /></td>
                      <td><Form.Control type="date" defaultValue="2023-09-18" /></td>
                      <td><Form.Control type="date" defaultValue="2025-11-05" /></td>
                      <td><Form.Control type="number" defaultValue={10} /></td>
                    </tr>
                    <tr>
                      <td><Form.Control type="number" defaultValue={91} /></td>
                      <td><Form.Control type="number" defaultValue={120} /></td>
                      <td><Form.Control type="date" defaultValue="2025-11-06" /></td>
                      <td><Form.Control type="date" defaultValue="2025-12-05" /></td>
                      <td><Form.Control type="number" defaultValue={15} /></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>

              {/* Payment Terms */}
              <Col lg={12} className="mb-3">
                <h5>Payment Terms</h5>
                <Form.Check inline type="checkbox" label="Cheque" defaultChecked />
                <Form.Check inline type="checkbox" label="NEFT" defaultChecked />
                <Form.Check inline type="checkbox" label="Debit Card" defaultChecked />
                <Form.Check inline type="checkbox" label="Credit Card" />
                <Form.Check inline type="checkbox" label="IMPS" />
                <Form.Group className="mt-2">
                  <Form.Label>Convenience Charge (%)</Form.Label>
                  <Form.Control type="number" defaultValue={1.8} />
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Beneficiary Name</Form.Label>
                  <Form.Control type="text" defaultValue="Veena Patil Hospitality Pvt Ltd" />
                </Form.Group>
              </Col>

              {/* Remarks */}
              <Col lg={12} className="mt-3">
                <Form.Group>
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    defaultValue={`All meals are provided by Veena World in case the flight reaches the stipulated destination early morning or leaves destination late in the evening.
The tour price varies for NRI’s or foreign nationals, for more details kindly contact your travel advisor.
NRIs and Foreign nationals please ensure proper identity is conveyed to booking executive at the time of booking and all details along with passport copies are handed over to the booking executive.
Standard Check-in and check-out time of hotels in India is generally 1.30 PM and 10 AM respectively.`}
                  />
                </Form.Group>
              </Col>
            </Row>
          </CardBody>

          <CardFooter className="border-top">
            <Button variant="primary">Update Pricing & Policy</Button>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default PricingPolicyPage;
