import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getFlightData } from '@/helpers/data';
import Link from 'next/link';
import React from 'react';
import { Card, CardFooter, CardHeader, CardTitle, Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap';

const FlightCard = ({
  airline,
  flightNo,
  from,
  to,
  departure,
  arrival,
  duration,
  notes
}) => {
  return (
    <tr>
      <td>
        <div className="form-check ms-1">
          <input type="checkbox" className="form-check-input" id={`flightCheck-${flightNo}`} />
          <label className="form-check-label" htmlFor={`flightCheck-${flightNo}`}>
            &nbsp;
          </label>
        </div>
      </td>
      <td>{airline}</td>
      <td>{flightNo}</td>
      <td>{from} → {to}</td>
      <td>{departure}</td>
      <td>{arrival}</td>
      <td>{duration}</td>
      <td>{notes}</td>
      <td>
        <div className="d-flex gap-2">
          <Link href="" className="btn btn-light btn-sm">
            <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
          </Link>
          <Link href="" className="btn btn-soft-primary btn-sm">
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


const FlightList = async () => {
  const flightData = await getFlightData(); 
  return (
    <Card>
      <CardHeader className="d-flex flex-wrap justify-content-between align-items-center gap-1">
        <CardTitle as={'h4'} className="flex-grow-1">
          All Flights
        </CardTitle>
         <input
      type="text"
      className="form-control w-auto"
      placeholder="Search flights..."
    />
        <Link href="/packages/1/tour-details/flights/flifht-add" className="btn btn-sm btn-primary">
          Add Flight
        </Link>
        <Dropdown>
          <DropdownToggle as={'a'} href="#" className="btn btn-sm btn-outline-light content-none" data-bs-toggle="dropdown" aria-expanded="false">
            This Month
            <IconifyIcon width={16} height={16} className="ms-1" icon="bx:chevron-down" />
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
                  <input type="checkbox" className="form-check-input" id="checkAllFlights" />
                  <label className="form-check-label" htmlFor="checkAllFlights" />
                </div>
              </th>
              <th>Airline</th>
              <th>Flight No</th>
              <th>From → To</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Duration</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flightData.map((item, idx) => (
              <FlightCard key={idx} {...item} />
            ))}
          </tbody>
        </table>
      </div>
      <CardFooter className="border-top">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end mb-0">
            <li className="page-item"><Link className="page-link" href="">Previous</Link></li>
            <li className="page-item active"><Link className="page-link" href="">1</Link></li>
            <li className="page-item"><Link className="page-link" href="">2</Link></li>
            <li className="page-item"><Link className="page-link" href="">3</Link></li>
            <li className="page-item"><Link className="page-link" href="">Next</Link></li>
          </ul>
        </nav>
      </CardFooter>
    </Card>
  );
};

export default FlightList; 