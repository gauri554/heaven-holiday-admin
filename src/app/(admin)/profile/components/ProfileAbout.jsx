import qrCodeImg from '@/assets/images/qr-code.png';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const ProfileAbout = () => {
  return <Row>
  <Col xl={8} lg={7}>
    <Card>
      <CardHeader>
        <CardTitle as={'h4'}>About</CardTitle>
      </CardHeader>
      <CardBody>
        <p>
          I&apos;m part of the core Tour Operations team at <span className="fw-semibold text-dark">GlobeVista Travels</span>.
          With over 8 years of experience in planning and managing both domestic and international tour packages,
          I&apos;ve successfully organized group departures, customized holidays, and corporate trips across Asia, Europe, and Africa.
          My goal is to create seamless, memorable journeys for every traveller.{' '}
          <Link href="" className="text-primary">
            See more
          </Link>
        </p>

        <CardTitle as={'h4'} className="mb-2">
          My Approach :
        </CardTitle>
        <p>
          When managing tours, I believe in delivering an end-to-end travel experience —
          from curating destinations and selecting hotels to coordinating guides, transport, and client safety.
          I focus on personalized planning, smooth coordination, and ensuring every tour reflects our brand’s promise of
          <span className="fw-semibold text-dark"> “Hassle-free Holidays.”</span>
        </p>

        <Row className="g-2 mt-2 mb-4">
          <Col lg={6}>
            <div className="border p-3 rounded">
              <CardTitle as={'h4'}>Expertise Areas</CardTitle>
              <div className="d-flex gap-2 flex-wrap mt-3">
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#GroupTours</span>
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#CustomizedHolidays</span>
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#LuxuryTravel</span>
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#OperationsManagement</span>
              </div>
              <p className="mb-0 text-dark mt-3">
                Open to new destinations :
                <span className="badge bg-success-subtle text-success ms-1">Yes</span>
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="border p-3 rounded">
              <CardTitle as={'h4'}>Travel Interests</CardTitle>
              <div className="d-flex gap-2 flex-wrap mt-3">
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#AdventureTours</span>
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#CulturalTrips</span>
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#WellnessRetreats</span>
                <span className="badge bg-body text-muted px-2 py-1 fs-12">#EcoTourism</span>
              </div>
              <p className="mb-0 text-dark mt-3">
                Open to collaborations :
                <span className="badge bg-success-subtle text-success ms-1">Yes</span>
              </p>
            </div>
          </Col>
        </Row>

        <CardTitle as={'h4'}>Core Skills :</CardTitle>
        <Row className="mt-2">
          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-start gap-2">
              <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                <li><IconifyIcon icon="bxs:star" /></li>
                <li><IconifyIcon icon="bxs:star" /></li>
                <li><IconifyIcon icon="bxs:star" /></li>
                <li><IconifyIcon icon="bxs:star" /></li>
              </ul>
              <p className="fw-medium mb-0 text-dark fs-15">Tour Planning & Execution</p>
            </div>
          </Col>

          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-start gap-2">
              <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                <li><IconifyIcon icon="bxs:star" /></li>
                <li><IconifyIcon icon="bxs:star" /></li>
                <li><IconifyIcon icon="bxs:star" /></li>
              </ul>
              <p className="fw-medium mb-0 text-dark fs-15">Customer Handling</p>
            </div>
          </Col>

          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-start gap-2">
              <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                <li><IconifyIcon icon="bxs:star" /></li>
                <li><IconifyIcon icon="bxs:star" /></li>
              </ul>
              <p className="fw-medium mb-0 text-dark fs-15">Destination Research</p>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>

  {/* Right Column */}
  <Col xl={4} lg={5}>
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody className="text-center">
            <div className="avatar bg-info d-flex align-items-center justify-content-center rounded mx-auto mb-2">
              <IconifyIcon icon="solar:cup-star-bold" className="fs-34 text-white" />
            </div>
            <h3 className="mb-1">+85</h3>
            <p className="mb-0 fw-semibold fs-12">Tours Organized</p>
          </CardBody>
        </Card>
      </Col>

      <Col lg={6}>
        <Card>
          <CardBody className="text-center">
            <div className="avatar bg-info d-flex align-items-center justify-content-center rounded mx-auto mb-2">
              <IconifyIcon icon="solar:medal-star-circle-bold-duotone" className="fs-34 text-white" />
            </div>
            <h3 className="mb-1">+12</h3>
            <p className="mb-0 fw-semibold fs-12">Awards & Recognitions</p>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Card className="overflow-hidden z-1">
      <CardBody className="text-center">
        <CardTitle as={'h4'} className="mb-2">
          Share Your Profile
        </CardTitle>
        <p className="text-muted">
          Showcase your experience and upcoming tours. Share your profile with potential travellers or partners.
        </p>

        <Image src={qrCodeImg} alt="qrCodeImg" className="avatar-xl" />

        <p className="text-muted"></p>
        <p className="d-flex align-items-center border p-2 rounded-2 border-dashed bg-body text-start mb-0">
          https://globevista.com/tour-manager/rohan-mehta{" "}
          <Link href="" className="ms-auto fs-4">
            <IconifyIcon icon="bx:copy" />
          </Link>
        </p>
      </CardBody>
    </Card>
  </Col>
</Row>;
;
};
export default ProfileAbout;