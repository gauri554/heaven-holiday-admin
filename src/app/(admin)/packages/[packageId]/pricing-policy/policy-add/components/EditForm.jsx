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
                  <Form.Control type="text" placeholder="Enter Departure City" />
                </Form.Group>
              </Col>

              {/* Departure Date */}
              <Col lg={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Departure Date</Form.Label>
                  <Form.Control type="date" placeholder="Select Departure Date" />
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
                      <td><Form.Control type="number" placeholder="From Days" /></td>
                      <td><Form.Control type="number" placeholder="To Days" /></td>
                      <td><Form.Control type="date" placeholder="From Date" /></td>
                      <td><Form.Control type="date" placeholder="To Date" /></td>
                      <td><Form.Control type="number" placeholder="Fee (%)" /></td>
                    </tr>
                    <tr>
                      <td><Form.Control type="number" placeholder="From Days" /></td>
                      <td><Form.Control type="number" placeholder="To Days" /></td>
                      <td><Form.Control type="date" placeholder="From Date" /></td>
                      <td><Form.Control type="date" placeholder="To Date" /></td>
                      <td><Form.Control type="number" placeholder="Fee (%)" /></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>

         
              <Col lg={12} className="mb-3">
                <h5>Payment Terms</h5>
                <Form.Check inline type="checkbox" label="Cheque" />
                <Form.Check inline type="checkbox" label="NEFT" />
                <Form.Check inline type="checkbox" label="Debit Card" />
                <Form.Check inline type="checkbox" label="Credit Card" />
                <Form.Check inline type="checkbox" label="IMPS" />
                <Form.Group className="mt-2">
                  <Form.Label>Convenience Charge (%)</Form.Label>
                  <Form.Control type="number" placeholder="Enter Convenience Charge" />
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Beneficiary Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Beneficiary Name" />
                </Form.Group>
              </Col>

              {/* Remarks */}
              <Col lg={12} className="mt-3">
                <Form.Group>
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter Remarks"
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
