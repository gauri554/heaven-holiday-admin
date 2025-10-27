import PageTItle from '@/components/PageTItle'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getCityData } from '@/helpers/data'
import Link from 'next/link'
import { Card, CardFooter, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
export const metadata = {
  title: 'Departure Cities List',
}
const CitiesListPage = async () => {
  const cityData = await getCityData()
  return (
    <>
      <PageTItle title="DEPARTURE CITIES LIST" />
      <Row>
        <Col xl={12}>
          <Card>
            <div className="d-flex card-header justify-content-between align-items-center">
              <div>
                <CardTitle as={'h4'} className="card-title">
                  All Departure Cities List
                </CardTitle>
              </div>
              <div className="d-flex">
                <input type="text" className="form-control w-auto" placeholder="Search cities..." />
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
                      <th>City Name</th>
                      <th>Station Name</th>
                      <th>Country</th>
                      <th>Package Name</th>
                      <th>Departure Date</th>
                      <th>Published</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityData.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customCheck2" />
                            <label className="form-check-label" htmlFor="customCheck2">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>{item.cityname}</td>
                        <td>{item.stationname}</td>
                        <td>{item.country}</td>
                        <td>{item.packagename}</td>
                        <td>
                          {item.date.toLocaleString('en-us', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>
                        <td>
                          <div className="form-check form-switch">
                            {item.defaultCheck ? (
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" />
                            ) : (
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" defaultChecked />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link href="/departure-cities/city-edit" className="btn btn-soft-primary btn-sm">
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
    </>
  )
}
export default CitiesListPage
