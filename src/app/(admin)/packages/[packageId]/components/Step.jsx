import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const Step = () => {
  return <Row>
      <Col lg={12}>
        <Card className="bg-light-subtle">
          <CardBody>
            <Row>
              <Col lg={3}>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar bg-light d-flex align-items-center justify-content-center rounded">
                   <IconifyIcon icon="mdi:airplane" className="fs-35 text-primary" />

                  </div>
                  <div>
                    <p className="text-dark fw-medium fs-16 mb-1">Flight tickets included</p>
                    <p className="mb-0">Flights covered</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar bg-light d-flex align-items-center justify-content-center rounded">
             <IconifyIcon icon="mdi:hotel" className="fs-35 text-primary" />


                  </div>
                  <div>
                    <p className="text-dark fw-medium fs-16 mb-1">4-Star hotel stay</p>
                    <p className="mb-0">Premium stay</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar bg-light d-flex align-items-center justify-content-center rounded">
                  <IconifyIcon icon="mdi:map" className="fs-35 text-primary" />

                  </div>
                  <div>
                    <p className="text-dark fw-medium fs-16 mb-1">Guided city tours</p>
                    <p className="mb-0">Expert tours</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar bg-light d-flex align-items-center justify-content-center rounded">
                 <IconifyIcon icon="mdi:food" className="fs-35 text-primary" />

                  </div>
                  <div>
                    <p className="text-dark fw-medium fs-16 mb-1">Daily Breakfast and dinner</p>
                    <p className="mb-0">Meals included</p>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default Step;