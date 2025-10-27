import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getTourInfoData } from '@/helpers/data'; 
import Link from 'next/link';
import React from 'react';
import { Card, CardFooter, CardHeader, CardTitle, Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap';

const TourInfoCard = ({
  tourName,
  inclusions,
  exclusions,
  preparation,
  lastUpdated,
}) => {
  return (
    <tr>
      <td>
        <div className="form-check ms-1">
          <input type="checkbox" className="form-check-input" id={`tourCheck-${tourName}`} />
          <label className="form-check-label" htmlFor={`tourCheck-${tourName}`}>&nbsp;</label>
        </div>
      </td>
      <td>{tourName}</td>
      <td className="text-truncate" style={{ maxWidth: "200px" }}>{inclusions}</td>
      <td className="text-truncate" style={{ maxWidth: "200px" }}>{exclusions}</td>
      <td className="text-truncate" style={{ maxWidth: "200px" }}>{preparation}</td>
      <td>{lastUpdated}</td>
      <td>
        <div className="d-flex gap-2">
          <Link href={`/tour-info/view`} className="btn btn-light btn-sm">
            <IconifyIcon icon="solar:eye-broken" className="align-middle fs-18" />
          </Link>
          <Link href={`/tour-info/edit`} className="btn btn-soft-primary btn-sm">
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


const TourInfoList = async () => {
  const tourInfoData = await getTourInfoData(); 

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center gap-1">
        <CardTitle as={'h4'} className="flex-grow-1">
          Tour Information List
        </CardTitle>
         <input
      type="text"
      className="form-control w-auto"
      placeholder="Search tour info..."
    />
        <Link href="/packages/1/tour-information/tourinfo-add" className="btn btn-sm btn-primary">
          Add Tour Information
        </Link>
        <Dropdown>
          <DropdownToggle as={'a'} href="#" className="btn btn-sm btn-outline-light content-none" data-bs-toggle="dropdown" aria-expanded="false">
            Actions
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
                  <input type="checkbox" className="form-check-input" id="checkAllTours" />
                  <label className="form-check-label" htmlFor="checkAllTours" />
                </div>
              </th>
              <th>Tour Name</th>
              <th>Inclusions</th>
              <th>Exclusions</th>
              <th>Preparation</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tourInfoData.map((item, idx) => (
              <TourInfoCard key={idx} {...item} />
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

export default TourInfoList;
