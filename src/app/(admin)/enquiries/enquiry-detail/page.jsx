import userProfile from '@/assets/images/user-profile.png';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllOrders } from '@/helpers/data';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import EnquiryChart from './components/EnquiryChart';
import EnquiryDetailsCard from './components/EnquiryDetailsCard';
import { latestEnquiries } from './data';
import PageTItle from '@/components/PageTItle';
import Link from 'next/link';
import { FILE } from 'dns';
const ProfileCard = () => {
  return <Card className="overflow-hidden">
      <CardBody>
        <div className="bg-primary profile-bg rounded-top p-5 position-relative mx-n3 mt-n3">
 
        </div>
        <div className=" pt-3">
          <h4 className="mb-1">
            {' '}






            Michael A. Miner
            <IconifyIcon icon="bxs:badge-check" className="text-success align-middle" />
          </h4>
          <div className="mt-2">
            <Link href="" className="link-primary fs-15">
              @michael_cus_2024
            </Link>
            <p className="fs-15 mb-1 mt-1">
              <span className="text-dark fw-semibold">Email : </span> michaelaminer@dayrep.com
            </p>
            <p className="fs-15 mb-0 mt-1">
              <span className="text-dark fw-semibold">Phone : </span> +28 (57) 760-010-27
            </p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="border-top gap-1 hstack">
        <Link href="" className="btn btn-primary w-100">
          Send Message
        </Link>
        <Link href="" className="btn btn-light w-100">
          Analytics
        </Link>
        <Link href="" className="btn btn-soft-dark d-inline-flex align-items-center justify-content-center rounded avatar-sm">
          {' '}
          <span>
            <IconifyIcon width={18} height={18} icon="bx:edit-alt" className="fs-18" />
          </span>
        </Link>
      </CardFooter>
    </Card>;
};
const EnquiryDetails = () => {
  return <Card>
      <CardHeader className="d-flex align-items-center justify-content-between">
        <div>
          <CardTitle as={'h4'}>Enquiry Details</CardTitle>
        </div>
        <div>
          <span className="badge bg-success-subtle text-success px-2 py-1">Contacted</span>
        </div>
      </CardHeader>
      <CardBody className=" py-2">
        <div className="table-responsive">
          <table className="table mb-0">
            <tbody>
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-2 fw-semibold text-dark">Customer ID : </p>
                </td>
                <td className="text-dark fw-medium px-0">#AC-278699</td>
              </tr>
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark"> Package Name:  </p>
                </td>
                <td className="text-dark fw-medium px-0">Group Tour</td>
              </tr>
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark"> Number of Travellers : </p>
                </td>
                <td className="text-dark fw-medium px-0">10</td>
              </tr>
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark"> Booking Date : </p>
                </td>
                <td className="text-dark fw-medium px-0">12/09/2025</td>
              </tr>
              <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark"> Destinations : </p>
                </td>
                <td className="text-dark fw-medium px-0">Rajsthan</td>
              </tr>
               <tr>
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark"> Mode of Travel : </p>
                </td>
                <td className="text-dark fw-medium px-0">Flight</td>
              </tr>
              <tr>
              
                <td className="px-0">
                  <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark"> Message : </p>
                </td>
                <td className="text-dark fw-medium px-0">Want to know the price for Rajsthan Tour</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
const LatestEnquiryCard = ({
  title,
  date,
  customer,
  tour,
    status
}) => {
  return <div className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle">
      <div className="border rounded p-1 mb-2 bg-white shadow-sm d-flex justify-content-between align-items-center">
  {/* Left Section */}
  <div className="d-flex align-items-center gap-3">
    <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
      <IconifyIcon icon="solar:chat-round-bold-duotone" className="text-primary fs-4" />
    </div>

    <div>
      <h6 className="mb-1 fw-semibold text-dark">{customer}</h6>
      <p className="mb-0 text-muted fs-13">
        Enquired for <span className="fw-medium text-dark">{tour}</span>
      </p>
      <small className="text-secondary">
        {date.toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' })}
      </small>
    </div>
  </div>

  {/* Right Section */}
  <div className="text-end">
    <span className={`badge rounded-pill px-2 py-1 ${
      status === 'Pending'
        ? 'bg-warning-subtle text-warning'
        : status === 'Contacted'
        ? 'bg-info-subtle text-info'
        : 'bg-success-subtle text-success'
    }`}>
      {status}
    </span>
    <div className="mt-2">
      <Link href="/admin/enquiries/details" className="btn btn-sm btn-outline-primary">
      Reply
      </Link>
    </div>
  </div>
</div>

    </div>;



};
export const metadata = {
  title: 'Customer Detail'
};

const attachments = [
  { name: 'passport_scan.pdf', url: '/files/passport_scan.pdf' },
  { name: 'id_proof.jpg', url: '/files/id_proof.jpg' }
];

const EnquiryDetailPage = async () => {
  const transactionHistoryData = await getAllOrders();
  return <>
      <PageTItle title="ENQUIRY DETAILS" />
      <Row>
        <Col lg={4}>
          <ProfileCard />
          <EnquiryDetails />
      
        </Col>
        <Col lg={8}>
         <Card className="mt-3 shadow-sm">
  <CardHeader className="d-flex align-items-center justify-content-between">
    <CardTitle as="h4" className="mb-0">Package Interest Details</CardTitle>
    <span className="badge bg-primary-subtle text-primary px-2 py-1">Package Preferences</span>
  </CardHeader>

  <CardBody className="pb-2">
    <Row className="gy-3">
      <Col lg={6}>
        <div className="p-3 border rounded bg-light-subtle">
          <h6 className="text-muted mb-1">Budget Range</h6>
          <p className="fw-semibold text-dark mb-0">₹25,000 – ₹40,000</p>
        </div>
      </Col>

      <Col lg={6}>
        <div className="p-3 border rounded bg-light-subtle">
          <h6 className="text-muted mb-1">Category</h6>
          <p className="fw-semibold text-dark mb-0">Group Tour</p>
        </div>
      </Col>

      <Col lg={6}>
        <div className="p-3 border rounded bg-light-subtle">
          <h6 className="text-muted mb-1">Duration</h6>
          <p className="fw-semibold text-dark mb-0">20 days</p>
        </div>
      </Col>

      <Col lg={6}>
        <div className="p-3 border rounded bg-light-subtle">
          <h6 className="text-muted mb-1">Meal Plan</h6>
          <p className="fw-semibold text-dark mb-0">MAP (Breakfast + Dinner)</p>
        </div>
      </Col>
    </Row>
  </CardBody>
</Card>


        <Row>
            <EnquiryDetailsCard/>
          </Row>

        <Card className="mt-3 shadow-sm">
  <div className="card-header d-flex justify-content-between align-items-center">
    <h5 className="mb-0">Documents / Actions</h5>
  </div>

  <CardBody>
  
    <div className="mb-3">
      <h6 className="text-muted mb-2">Attachments</h6>
      {attachments && attachments.length > 0 ? (
        <ul className="list-group list-group-flush">
          {attachments.map((file, idx) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="bx:download" className="fs-4 text-primary" />
                <span>{file.name}</span>
              </div>
              <a href={file.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">Download</a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted mb-0">No attachments uploaded.</p>
      )}
    </div>

   
    <div className="d-flex gap-2">
      <button className="btn btn-primary btn-sm">Download Enquiry Details</button>
      <button className="btn btn-secondary btn-sm">Print Enquiry</button>
    </div>
  </CardBody>
</Card>

        </Col>
      </Row>
    </>;
};
export default EnquiryDetailPage;