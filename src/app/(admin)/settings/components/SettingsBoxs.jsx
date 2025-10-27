import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const SettingsBoxs = () => {
  return <Row className="g-3">
  {/* Social Media Links */}
  <Col lg={8}>
    <Card>
      <CardHeader>
        <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
          <IconifyIcon icon="solar:share-bold-duotone" className="text-primary fs-20" />
          Social Media Links
        </CardTitle>
      </CardHeader>
      <CardBody>
        <form>
          <div className="mb-2">
            <label htmlFor="facebook-link" className="form-label">Facebook URL</label>
            <input type="text" id="facebook-link" className="form-control" placeholder="https://facebook.com/..." />
          </div>
          <div className="mb-2">
            <label htmlFor="instagram-link" className="form-label">Instagram URL</label>
            <input type="text" id="instagram-link" className="form-control" placeholder="https://instagram.com/..." />
          </div>
          <div className="mb-2">
            <label htmlFor="youtube-link" className="form-label">YouTube URL</label>
            <input type="text" id="youtube-link" className="form-control" placeholder="https://youtube.com/..." />
          </div>
        </form>
      </CardBody>
    </Card>
  </Col>

 
  {/* Maintenance Mode */}
  <Col lg={4}>
    <Card>
      <CardHeader>
        <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
          <IconifyIcon icon="solar:settings-bold-duotone" className="text-primary fs-20" />
          Website Maintenance
        </CardTitle>
      </CardHeader>
      <CardBody>
        <p>Maintenance Mode</p>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="maintenance-mode" />
          <label className="form-check-label" htmlFor="maintenance-mode">
            Enable / Disable Website
          </label>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>
;
};
export default SettingsBoxs;