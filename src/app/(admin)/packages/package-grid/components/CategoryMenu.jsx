'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import Link from 'next/link';
import Nouislider from 'nouislider-react';
import { useState } from 'react';
import { Card, CardBody, CardFooter } from 'react-bootstrap';
const CategoryMenu = () => {
  const [selectedValue, setSelectedValue] = useState([200, 1299]);
  const handleSliderChange = values => {
    setSelectedValue(values);
  };
  const handleInputChange = event => {
    if (selectedValue[0] <= Math.round(event.target.value)) {
      setSelectedValue([selectedValue[0], Math.round(event.target.value)]);
    }
  };
  return <Card>
      <CardBody className="border-light">
        <Link href="" className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#categories" aria-expanded="false" aria-controls="other">
          Categories
          <i className="bx bx-chevron-down ms-auto fs-20" />
        </Link>
        <div id="categories" className="collapse show">
          <div className="categories-list d-flex flex-column gap-2 mt-2">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="all-categories" defaultChecked />
              <label className="form-check-label" htmlFor="all-categories">
                All Categories
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="fashion-categories" />
              <label className="form-check-label" htmlFor="fashion-categories">
                India
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="sunglass-categories" />
              <label className="form-check-label" htmlFor="sunglass-categories">
                World
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="watches-categories" />
              <label className="form-check-label" htmlFor="watches-categories">
Customized Holidays
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="electronics-categories" />
              <label className="form-check-label" htmlFor="electronics-categories">
Speciality Tours
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="furniture-categories" />
              <label className="form-check-label" htmlFor="furniture-categories">
Inbound
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="headphones-categories" />
              <label className="form-check-label" htmlFor="headphones-categories">
Corporate Tour
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="beauty-categories" />
              <label className="form-check-label" htmlFor="beauty-categories">
             Group Tour
              </label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="shoes-categories" />
              <label className="form-check-label" htmlFor="shoes-categories">
               Family Tour
              </label>
            </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="shoes-categories" />
              <label className="form-check-label" htmlFor="shoes-categories">
             Womens Special
              </label>
            </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="shoes-categories" />
              <label className="form-check-label" htmlFor="shoes-categories">
            Seniors Special
              </label>
            </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="shoes-categories" />
              <label className="form-check-label" htmlFor="shoes-categories">
             Grandparents and Grandchildren Special
              </label>
            </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="shoes-categories" />
              <label className="form-check-label" htmlFor="shoes-categories">
              Road Trips
              </label>
            </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="shoes-categories" />
              <label className="form-check-label" htmlFor="shoes-categories">
              YOLO Outdoors
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="" className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#price" aria-expanded="false" aria-controls="other">
            Package Price
            <i className="bx bx-chevron-down ms-auto fs-20" />
          </Link>
          <div id="price" className="collapse show">
            <div className="categories-list d-flex flex-column gap-2 mt-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="all-price" />
                <label className="form-check-label" htmlFor="all-price">
                  All Price
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="price-1" />
                <label className="form-check-label" htmlFor="price-1">
                  Below {currency}22000
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="price-2" />
                <label className="form-check-label" htmlFor="price-2">
                  {currency}22000 - {currency}80000
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="price-3" />
                <label className="form-check-label" htmlFor="price-3">
                  {currency}80000 - {currency}1.4L
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="price-4" />
                <label className="form-check-label" htmlFor="price-4">
                  {currency}1.4L - {currency}2L
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="price-5" />
                <label className="form-check-label" htmlFor="price-5">
                  {currency}2L - above
                </label>
              </div>
              <h5 className="text-dark fw-medium mt-3">Tour Duration (in days) :</h5>
              <Nouislider range={{
              min: 6,
              max: 17
            }} start={selectedValue} connect={true} className="Package-price-range" onSlide={handleSliderChange} />
              <div className="formCost d-flex gap-2 align-items-center mt-2">
                <input className="form-control form-control-sm text-center" type="number" id="minCost" value={selectedValue[0]} onChange={handleInputChange} />
                <span className="fw-semibold text-muted">to</span>
                <input className="form-control form-control-sm text-center" type="number" id="maxCost" value={selectedValue[1]} onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="" className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#gender" aria-expanded="false" aria-controls="other">
            Departure City
            <i className="bx bx-chevron-down ms-auto fs-20" />
          </Link>
          <div id="gender" className="collapse show">
            <div className="categories-list d-flex flex-column gap-2 mt-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="men" />
                <label className="form-check-label" htmlFor="men">
                 Pune(9)
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="women" />
                <label className="form-check-label" htmlFor="women">
Mumbai(4)
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="kids" />
                <label className="form-check-label" htmlFor="kids">
                 Udaipur(6)
                </label>
              </div>
                 <div className="form-check">
                <input type="checkbox" className="form-check-input" id="kids" />
                <label className="form-check-label" htmlFor="kids">
                 Jaipur(13)
                </label>
              </div>
                 <div className="form-check">
                <input type="checkbox" className="form-check-input" id="kids" />
                <label className="form-check-label" htmlFor="kids">
                Ahmedabad(13)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="" className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#size" aria-expanded="false" aria-controls="other">
           Package Type
            <i className="bx bx-chevron-down ms-auto fs-20" />
          </Link>
          <div id="size" className="collapse show">
            <p className="text-muted mt-1"></p>
            <div className="categories-list d-flex flex-column gap-2 mt-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="size-s" />
                <label className="form-check-label" htmlFor="size-s">
                All
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="size-m" />
                <label className="form-check-label" htmlFor="size-m">
                Group Tour
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="size-l" />
                <label className="form-check-label" htmlFor="size-l">
                 Customized Holidays
                </label>
              </div>
             
            
              <Link href="" className="text-dark fw-medium">
                More
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Link href="" className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#rating" aria-expanded="false" aria-controls="other">
            Rating
            <i className="bx bx-chevron-down ms-auto fs-20" />
          </Link>
          <div id="rating" className="collapse show">
            <div className="categories-list d-flex flex-column gap-2 mt-2">
              <div className="form-check">
                <input type="radio" className="form-check-input" name="rating-number" id="rate-1" />
                <label className="form-check-label" htmlFor="rate-1">
                  1 <IconifyIcon icon="bxs:star" className="text-warning" /> &amp; Above (180)
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="rating-number" id="rate-2" />
                <label className="form-check-label" htmlFor="rate-2">
                  2 <IconifyIcon icon="bxs:star" className="text-warning" /> &amp; Above (657)
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="rating-number" id="rate-3" />
                <label className="form-check-label" htmlFor="rate-3">
                  3 <IconifyIcon icon="bxs:star" className="text-warning" /> &amp; Above (1,897)
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="rating-number" id="rate-4" />
                <label className="form-check-label" htmlFor="rate-4">
                  4 <IconifyIcon icon="bxs:star" className="text-warning" /> &amp; Above (3,571)
                </label>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Link href="" className="btn btn-primary w-100">
          Apply
        </Link>
      </CardFooter>
    </Card>;
};
export default CategoryMenu;