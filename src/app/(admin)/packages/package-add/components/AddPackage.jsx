import FileUpload from '@/components/FileUpload';
import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import { FaHotel, FaUtensils, FaBusAlt, FaMapMarkedAlt, FaUserTie } from "react-icons/fa";
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
 
const AddPackage = () => {
  return <Col xl={9} lg={8}>
      <FileUpload title="Add Media" />
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
                  <input type="text" id="package-name" className="form-control" placeholder="Enter Package Name" />
                </div>
              </form>
            </Col>
            <Col lg={6}>
              <form>
                <label htmlFor="tour-categories" className="form-label">
                Categories
                </label>
                <select className="form-control" id="tour-categories" data-choices data-choices-groups data-placeholder="Select Categories" name="choices-single-groups">
                  <option>Choose a category</option>
                  <option value="India">India</option>
                  <option value="World">World</option>
                  <option value="Speciality">Speciality Tour</option>
                  <option value="Customized">Customized Holidays</option>
                  <option value="Group">Group Tpur</option>
                  <option value="Corporate">Corporate Tour</option>
                  <option value="Inbound">Inbound Tour</option>
                <option value="womenspecial">Women's Special</option>
                <option value="seniorspecial">Senior's Special</option>
                <option value="roadtrips">Road Trips</option>
                <option value="yolo">Yolo Outdoors</option>
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
                  <input type="text" id="tour-manager" className="form-control" placeholder="Manager Name" />
                </div>
              </form>
            </Col>
            <Col lg={4}>
              <form>
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
Duration
                  </label>
                  <input type="text" id="duration" className="form-control" placeholder="Nights/Days" />
                </div>
              </form>
            </Col>
            <Col lg={4}>
              <form>
                <label htmlFor="destinations" className="form-label">
               Destinations
                </label>
                 <input type="text" id="destinations" className="form-control" placeholder="Enter number of cities" />
              </form>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col lg={4}>
              <div className="mt-3 ">
                <h5 className="text-dark fw-medium">Group Size :</h5>
                 <div className="d-flex flex-wrap align-items-center gap-0">
    <label htmlFor="minGroup" className="fw-normal">Min:</label>
    <input type="number" className="form-control w-auto" id="minGroup" placeholder="e.g. 2" />

    <label htmlFor="maxGroup" className="fw-normal">Max:</label>
    <input type="number" className="form-control w-auto" id="maxGroup" placeholder="e.g. 20" />
  </div>
              </div>
            </Col>
          <Col lg={8}>
           <div className="mt-3">
      <h5 className="text-gray-800 font-medium mb-3">Inclusions :</h5>
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
                <textarea className="form-control bg-light-subtle" id="description" rows={7} placeholder="Short description about the tour" defaultValue={''} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <form>
                <div className="mb-3">
                  <label htmlFor="departure-cities" className="form-label">
                   Departure Cities
                  </label>
                  <input type="number" id="departure-cities" className="form-control" placeholder="0" />
                </div>
              </form>
            </Col>
            <Col lg={3}>
              <form>
                <div className="mb-3">
                  <label htmlFor="avaiableseats" className="form-label">
                    Available Seats
                  </label>
                  <input type="number" id="availableseats" className="form-control" placeholder="0" />
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
    />
    <input
      type="date"
      id="departure-to"
      className="form-control"
      placeholder="To"
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
        <option>₹ (INR)</option>
        <option>$ (USD)</option>
      </select>
    </div>
    <div className="col-md-4">
      <label className="form-label">Price Type</label>
      <select className="form-select">
        <option>Per Person</option>
        <option>Per Couple</option>
        <option>Per Group</option>
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
      <input type="number" className="form-control" placeholder="e.g. 10" />
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
          <Col lg={3}>
            <Link href="" className="btn btn-outline-secondary w-100">
              Create Package
            </Link>
          </Col>
          <Col lg={2}>
            <Link href="" className="btn btn-primary w-100">
              Cancel
            </Link>
          </Col>
        </Row>
      </div>
    </Col>;
};
export default AddPackage;