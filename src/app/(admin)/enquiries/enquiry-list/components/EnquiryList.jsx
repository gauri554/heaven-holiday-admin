import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getAllWareHouseProducts } from '@/helpers/data'
import Link from 'next/link'
import { Card, CardFooter, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
const EnquiryList = async () => {
  const warehouseData = await getAllWareHouseProducts()
  return (
    <Row>
      <Col xl={12}>
        <Card>
          <div className="d-flex flex-wrap card-header justify-content-between align-items-center">
            <div>
              <CardTitle as={'h4'}>All Enquiries List</CardTitle>
            </div>
            <div class="d-flex ">
              <input type="text" className="form-control w-auto" placeholder="Search enquiries..." />
              <Dropdown>
                <DropdownToggle
                  as={'a'}
                  className="dropdown-toggle btn btn-sm btn-outline-light rounded content-none icons-center"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
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

          <div>
            <div className="table-responsive">
              <table className="table align-middle mb-0 table-hover table-centered table-bordered">
                <thead className="bg-light-subtle">
                  <tr>
                    <th
                      style={{
                        width: 20,
                      }}>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                        <label className="form-check-label" htmlFor="customCheck1" />
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Package Name</th>
                    <th>Date</th>

                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {warehouseData.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="customCheck2" />
                          <label className="form-check-label" htmlFor="customCheck2" />
                        </div>
                      </td>
                      <td>{item.user?.name}</td>
                      <td>{item.user?.email}</td>
                      <td>{item.user?.phone} </td>
                      <td>{item.user?.pkgname}</td>
                      <td>{item.user?.enqdate}</td>

                      <td>{item.user?.enqstatus}</td>

                      <td>
                        <div className="d-flex gap-2">
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
          </div>
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
export default EnquiryList
