import PageTItle from '@/components/PageTItle'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getDepartureData } from '@/helpers/data'
import Link from 'next/link'
import { Card, CardFooter, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
export const metadata = {
  title: 'Departure Dates List',
}
const DepartureListPage = async () => {
  const departureData = await getDepartureData()
  return (
    <>
      <PageTItle title="DEPARTURE DATES LIST" />
      <Row>
        <Col xl={12}>
          <Card>
            {/* Card Header */}
            <div className="d-flex card-header justify-content-between align-items-center">
              <div>
                <CardTitle as={'h4'} className="card-title">
                  All Departure Dates List
                </CardTitle>
              </div>

              <div className="d-flex">
                <input type="text" className="form-control w-auto" placeholder="Search dates..." />

                <Dropdown>
                  <DropdownToggle className="btn btn-sm btn-outline-light content-none icons-center" data-bs-toggle="dropdown" aria-expanded="false">
                    This Month <IconifyIcon className="ms-1" width={16} height={16} icon="bx:chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem>Download</DropdownItem>
                    <DropdownItem>Export</DropdownItem>
                    <DropdownItem>Import</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <table className="table align-middle mb-0 table-hover table-centered table-bordered">
                <thead className="bg-light-subtle">
                  <tr>
                    <th style={{ width: 20 }}>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="selectAll" />
                        <label className="form-check-label" htmlFor="selectAll" />
                      </div>
                    </th>
                    <th>Package Name</th>
                    <th>Departure City</th>
                    <th>Departure Date</th>
                    <th>Seats Available</th>
                    <th>Price (Per Person)</th>

                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {departureData.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id={`check-${idx}`} />
                          <label className="form-check-label" htmlFor={`check-${idx}`}>
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>{item.packageName}</td>
                      <td>{item.departureCity}</td>
                      <td>{item.departureDate}</td>
                      <td>{item.seatsAvailable}</td>
                      <td>₹{item.price}</td>

                      <td>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" checked={item.status} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Link href={`/departure/edit/${item.id}`} className="btn btn-soft-primary btn-sm">
                            <IconifyIcon icon="solar:pen-2-bold" className="align-middle fs-18" />
                          </Link>
                          <button type="button" className="btn btn-soft-danger btn-sm">
                            <IconifyIcon icon="solar:trash-bin-minimalistic-2-bold" className="align-middle fs-18" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <CardFooter className="border-top">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default DepartureListPage
