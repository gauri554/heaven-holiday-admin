import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col } from 'react-bootstrap';
const TourDetails = () => {
  return <Col lg={6}>
      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Package Detail</CardTitle>
        </CardHeader>
        <CardBody>
          <div>
            <ul className="d-flex flex-column gap-2 list-unstyled fs-14 text-muted mb-0">
              <li>
                <span className="fw-medium text-dark">Package Name</span>
                <span className="mx-2">:</span>Rajsthan Marwad
              </li>
              <li>
                <span className="fw-medium text-dark">Duration</span>
                <span className="mx-2">:</span>8 Days
              </li>
              <li>
                <span className="fw-medium text-dark">Destination</span>
                <span className="mx-2">:</span>8 cities
              </li>
              <li>
                <span className="fw-medium text-dark">Package Type</span>
                <span className="mx-2">:</span>Group Tour
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <Link href="" className="link-primary text-decoration-underline link-offset-2">
              View More Details <IconifyIcon icon="bx:arrow-to-right" className="align-middle fs-16" />
            </Link>
          </div>
        </CardBody>
      </Card>
    </Col>;
};
export default TourDetails;