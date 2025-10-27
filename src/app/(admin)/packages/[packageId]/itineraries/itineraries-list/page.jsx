
import PageTItle from '@/components/PageTItle';
import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getItineraryData } from '@/helpers/data';
import Link from 'next/link';
import { Card, CardFooter, CardHeader,CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
export const metadata = {
  title: 'Itineraries List'
};
 
const ItinerariesListPage = async () => {
  const itineraryData = await getItineraryData();
  return <>
      <PageTItle title="ITINERARY LIST" />
      <Row>
        <Col xl={12}>
          <Card>
            <Col xl={6}>
 <div className="ml-3">
    <label htmlFor="tourSelect" className="form-label fw-bold">
      Select Tour
    </label>
    <ChoicesFormInput
      className="form-control"
      id="tourSelect"
      data-choices
      data-choices-groups
      data-placeholder="Choose a tour"
    >
      <option value="">-- Select a Tour --</option>
      <option value="womensRajasthan">Women's Special Rajasthan - Pune</option>
      <option value="goaDelight">Goa Delight Tour</option>
      <option value="kashmirParadise">Kashmir Paradise Tour</option>
    </ChoicesFormInput>
  </div></Col>
           <CardHeader className="d-flex justify-content-between align-items-center gap-1">
                 <CardTitle as={'h4'} className="flex-grow-1">
                   All Itinerary List
                 </CardTitle>
                 <Link href="/itineraries/itineraries-add" className="btn btn-sm btn-primary">
                   Add Itinerary
                 </Link>
                 <Dropdown>
                   <DropdownToggle as={'a'} href="#" className="btn btn-sm btn-outline-light content-none" data-bs-toggle="dropdown" aria-expanded="false">
                     This Month
                     <IconifyIcon width={16} height={16} className="ms-1" icon="bx:chevron-down" />
                   </DropdownToggle>
                   <DropdownMenu className="dropdown-menu-end">
                     <Link href="" className="dropdown-item">
                       Download
                     </Link>
                     <Link href="" className="dropdown-item">
                       Export
                     </Link>
                     <Link href="" className="dropdown-item">
                       Import
                     </Link>
                   </DropdownMenu>
                 </Dropdown>
               </CardHeader>
            <div>
              <div className="table-responsive">
                <table className="table align-middle mb-0 table-hover table-centered">
                  <thead className="bg-light-subtle">
                    <tr>
                      <th style={{
                      width: 20
                    }}>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="customCheck1" />
                          <label className="form-check-label" htmlFor="customCheck1" />
                        </div>
                      </th>
                      <th>Day</th>
                      <th>Title</th>
                    
                      <th>Sightseeing</th>
                      <th>Meals</th>
                
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itineraryData.map((item, idx) => <tr key={idx}>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customCheck2" />
                            <label className="form-check-label" htmlFor="customCheck2">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>{item.day}</td>
                        <td>{item.title}</td>
                   
                        <td>{item.sightseeing}</td>
                        <td>{item.meals}</td>
                        <td>
                          <div className="form-check form-switch">
                            {item.defaultCheck ? <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" /> : <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked1" defaultChecked />}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link href="" className="btn btn-light btn-sm">
                              <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
                            </Link>
                            <Link href="" className="btn btn-soft-primary btn-sm">
                              <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
                            </Link>
                            <Link href="" className="btn btn-soft-danger btn-sm">
                              <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
                            </Link>
                          </div>
                        </td>
                      </tr>)}
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
    </>;
};
export default ItinerariesListPage;