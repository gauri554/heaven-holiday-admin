import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getAllBooking } from '@/helpers/data'
import Link from 'next/link'
import { Card, CardBody, CardFooter, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
const BookingList = async () => {
  const BookingData = await getAllBooking()
  return (
    <Row>
      <Col xl={12}>
        <Card>
          <div className="d-flex card-header justify-content-between align-items-center">
            <div>
              <CardTitle as={'h4'}>All Booking List</CardTitle>
            </div>
            <div className="d-flex">
              <input type="text" className="form-control w-auto" placeholder="Search bookings..." />

              <Dropdown>
                <DropdownToggle
                  as={'a'}
                  href="#"
                  className="btn btn-sm btn-outline-light rounded content-none icons-center"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  This Month <IconifyIcon className="ms-1" width={16} height={16} icon="bx:chevron-down" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="" className="dropdown-item">
                    Download
                  </DropdownItem>
                  <DropdownItem href="" className="dropdown-item">
                    Export
                  </DropdownItem>
                  <DropdownItem href="" className="dropdown-item">
                    Import
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <CardBody className="p-0">
            <div className="table-responsive">
              <table className="table align-middle mb-0 table-hover table-centered table-bordered">
                <thead className="bg-light-subtle">
                  <tr>
                    <th>Booking ID</th>
                    <th>Booking Date</th>
                    <th>Traveler Name</th>
                    <th>Package Name</th>
                    <th>Travel Date</th>
                    <th>Guests</th>
                    <th>Total Amount</th>
                    <th>Payment Status</th>
                    <th>Booking Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {BookingData.map((item, idx) => (
                    <tr key={idx}>
                      <td>#{item.bookingId}</td>
                      <td>{item.bookingDate}</td>
                      <td>
                        <Link href="" className="link-primary fw-medium">
                          {item.travelerName}
                        </Link>
                      </td>
                      <td> {item.packageName}</td>
                      <td>{item.travelDate}</td>

                      <td>{item.guests}</td>
                      <td>{item.totalAmt}</td>
                      <td>
                        {' '}
                        <span
                          className={`badge bg-${item.paymentStatus == 'Paid' ? 'success' : 'light'} text-${item.paymentStatus == 'Paid' ? 'light' : 'dark'}  px-2 py-1 fs-13`}>
                          {item.paymentStatus}
                        </span>
                      </td>
                      <td>
                        {' '}
                        <span
                          className={`badge border border-${item.Bookingtatus == 'Draft' ? 'secondary' : item.Bookingtatus == 'Canceled' ? 'danger' : item.Bookingtatus == 'Confirmed' ? 'warning' : 'success'} text-${item.Bookingtatus == 'Completed' ? 'success' : item.Bookingtatus == 'Canceled' ? 'danger' : item.Bookingtatus == 'Confirmed' ? 'warning' : 'secondary'}  px-2 py-1 fs-13`}>
                          {item.bookingStatus}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Link href="/booking/booking-deatils" className="btn btn-light btn-sm">
                            <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
                          </Link>
                          <Link href="/booking/booking-edit" className="btn btn-soft-primary btn-sm">
                            <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
                          </Link>
                          <Link href="" className="btn btn-soft-danger btn-sm">
                            <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
          <CardFooter className="border-top">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end mb-0">
                <li className="page-item">
                  <Link className="page-link" href="">
                    Previous
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" href="">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  )
}
export default BookingList
