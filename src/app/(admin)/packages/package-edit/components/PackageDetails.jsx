import package1 from '@/assets/images/products/package1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { FaPlane, FaTrain, FaShip, FaBus, FaBaby } from "react-icons/fa";
import Image from 'next/image';
import { Card, CardBody, Col } from 'react-bootstrap';
const PackageDetails = () => {
  return <Col xl={3} lg={4}>
      <Card>
        <CardBody>
            <Image src={package1} alt="package" className="img-fluid rounded bg-light" />
                    <div className="mt-3">
                      <h4>
                      Rajasthan Marwad<span className="fs-14 text-muted ms-1"></span>
                      </h4>
                      <h6 className="fw-semibold text-dark  d-flex align-items-center gap-2">
                           <span className="text-dark fw-medium ">Price  :</span>
                        <span className="text-muted text-base">{currency}45000</span> 
                      </h6>
                      <div className="mt-3">
                        <h5 className="text-dark fw-medium">Travel Mode :</h5>
            <div className="container">
                <div className="row g-3">
          
                  {/* Flight */}
                  <div className="col-6 col-md-6">
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
                  <div className="col-6 col-md-6">
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
                  <div className="col-6 col-md-6">
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
                  <div className="col-6 col-md-6">
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
                      </div>
                     <div className="mt-3">
            <h5 className="text-dark fw-medium">Category:</h5>
            <div
              className="d-flex flex-wrap gap-2"
              role="group"
              aria-label="Package type toggle button group"
            >
             <input
      type="radio"
      className="btn-check"
      name="category"
      id="category-india"
      defaultChecked
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="category-india"
    >
    India
    </label>

    <input
      type="radio"
      className="btn-check"
      name="category"
      id="category-world"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="category-world"
    >
     World
    </label>


    <input
      type="radio"
      className="btn-check"
      name="category"
      id="category-corporate"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="category-corporate"
    >
Corporate Tour
    </label>

   
   
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
     Women's Special Tour
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
     Senior's Special Tour
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
      id="yolooutdoor-tour"
    />
    <label
      className="btn btn-outline-primary rounded px-2 py-1"
      htmlFor="yolooutdoor-tour"
    >
   YOLO Outdoors
    </label>
            </div>
          </div>
          
          
                    </div>
         </CardBody>
      </Card>
    </Col>;
};
export default PackageDetails;