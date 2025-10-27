import avatar2 from '@/assets/images/users/avatar-2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap';
const CustomerEditCard = () => {
  return <Col xl={4} lg={4}>
      <Card>
        <CardBody>
          <div className="bg-light text-center rounded bg-light">
            <Image src={avatar2} alt="Customer1" className="avatar-xxl" />
          </div>
          <div className="mt-3">
             <h4 className="fw-semibold text-primary">Create New Customer</h4>
      <p className="text-muted small mb-4">Fill in customer details to add them to the system</p>
            <Row>
              <Col lg={4} xs={4}>
                <p className="mb-1 mt-2">Category :</p>
                <h5 className="mb-0">Group Tour</h5>
              </Col>
              <Col lg={4} xs={4}>
                <p className="mb-1 mt-2">Assigned Admin :</p>
                <h5 className="mb-0">Admin</h5>
              </Col>
              <Col lg={4} xs={4}>
                <p className="mb-1 mt-2">Customer ID :</p>
                <h5 className="mb-0">FS16276</h5>
              </Col>
            </Row>
         

       
          </div>
        </CardBody>
        <CardFooter className="border-top">
          <Row className="g-2">
            <Col lg={6}>
              <Link href="" className="btn btn-outline-secondary w-100">
                Create Customer
              </Link>
            </Col>
            <Col lg={6}>
              <Link href="" className="btn btn-primary w-100">
                Cancel
              </Link>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </Col>;
};
export default CustomerEditCard;