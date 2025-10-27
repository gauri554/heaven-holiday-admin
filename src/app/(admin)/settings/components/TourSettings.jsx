import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const TourSettings = () => {
  return <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
         <IconifyIcon icon="solar:compass-bold-duotone" className="text-primary fs-20" />

            Tour Configuration Settings
            </CardTitle>
          </CardHeader>
    <CardBody>
  <Row className="justify-content-between g-3">
    {/* Default Departure City */}
    <Col lg={3} className="border-end">
      <label htmlFor="departure-city" className="form-label fw-semibold">
        Default Departure City
      </label>
      <input
        type="text"
        id="departure-city"
        className="form-control"
        placeholder="Enter city name (e.g., Mumbai)"
      />
    </Col>

    {/* Max Travellers per Booking */}
    <Col lg={3} className="border-end">
      <label htmlFor="max-travellers" className="form-label fw-semibold">
        Max Travellers per Booking
      </label>
      <input
        type="number"
        id="max-travellers"
        className="form-control"
        placeholder="e.g., 10"
      />
    </Col>

    {/* Default Tour Duration Unit */}
    <Col lg={3}>
      <label htmlFor="tour-duration" className="form-label fw-semibold">
        Default Tour Duration Unit
      </label>
      <div className="d-flex gap-3 align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="duration-unit"
            id="days"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="days">
            Days
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="duration-unit"
            id="nights"
          />
          <label className="form-check-label" htmlFor="nights">
            Nights
          </label>
        </div>
      </div>
    </Col>
  </Row>

  {/* Cancellation Policy */}
  <Row className="mt-4">
    <Col lg={6}>
      <div className="mb-3">
        <label htmlFor="cancellation-policy" className="form-label fw-semibold">
          Cancellation Policy
        </label>
        <textarea
          className="form-control bg-light-subtle"
          id="cancellation-policy"
          rows={3}
          placeholder="Write cancellation policy text..."
        ></textarea>
      </div>
    </Col>

    {/* Terms & Conditions */}
    <Col lg={6}>
      <div className="mb-3">
        <label htmlFor="terms" className="form-label fw-semibold">
          Terms & Conditions
        </label>
        <textarea
          className="form-control bg-light-subtle"
          id="terms"
          rows={3}
          placeholder="Write terms & conditions text..."
        ></textarea>
      </div>
    </Col>
  </Row>
</CardBody>

        </Card>
      </Col>
    </Row>;
};
export default TourSettings;