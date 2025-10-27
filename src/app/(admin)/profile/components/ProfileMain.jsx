import avatar1 from '@/assets/images/users/avatar-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const ProfileMain = () => {
  return <Row>
  <Col xl={9} lg={8}>
    <Card className="overflow-hidden">
      <CardBody>
        <div className="bg-primary profile-bg rounded-top position-relative mx-n3 mt-n3">
          <Image
            src={avatar1}
            alt="avatar"
            className="avatar-xl border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
          />
        </div>

        <div className="mt-5 d-flex flex-wrap align-items-center justify-content-between">
          <div>
            <h4 className="mb-1">
              Rohan Mehta{" "}
              <IconifyIcon icon="bxs:badge-check" className="text-success align-middle" />
            </h4>
            <p className="mb-0">Tour Operations Manager</p>
          </div>

          <div className="d-flex align-items-center gap-2 my-2 my-lg-0">
            <Link href="" className="btn btn-info">
              <IconifyIcon icon="bx:message-dots" /> Message
            </Link>
            <Link href="" className="btn btn-outline-primary">
              <IconifyIcon icon="bx:plus" /> Assign Tour
            </Link>
            <Dropdown>
              <DropdownToggle
                as={"a"}
                href="#"
                className="dropdown-toggle arrow-none card-drop"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconifyIcon
                  icon="solar:menu-dots-bold"
                  className="fs-20 align-middle text-muted"
                />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <a href="" className="dropdown-item">
                  View Reports
                </a>
                <a href="" className="dropdown-item">
                  Export Data
                </a>
                <a href="" className="dropdown-item">
                  Edit Profile
                </a>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <Row className="mt-3 gy-2">
          <Col lg={3} xs={6}>
            <div className="d-flex align-items-center gap-2 border-end">
              <div>
                <IconifyIcon
                  icon="solar:calendar-bold-duotone"
                  className="fs-28 text-primary"
                />
              </div>
              <div>
                <h5 className="mb-1">5+ Years</h5>
                <p className="mb-0">Experience</p>
              </div>
            </div>
          </Col>

          <Col lg={3} xs={6}>
            <div className="d-flex align-items-center gap-2 border-end">
              <div>
                <IconifyIcon
                  icon="solar:map-point-bold-duotone"
                  className="fs-28 text-primary"
                />
              </div>
              <div>
                <h5 className="mb-1">120+</h5>
                <p className="mb-0">Tours Managed</p>
              </div>
            </div>
          </Col>

          <Col lg={3} xs={6}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <IconifyIcon
                  icon="solar:users-group-rounded-bold-duotone"
                  className="fs-28 text-primary"
                />
              </div>
              <div>
                <h5 className="mb-1">450+</h5>
                <p className="mb-0">Happy Clients</p>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>

  {/* Right-side personal details */}
  <Col xl={3} lg={4}>
    <Card>
      <CardHeader>
        <CardTitle as={"h4"}>Staff Information</CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <IconifyIcon icon="solar:case-bold-duotone" className="fs-20 text-secondary" />
            </div>
            <p className="mb-0 fs-14">Tour Operations Manager</p>
          </div>

          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <IconifyIcon icon="solar:office-bold-duotone" className="fs-20 text-secondary" />
            </div>
            <p className="mb-0 fs-14">
              Department: <span className="text-dark fw-semibold">Operations</span>
            </p>
          </div>

          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <IconifyIcon icon="solar:map-point-bold-duotone" className="fs-20 text-secondary" />
            </div>
            <p className="mb-0 fs-14">
              Base Location: <span className="text-dark fw-semibold">Mumbai, India</span>
            </p>
          </div>

          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <IconifyIcon icon="solar:letter-bold-duotone" className="fs-20 text-secondary" />
            </div>
            <p className="mb-0 fs-10">
              Email{" "}
              <Link href="mailto:rohan.mehta@tourcompany.com" className="text-primary fw-semibold">
                rohan.mehta@tourcompany.com
              </Link>
            </p>
          </div>

          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <IconifyIcon icon="solar:phone-bold-duotone" className="fs-20 text-secondary" />
            </div>
            <p className="mb-0 fs-14">
              Contact: <span className="text-dark fw-semibold">+91 98765 43210</span>
            </p>
          </div>

          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <IconifyIcon icon="solar:global-bold-duotone" className="fs-20 text-secondary" />
            </div>
            <p className="mb-0 fs-14">
              Languages:{" "}
              <span className="text-dark fw-semibold">English, Hindi, Marathi</span>
            </p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
              <IconifyIcon icon="solar:check-circle-bold-duotone" className="fs-20 text-secondary" />
            </div>
            <p className="mb-0 fs-14">
              Status <span className="badge bg-success-subtle text-success ms-1">Active</span>
            </p>
          </div>

          <div className="mt-2">
            <Link href="" className="text-primary">
              View Assigned Tours
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>;
;
};
export default ProfileMain;