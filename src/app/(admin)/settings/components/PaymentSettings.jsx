import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const PaymentSettings = () => {
  return <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
            <IconifyIcon icon="solar:wallet-bold-duotone" className="text-primary fs-20" />

              Payment Settings
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="choices-country1" className="form-label">
                    Default Currency
                    </label>
                    <ChoicesFormInput className="form-control" id="choices-country1" data-choices data-choices-groups data-placeholder="Select Country">
                      <option>INR</option>
                    
                        <option>Dollar</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    
                   
                    </ChoicesFormInput>
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                     <div className="mb-3">
                  <label htmlFor="GST" className="form-label">
                GST
                  </label>
                  <input type="text" id="gst" name="gst" className="form-control" placeholder="GST" />
                </div>
              </Col>
              <Col lg={6}>
                     <div className="mb-3">
                  <label htmlFor="upi-details" className="form-label">
                UPI Details
                  </label>
                  <input type="text" id="upi-details" name="upi-details" className="form-control" placeholder="Enter UPI details" />
                </div>
              </Col>
              <Col lg={6}>
                    <div className="mb-3">
                  <label htmlFor="booking-advance" className="form-label">
Booking Advance Percentage
                  </label>
                  <input type="text" id="booking-advance" name="booking-advance" className="form-control" placeholder="Booking Advance Percentage" />
                </div>
              </Col>
          
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default PaymentSettings;