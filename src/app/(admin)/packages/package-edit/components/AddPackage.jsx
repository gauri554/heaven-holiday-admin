import FileUpload from '@/components/FileUpload';
import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { FaHotel, FaUtensils, FaBusAlt, FaMapMarkedAlt, FaUserTie } from "react-icons/fa";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const AddPackage = () => {
  return <Col xl={9} lg={8}>
      <FileUpload title="Add Package Photo" />
      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Package Information</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg={6}>
              <form>
                <div className="mb-3">
                  <label htmlFor="package-name" className="form-label">
                    Package Name
                  </label>
                  <input type="text" id="package-name" className="form-control" placeholder="Items Name" defaultValue="Rajsthan Marwad" />
                </div>
              </form>
            </Col>
            <Col lg={6}>
               <form>
                <label htmlFor="product-categories" className="form-label">
              Categories
                </label>
                <select className="form-control" id="product-categories" data-choices data-choices-groups data-placeholder="Select Categories" name="choices-single-groups">
                  <option>Choose a category</option>
                 <option value="India" selected>India</option>
                  <option value="World">World</option>
                  <option value="Speciality">Speciality Tour</option>
                  <option value="Customized">Customized Holidays</option>
                  <option value="Group">Group Tpur</option>
                  <option value="Corporate">Corporate Tour</option>
                  <option value="Inbound">Inbound Tour</option>
                <option value="Womens">Women's Special</option>
                <option value="Seniors">Senior's Special</option>
                <option value="Roadtrips">Road Trips</option>
                <option value="yolooutdoors">YOLO Outdoors</option>
                </select>
              </form>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <form>
                <div className="mb-3">
                  <label htmlFor="tour-manager" className="form-label">
                   Tour Manager
                  </label>
                  <input type="text" id="tour-manager" className="form-control" placeholder="John Smith" />
                </div>
              </form>
            </Col>
            <Col lg={4}>
              <form>
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
                  Duration
                  </label>
                  <input type="text" id="duration" className="form-control" placeholder="Nights/Days" defaultValue="8" />
                </div>
              </form>
            </Col>
            <Col lg={4}>
             <form>
                <label htmlFor="destinations" className="form-label">
              Destinations Covered
                </label>
                 <input type="text" id="destination" className="form-control" placeholder="4 cities" defaultValue="4 cities" />
              </form>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col lg={4}>
              <div className="mt-3">
                <h5 className="text-dark fw-medium">Group Size :</h5>
                 <div className="d-flex flex-wrap align-items-center gap-0">
    <label htmlFor="minGroup" className="fw-normal">Min:</label>
    <input type="number" className="form-control w-auto" id="minGroup" placeholder=" 2" />

    <label htmlFor="maxGroup" className="fw-normal">Max:</label>
    <input type="number" className="form-control w-auto" id="maxGroup" placeholder=" 20" />
  </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="mt-3">
                <h5 className="text-dark fw-medium">Inclusions :</h5>
              <div className="btn-group flex-wrap gap-2" role="group" aria-label="Inclusion options">
                        {/* Hotel */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="inclusions"
                          id="incl-hotel"
                          defaultChecked
                        />
                        <label className="btn btn-outline-primary d-flex align-items-center gap-2 px-3 py-2" htmlFor="incl-hotel">
                          <FaHotel /> <span>Hotel</span>
                        </label>
              
                        {/* Meals */}
                        <input type="radio" className="btn-check" name="inclusions" id="incl-meals" />
                        <label className="btn btn-outline-warning d-flex align-items-center gap-2 px-3 py-2" htmlFor="incl-meals">
                          <FaUtensils /> <span>Meals</span>
                        </label>
              
                        {/* Transport */}
                        <input type="radio" className="btn-check" name="inclusions" id="incl-transport" />
                        <label className="btn btn-outline-success d-flex align-items-center gap-2 px-3 py-2" htmlFor="incl-transport">
                          <FaBusAlt /> <span>Transport</span>
                        </label>
              
                        {/* Sightseeing */}
                        <input type="radio" className="btn-check" name="inclusions" id="incl-sightseeing" />
                        <label className="btn btn-outline-info d-flex align-items-center gap-2 px-3 py-2" htmlFor="incl-sightseeing">
                          <FaMapMarkedAlt /> <span>Sightseeing</span>
                        </label>
              
                        {/* Guide */}
                        <input type="radio" className="btn-check" name="inclusions" id="incl-guide" />
                        <label className="btn btn-outline-danger d-flex align-items-center gap-2 px-3 py-2" htmlFor="incl-guide">
                          <FaUserTie /> <span>Guide</span>
                        </label>
                      </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea className="form-control bg-light-subtle" id="description" rows={7} placeholder="Short description about the tour package" defaultValue={'Architectural wonders, exquisite handicrafts, colourful culture, and tempting cuisine are a few of the many highlights of this magnificent state. Set amidst a vast desert, the magical land of Rajasthan is synonymous with romance and chivalry. As one of the best travel agency in India, we at Veena World take immense pride in helping you explore royalty like never before. With our Rajasthan tour packages, travel back in time and in the era of the reign of the crown. '} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <form>
                <div className="mb-3">
                  <label htmlFor="departure-city" className="form-label">
                   Departure Cities
                  </label>
                  <input type="number" id="departure-city" className="form-control" placeholder="8" defaultValue={8} />
                </div>
              </form>
            </Col>
            <Col lg={3}>
              <form>
                <div className="mb-3">
                  <label htmlFor="availableseats" className="form-label">
                   Available Seats
                  </label>
                  <input type="number" id="availableseats" className="form-control" placeholder="0" defaultValue={30} />
                </div>
              </form>
            </Col>
            <Col lg={6}>
               <div className="">
  <label className="form-label d-block">Departure Dates</label>
  <div className="d-flex gap-2">
    <input
      type="date"
      id="departure-from"
      className="form-control"
      placeholder="From"
      defaultValue={8-10-2025}
    />
    <input
      type="date"
      id="departure-to"
      className="form-control"
      placeholder="To"
      defaultValue={15-10-2025}
    />
  </div>
</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Pricing Details</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="row mb-3">
    <div className="col-md-4">
      <label className="form-label">Currency</label>
      <select className="form-select">
        <option selected>₹ (INR)</option>
        <option>$ (USD)</option>
      </select>
    </div>
    <div className="col-md-4">
      <label className="form-label">Price Type</label>
      <select className="form-select">
        <option >Per Person</option>
        <option>Per Couple</option>
        <option selected>Per Group</option>
      </select>
    </div>
  </div>

  {/* Room Type Pricing Table */}
  <div className="table-responsive mb-3">
    <table className="table table-bordered align-middle">
      <thead className="table-light">
        <tr>
          <th>Room / Traveler Type</th>
          <th>Price (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Single Occupancy</td>
          <td><input type="number" className="form-control" placeholder="54000" /></td>
        </tr>
        <tr>
          <td>Twin Sharing</td>
          <td><input type="number" className="form-control" placeholder="45000" /></td>
        </tr>
        <tr>
          <td>Triple Sharing</td>
          <td><input type="number" className="form-control" placeholder="44000" /></td>
        </tr>
        <tr>
          <td>Infant</td>
          <td><input type="number" className="form-control" placeholder="6000" /></td>
        </tr>
        <tr>
          <td>Child (2–4)</td>
          <td><input type="number" className="form-control" placeholder="29000" /></td>
        </tr>
        <tr>
          <td>Child (5–11) Without Mattress</td>
          <td><input type="number" className="form-control" placeholder="31000" /></td>
        </tr>
        <tr>
          <td>Child (5–11) With Mattress</td>
          <td><input type="number" className="form-control" placeholder="36000" /></td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Optional: Discounts */}
  <div className="row">
    <div className="col-md-4">
      <label className="form-label">Discount (%)</label>
      <input type="number" className="form-control" placeholder="10" />
    </div>
    <div className="col-md-8">
      <label className="form-label">Offer Description</label>
      <input type="text" className="form-control" placeholder="Early Bird Discount till Oct 15" />
    </div>
  </div>
        </CardBody>
      </Card>
      <div className="p-3 bg-light mb-3 rounded">
        <Row className="justify-content-end g-2">
          <Col lg={2}>
            <Link href="" className="btn btn-outline-secondary w-100">
              Reset
            </Link>
          </Col>
          <Col lg={2}>
            <Link href="" className="btn btn-primary w-100">
              Save
            </Link>
          </Col>
        </Row>
      </div>
    </Col>;
};
export default AddPackage;