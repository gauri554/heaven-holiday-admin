'use client';
import package1 from '@/assets/images/products/package1.jpg';
import package2 from '@/assets/images/products/package-2.jpeg';
import package3 from '@/assets/images/products/package-3.jpeg';
import package4 from '@/assets/images/products/package-4.jpeg';
import { FaHotel, FaUtensils, FaBusAlt, FaMapMarkedAlt, FaUserTie } from "react-icons/fa";
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { FaPlane, FaTrain, FaShip, FaBus, FaBaby } from "react-icons/fa";
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardBody, CardFooter, Carousel, CarouselItem, Col, Row } from 'react-bootstrap';
const PackageDetails = () => {
  const packages = [package1, package2, package3, package4];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = selectedIndex => {
    setActiveIndex(selectedIndex);
  };
  const handleThunkSelect = index => {
    setActiveIndex(index);
  };
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      setQuantity(1);
    }
  };
  return <Row>
      <Col lg={4}>
        <Card>
          <CardBody>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <Carousel activeIndex={activeIndex} onSelect={handleSelect} indicators={false} className="carousel-inner" role="listbox">
                {packages.map((item, idx) => <CarouselItem key={idx}>
                    <Image src={item} alt="packageImg" className="img-fluid bg-light rounded" />
                  </CarouselItem>)}
              </Carousel>
              <div className="carousel-indicators m-0 mt-2 d-lg-flex d-none position-static h-100">
                {packages.map((item, idx) => <button key={idx} type="button" onClick={() => handleThunkSelect(idx)} data-bs-target="#carouselExampleFade" data-bs-slide-to={0} aria-current="true" id="Slide-1" className={clsx('w-auto h-auto rounded bg-light', {
                active: activeIndex === idx
              })}>
                    <Image src={item} className="d-block avatar-xl" alt="swiper-indicator-img" />
                  </button>)}
              </div>
            </div>
          </CardBody>
          <CardFooter className="border-top">
            <Row className="g-2">
              <Col lg={5}>
                <Link href="" className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100">
                   Book Now
                </Link>
              </Col>
              <Col lg={5}>
                <Link href="" className="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100">
                Send Enquiry
                </Link>
              </Col>
              <Col lg={2}>
                <button type="button" className="btn btn-soft-danger btn-sm d-inline-flex align-items-center justify-content-center fs-20 rounded w-100">
                  <span>
                    {' '}
                    <IconifyIcon width={20} height={20} icon="solar:heart-broken" />{' '}
                  </span>
                </button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
      <Col lg={8}>
        <Card>
          <CardBody>
            <h4 className="badge bg-success text-light fs-14 py-1 px-2">New Arrival</h4>
            <p className="mb-1">
              <Link href="" className="fs-24 text-dark fw-medium">
               Rajsthan Marwad
              </Link>
            </p>
            <div className="d-flex gap-2 align-items-center">
              <ul className="d-flex text-warning m-0 fs-20  list-unstyled">
                <li>
                  <IconifyIcon icon="bxs:star" />
                </li>
                <li>
                  <IconifyIcon icon="bxs:star" />
                </li>
                <li>
                  <IconifyIcon icon="bxs:star" />
                </li>
                <li>
                  <IconifyIcon icon="bxs:star" />
                </li>
                <li>
                  <IconifyIcon icon="bxs:star-half" />
                </li>
              </ul>
              <p className="mb-0 fw-medium fs-18 text-dark">
                4.5 <span className="text-muted fs-13">(189 Review)</span>
              </p>
            </div>
            <h2 className="fw-medium my-3">
              {currency}45000 
            
            </h2>
            <Row className="align-items-center g-2">
              <Col lg={12}>
                <div>
                  <h5 className="text-dark fw-medium">
                    Travel Mode </h5>
                  <div className="row g-3 me-3">
                 
                         {/* Flight */}
                         <div className="col-6 col-md-3">
                           <input
                             type="radio"
                             className="btn-check"
                             name="travel-mode"   
                             id="mode-flight"
                             defaultChecked
                           />
                           <label
                             className="btn btn-outline-primary w-100 rounded d-flex flex-column align-items-center justify-content-center p-4"
                             htmlFor="mode-flight"
                             style={{ height: "120px" }}
                           >
                             <FaPlane size={28} className="mb-2" />
                             <span>Flight</span>
                           </label>
                         </div>
                 
                         {/* Train */}
                         <div className="col-6 col-md-3">
                           <input
                             type="radio"
                             className="btn-check"
                             name="travel-mode"
                             id="mode-train"
                           />
                           <label
                             className="btn btn-outline-primary w-100 rounded d-flex flex-column align-items-center justify-content-center p-4"
                             htmlFor="mode-train"
                             style={{ height: "120px" }}
                           >
                             <FaTrain size={28} className="mb-2" />
                             <span>Train</span>
                           </label>
                         </div>
                 
                         {/* Cruise */}
                         <div className="col-6 col-md-3">
                           <input
                             type="radio"
                             className="btn-check"
                             name="travel-mode"
                             id="mode-cruise"
                           />
                           <label
                             className="btn btn-outline-primary w-100 rounded d-flex flex-column align-items-center justify-content-center p-4"
                             htmlFor="mode-cruise"
                             style={{ height: "120px" }}
                           >
                             <FaShip size={28} className="mb-2" />
                             <span>Cruise</span>
                           </label>
                         </div>
                 
                         {/* Bus */}
                         <div className="col-6 col-md-3">
                           <input
                             type="radio"
                             className="btn-check"
                             name="travel-mode"
                             id="mode-bus"
                           />
                           <label
                             className="btn btn-outline-primary w-100 rounded d-flex flex-column align-items-center justify-content-center p-4"
                             htmlFor="mode-bus"
                             style={{ height: "120px" }}
                           >
                             <FaBus size={28} className="mb-2" />
                             <span>Bus</span>
                           </label>
                         </div>
                 
                       </div>
                </div>
              </Col>
             
            </Row>

             <Row className="align-items-center g-2 mt-3">
              <Col lg={12}>
                <div>
                  <h5 className="text-dark fw-medium">
                 Category </h5>
                  <div className="row g-3 me-3">
                    <div
    className="d-flex flex-wrap gap-2"
    role="group"
    aria-label="category toggle button group"
  >
    {/* Standard */}
    <input
      type="radio"
      className="btn-check"
      name="package-type"
      id="india"
      defaultChecked
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="india"
    >
     India
    </label>

 {/* Luxury */}
    <input
      type="radio"
      className="btn-check"
      name="category"
      id="world"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="world"
    >
    World
    </label>


    {/* Premium */}
    <input
      type="radio"
      className="btn-check"
      name="category"
      id="group-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="group-tour"
    >
Group Tour
    </label>

   
    {/* Family */}
    <input
      type="radio"
      className="btn-check"
      name="category"
      id="family-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="family-tour"
    >
      Family Tour
    </label>

      <input
      type="radio"
      className="btn-check"
      name="category"
      id="speciality-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="speciality-tour"
    >
      Speciality Tour
    </label>

   
    <input
      type="radio"
      className="btn-check"
      name="category"
      id="customized-holidays"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="customized-holidays"
    >
      Customized Holidays
    </label>

     
    <input
      type="radio"
      className="btn-check"
      name="category"
      id="inbound-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="inbound-tour"
    >
      Inbound Tour
    </label>

     <input
      type="radio"
      className="btn-check"
      name="category"
      id="womens-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="womens-tour"
    >
    Women's Special
    </label>

     <input
      type="radio"
      className="btn-check"
      name="category"
      id="senior-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="senior-tour"
    >
     Seniors' Special
    </label>

     <input
      type="radio"
      className="btn-check"
      name="category"
      id="grandchild-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="grandchild-tour"
    >
    Grandparents and Grandchildren Special
    </label>

     <input
      type="radio"
      className="btn-check"
      name="category"
      id="road-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="road-tour"
    >
    Road Trips
    </label>

     <input
      type="radio"
      className="btn-check"
      name="category"
      id="yolooutdoors-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="yolooutdoors-tour"
    >
     YOLO Outdoors
    </label>
  </div>
                  </div>
                  </div>
                  </Col>
                  </Row>
            <div className="quantity mt-4">
              <h4 className="text-dark fw-medium mt-3">Group Size :</h4>
              <div className="input-step border bg-body-secondary p-1 mt-1 rounded d-inline-flex overflow-visible">
                <button type="button" onClick={decrement} className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100">
                  -
                </button>
                <input type="number" value={quantity} className="text-dark text-center border-0 bg-body-secondary rounded h-100" min={0} max={100} readOnly />
                <button type="button" onClick={increment} className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100">
                  +
                </button>
              </div>
            </div>
           <Row className="mb-4">
                     
                     <Col lg={12}>
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
           
                     <input type="radio" className="btn-check" name="inclusions" id="incl-guide" />
                     <label className="btn btn-outline-danger d-flex align-items-center gap-2 px-3 py-2" htmlFor="incl-guide">
                       <FaUserTie /> <span>Guide</span>
                     </label>
                   </div>
               </div>
                     </Col>
                     </Row>
            <h4 className="text-dark fw-medium">Description :</h4>
            <p className="text-muted">
             This tour includes the services of Veena World's Tour Manager.

With 150+ sales offices, 1,000+ dedicated team members, and 350+ expert tour managers, Veena World ensures every detail of your journey is seamlessly planned.{' '}
              <Link href="/packages/1/tour-information/tourinfo-list" className="link-primary">
                Read more
              </Link>
            </p>
          {/* <h4 className="text-dark fw-medium mt-3">Available offers :</h4>
            <div className="d-flex align-items-center mt-2">
              <IconifyIcon icon="bxs-bookmarks" className="text-success me-3 fs-20 mt-1" />
              <p className="mb-0">
                <span className="fw-medium text-dark">Bank Offer</span> 10% instant discount on Bank Debit Cards, up to {currency}30 on orders of{' '}
                {currency}50 and above
              </p>
            </div>
            <div className="d-flex align-items-center mt-2">
              <IconifyIcon icon="bxs-bookmarks" className="text-success me-3 fs-20 mt-1" />
              <p className="mb-0">
                <span className="fw-medium text-dark">Bank Offer</span> Grab our exclusive offer now and save 20% on your next purchase! Don&apos;t
                miss out, shop today!
              </p>
            </div> */}
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default PackageDetails;