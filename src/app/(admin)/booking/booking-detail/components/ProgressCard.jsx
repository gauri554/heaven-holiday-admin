import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import React from 'react';
import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';
const ProgressCard = () => {
  return <Card>
      <CardBody>
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div>
            <h4 className="fw-medium text-dark d-flex align-items-center gap-2">
             Booking ID: #0758267/90 <span className="badge bg-success-subtle text-success  px-2 py-1 fs-13">Paid</span>
              <span className="border border-warning text-warning fs-13 px-2 py-1 rounded">Confirmed</span>
            </h4>
            <p className="mb-0">Booking / Booking Details / #0758267/90 - April 23 , 2024 at 6:23 pm</p>
          </div>
          <div>
            <Link href="" className="btn btn-outline-secondary">
              Cancel Booking
            </Link>
            &nbsp;
            <Link href="" className="btn btn-outline-secondary">
              Reschedule
            </Link>
            &nbsp;
            <Link href="" className="btn btn-primary">
              Edit Booking
            </Link>
            &nbsp;
          </div>
        </div>
        <div className="mt-4">
          <h4 className="fw-medium text-dark">Booking Progress</h4>
        </div>
        <Row className="row-cols-xxl-5 row-cols-md-2 row-cols-1">
          <Col>
            <div className="progress mt-3" style={{
            height: 10
          }}>
              <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{
              width: '100%'
            }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={70}></div>
            </div>
            <p className="mb-0 mt-2">Booking Requested</p>
          </Col>
          <Col>
            <div className="progress mt-3" style={{
            height: 10
          }}>
              <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{
              width: '100%'
            }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={70}></div>
            </div>
            <p className="mb-0 mt-2">Payments Received</p>
          </Col>
          <Col>
            <div className="progress mt-3" style={{
            height: 10
          }}>
              <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{
              width: '60%'
            }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={70}></div>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="mb-0">Document Verification</p>
              <div className="spinner-border spinner-border-sm text-warning" role="status">
                <span className="visually-hidden">Verifying...</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="progress mt-3" style={{
            height: 10
          }}>
              <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{
              width: '0%'
            }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={70}></div>
            </div>
            <p className="mb-0 mt-2">Tour Confirmed</p>
          </Col>
          <Col>
            <div className="progress mt-3" style={{
            height: 10
          }}>
              <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{
              width: '0%'
            }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={70}></div>
            </div>
            <p className="mb-0 mt-2">Trip Completed</p>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="d-flex flex-wrap align-items-center justify-content-between bg-light-subtle gap-2">
        <p className="border rounded mb-0 px-2 py-1 bg-body">
          <IconifyIcon icon="bx:arrow-from-left" className="align-middle fs-16" /> Tour Start date :{' '}
          <span className="text-dark fw-medium">Apr 25 , 2024</span>
        </p>
        <div>
          <Link href="" className="btn btn-primary">
           Confirm Departure
          </Link>
        </div>
      </CardFooter>
    </Card>;
};
export default ProgressCard;