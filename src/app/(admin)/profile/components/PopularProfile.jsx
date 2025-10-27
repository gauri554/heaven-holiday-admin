import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { popularTourData } from '../data';
import Link from 'next/link';
const PopularProfileCard = ({
  image,
destinations,
  duration,
  price,
  date,
  description,
  name,
  questionTag,
  title
}) => {
  return  <Card className="mb-3">
      <CardBody>
        <div className="d-flex align-items-center gap-3">
          <Image
            width={90}
            height={90}
            src={image || tourImg}
            alt={title}
            className="rounded border border-light"
          />
          <div>
            <h4 className="mb-1">{title}</h4>
            <p className="mb-0 text-muted fs-14">
           <IconifyIcon icon="mdi:map-marker-outline" className="text-primary me-1" /> {destinations}

            </p>
            <p className="mb-0 text-muted fs-14">
         <IconifyIcon icon="solar:clock-circle-bold" className="text-primary me-1" /> {duration}
 

            </p>
          </div>
        </div>

        <p className="mt-3 mb-2 text-dark">
          {description}{" "}
          <Link href="" className="text-primary">
            See more
          </Link>
        </p>

        <div className="d-flex align-items-center justify-content-between mt-3">
          <h5 className="text-success mb-0 fw-semibold">₹{price}</h5>
          <Link href="" className="btn btn-outline-primary btn-sm">
            View Details
          </Link>
        </div>
      </CardBody>
    
    </Card>;
};
const PopularTours = () => {
  return  <Row>
     
      <Col lg={3}>
        <Card>
          <CardHeader>
            <CardTitle as={"h4"}>Tour Categories</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex flex-wrap gap-2" role="group" aria-label="Tour category filters">
              <input type="checkbox" className="btn-check" id="all-tours" defaultChecked />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="all-tours"
              >
                All Tours (25)
              </label>

              <input type="checkbox" className="btn-check" id="customizedholidays" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="customizedholidays"
              >
                Customized Holidays (10)
              </label>

              <input type="checkbox" className="btn-check" id="grouptour" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="grouptour"
              >
              Group Tour (15)
              </label>

              <input type="checkbox" className="btn-check" id="family" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="family"
              >
                Family Tour (7)
              </label>

              <input type="checkbox" className="btn-check" id="speciality" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="speciality"
              >
                Speciality Tours (5)
              </label>

              <input type="checkbox" className="btn-check" id="inbound" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="inbound"
              >
                Inbound Tour (6)
              </label>

                 <input type="checkbox" className="btn-check" id="womens" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="womens"
              >
                Women's Special (6)
              </label>

                 <input type="checkbox" className="btn-check" id="senior" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="senior"
              >
               Senior's Special
              </label>

                 <input type="checkbox" className="btn-check" id="roadtrips" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="roadtrips"
              >
               Road Trips (6)
              </label>

                 <input type="checkbox" className="btn-check" id="yolooutdoor" />
              <label
                className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                htmlFor="yolooutdoor"
              >
               YOLO Outdoors (6)
              </label>
            </div>
          </CardBody>
          <CardFooter className="border-top text-center">
            <Link href="" className="link-primary">
              View More
            </Link>
          </CardFooter>
        </Card>
      </Col>

      {/* Tour List */}
      <Col lg={9}>
        {popularTourData.map((item, idx) => (
          <PopularProfileCard key={idx} {...item} />
        ))}
      </Col>
    </Row>;
};
export default PopularTours;