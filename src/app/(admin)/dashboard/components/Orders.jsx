import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllBooking } from '@/helpers/data';
import Link from 'next/link';
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Row } from 'react-bootstrap';
const Orders = async () => {
  const bookingData = await getAllBooking();
  return <Col>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <CardTitle as={'h4'}>Recent Bookings</CardTitle>
            <Button variant="soft-primary" size="sm" href="/booking/booking-add">
              <IconifyIcon icon="bx:plus" className="me-1" />
              Create Booking
            </Button>
          </div>
        </CardBody>
        <div className="table-responsive table-centered">
          <table className="table mb-0">
            <thead className="bg-light bg-opacity-50">
              <tr>
                <th className="ps-3">Booking ID.</th>
                <th>Booking Date</th>
                <th>Package Name</th>
                <th>Traveler Name</th>
             
                <th>Phone No.</th>
              
                <th>Payment Mode</th>
                <th>Booking Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.slice(0, 5).map((item, idx) => <tr key={idx}>
                  <td className="ps-3">
                    #{item.id}
                  </td>
                  <td>29 April 2024</td>
                  <td>{item.packageName}</td>
                  <td>
                    <Link href="">{item.travelerName}</Link>
                  </td>
            
                  <td>{item.phone}</td>
              
                  <td>{item.paymentMethod}</td>
                  <td>
                    <IconifyIcon icon="bxs:circle" className={`text-${item.status == 'Completed' ? 'success' : item.status == 'Processing' ? 'warning' : 'primary'} me-1`} />
                    {item.status}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <CardFooter className="border-top">
          {}
          <Row className="g-3">
            <div className="col-sm">
              <div className="text-muted">
                Showing
                <span className="fw-semibold">2</span>
                of
                <span className="fw-semibold">9521</span>
                bookings
              </div>
            </div>
            <Col sm={'auto'}>
              <ul className="pagination m-0">
                <li className="page-item">
                  <span role="button" className="page-link">
                    <IconifyIcon icon="bx:left-arrow-alt" />
                  </span>
                </li>
                <li className="page-item active">
                  <span role="button" className="page-link">
                    1
                  </span>
                </li>
                <li className="page-item">
                  <span role="button" className="page-link">
                    2
                  </span>
                </li>
                <li className="page-item">
                  <span role="button" className="page-link">
                    3
                  </span>
                </li>
                <li className="page-item">
                  <span role="button" className="page-link">
                    <IconifyIcon icon="bx:right-arrow-alt" />
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </Col>;
};
export default Orders;