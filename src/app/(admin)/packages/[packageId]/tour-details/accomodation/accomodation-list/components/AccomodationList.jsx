import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { getAccomodationData } from '@/helpers/data';
import React from 'react';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownMenu,
  DropdownToggle
} from 'react-bootstrap';

const AccommodationCard = ({ city, country, hotel, checkIn, checkOut }) => {
  return (
    <tr>
      <td>
        <div className="form-check ms-1">
          <input
            type="checkbox"
            className="form-check-input"
            id={`accommodationCheck-${city}`}
          />
          <label
            className="form-check-label"
            htmlFor={`accommodationCheck-${city}`}
          >
            &nbsp;
          </label>
        </div>
      </td>
      <td>{city}</td>
      <td>{country}</td>
      <td>{hotel}</td>
      <td>{checkIn}</td>
      <td>{checkOut}</td>
      <td>
        <div className="d-flex gap-2">
          <Link href="" className="btn btn-light btn-sm">
            <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
          </Link>
          <Link href="/accommodation/edit" className="btn btn-soft-primary btn-sm">
            <IconifyIcon icon="solar:pen-2-broken" className="align-middle fs-18" />
          </Link>
          <Link href="" className="btn btn-soft-danger btn-sm">
            <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

const AccommodationList = async () => {

  const accommodationData = await getAccomodationData();

  return (
    <Card>
      <CardHeader className="d-flex flex-wrap justify-content-between align-items-center gap-1">
        <CardTitle as={'h4'} className="flex-grow-1">
          All Accommodations
        </CardTitle>
         <input
      type="text"
      className="form-control w-auto"
      placeholder="Search accomodations..."
    />
       <Link href="/packages/1/tour-details/accomodation/accomodation-add" className="btn btn-sm btn-primary">
  Add Accommodation
</Link>

        <Dropdown>
          <DropdownToggle
            as={'a'}
            href="#"
            className="btn btn-sm btn-outline-light content-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            This Month
            <IconifyIcon
              width={16}
              height={16}
              className="ms-1"
              icon="bx:chevron-down"
            />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <Link href="" className="dropdown-item">Download</Link>
            <Link href="" className="dropdown-item">Export</Link>
            <Link href="" className="dropdown-item">Import</Link>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>

      <div className="table-responsive">
        <table className="table align-middle mb-0 table-hover table-centered">
          <thead className="bg-light-subtle">
            <tr>
              <th style={{ width: 20 }}>
                <div className="form-check ms-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkAllAccommodations"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkAllAccommodations"
                  />
                </div>
              </th>
              <th>City</th>
              <th>Country</th>
              <th>Hotel</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accommodationData.map((item, idx) => (
              <AccommodationCard key={idx} {...item} />
            ))}
          </tbody>
        </table>
      </div>

      <CardFooter className="border-top">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end mb-0">
            <li className="page-item">
              <Link className="page-link" href="">Previous</Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" href="">1</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">2</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">3</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="">Next</Link>
            </li>
          </ul>
        </nav>
      </CardFooter>
    </Card>
  );
};

export default AccommodationList;
