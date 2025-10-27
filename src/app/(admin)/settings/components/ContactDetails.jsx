import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const ContactDetails = () => {
  return <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
             <IconifyIcon icon="solar:phone-bold-duotone" className="text-primary fs-20" />

           Contact Details
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="office-address" className="form-label">
                   Office Address
                    </label>
                    <input type="text" id="office-address" className="form-control" placeholder="Enter office address" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="contact-number" className="form-label">
                    Contact Number
                    </label>
                    <input type="text" id="contact-number" className="form-control" placeholder="Enter Contact Number" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <label htmlFor="feedback-emailid" className="form-label">
                  Feedback Email 
                  </label>
                  <input type="text" id="feedback-emailid" name="feedback-emailid" className="form-control" placeholder="email id for feedback" />
                </div>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="enquiry-email" className="form-label">
                    Enquiry Email
                    </label>
                    <input type="email" id="enquiry-email" name="enquiry-email" className="form-control" placeholder="email id for enquiries" />
                  </div>
                </form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default ContactDetails;