import React from 'react';
import { enquiryDetailsCardData } from '../data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardHeader, CardBody, CardTitle, Col } from 'react-bootstrap';
const EnquiryDataCard = ({
    responseStatus,
  assignedStaff,
  followUpDate,
  remarks,
}) => {
  return <Card className="mt-3 shadow-sm">
  <CardHeader className="d-flex align-items-center justify-content-between">
    <CardTitle as="h4" className="mb-0">Internal/Admin Info</CardTitle>
    <span className={`badge ${
      responseStatus === 'Pending' ? 'bg-warning text-dark' :
      responseStatus === 'Follow-up' ? 'bg-info text-white' :
      'bg-success text-white'
    } px-2 py-1`}>
      {responseStatus}
    </span>
  </CardHeader>

  <CardBody>
    <div className="row gy-3">
      <div className="col-md-6">
        <p className="text-muted mb-1">Assigned Staff</p>
        <p className="fw-semibold mb-0">{assignedStaff}</p>
      </div>

      <div className="col-md-6">
        <p className="text-muted mb-1">Follow-up Date</p>
         <p className="fw-semibold mb-0">
              {new Date(followUpDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </p>
      </div>

      <div className="col-12">
        <p className="text-muted mb-1">Remarks / Notes</p>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter internal remarks..."
          defaultValue={remarks}
        ></textarea>
      </div>
    </div>
  </CardBody>
</Card>

};
const EnquiryDetailsCard = () => {
  return <>
      {enquiryDetailsCardData.map((item, idx) => <Col lg={12} key={idx}>
          <EnquiryDataCard {...item} />
        </Col>)}
    </>;
};
export default EnquiryDetailsCard;