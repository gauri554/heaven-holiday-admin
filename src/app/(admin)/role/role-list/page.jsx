import PageTItle from '@/components/PageTItle'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { getRoleListData } from '@/helpers/data'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
export const metadata = {
  title: 'Role List',
}
const RoleListPage = async () => {
  const roleListData = await getRoleListData()
  return (
    <>
      <PageTItle title="ROLES LIST" />
      <Card className="overflow-hiddenCoupons">
        <CardHeader className="d-flex justify-content-between align-items-center gap-1">
          <CardTitle as={'h4'} className="flex-grow-1">
            All Roles List
          </CardTitle>
          <input type="text" className="form-control w-auto" placeholder="Search roles..." />

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
        </CardHeader>
        <CardBody className="p-0">
          <div className="table-responsive">
            <table className="table align-middle mb-0 table-hover table-centered table-bordered">
              <thead className="bg-light-subtle">
                <tr>
                  <th>Role</th>
                  <th>Permissions</th>
                  <th>Assigned Tours</th>
                  <th>Users</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {roleListData.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.role}</td>

                    <td>{item.permissions}</td>

                    <td>
                      {item.tours && item.tours.length > 0 ? (
                        item.tours.map((tour, tIdx) => (
                          <span key={tIdx} className="badge bg-info-subtle text-info py-1 px-2 me-1">
                            {tour}
                          </span>
                        ))
                      ) : (
                        <Link href="" className="link-primary">
                          + Assign Tour
                        </Link>
                      )}
                    </td>

                    <td>
                      <div className="avatar-group">
                        {item.users && item.users.length > 0 ? (
                          item.users.map((user, uIdx) => (
                            <Fragment key={uIdx}>
                              {user.image &&
                                user.image.map((img, iIdx) => (
                                  <div className="avatar" key={iIdx}>
                                    <Image src={img} alt="avatar" className="rounded-circle avatar-sm" />
                                  </div>
                                ))}
                              {user.TextAvatar &&
                                user.TextAvatar.map((text, tIdx) => (
                                  <div className="avatar" key={tIdx}>
                                    <span
                                      className={`avatar-sm d-flex align-items-center justify-content-center bg-${text.variant}-subtle text-${text.variant} rounded-circle fw-bold shadow`}>
                                      {text.text}
                                    </span>
                                  </div>
                                ))}
                            </Fragment>
                          ))
                        ) : (
                          <Link href="" className="link-primary">
                            + Add User
                          </Link>
                        )}
                      </div>
                    </td>

                    <td>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id={`roleSwitch${idx}`} defaultChecked={item.status} />
                      </div>
                    </td>

                    <td>
                      <div className="d-flex gap-2">
                        <Link href={`/roles/edit/${item.id}`} className="btn btn-soft-primary btn-sm">
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

        <Row className="g-0 align-items-center justify-content-between text-center text-sm-start p-3 border-top">
          <div className="col-sm">
            <div className="text-muted">
              Showing <span className="fw-semibold">4</span> of <span className="fw-semibold">59</span> Results
            </div>
          </div>
          <Col sm={'auto'} className="mt-3 mt-sm-0">
            <ul className="pagination  m-0">
              <li className="page-item">
                <Link href="" className="page-link">
                  <IconifyIcon icon="bx:left-arrow-alt" />
                </Link>
              </li>
              <li className="page-item active">
                <Link href="" className="page-link">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link href="" className="page-link">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link href="" className="page-link">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link href="" className="page-link">
                  <IconifyIcon icon="bx:right-arrow-alt" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default RoleListPage
