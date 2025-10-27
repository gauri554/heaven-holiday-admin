'use client';
import PageTItle from '@/components/PageTItle';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getReviewsData } from '@/helpers/data'; 
import Link from 'next/link';
import React from 'react';
import { Card, CardFooter, CardHeader, CardTitle, Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap';



const ReviewCard = ({ reviewerName, rating, comment, date, status }) => {

  
  return (
    <tr>
      <td>
        <div className="form-check ms-1">
          <input type="checkbox" className="form-check-input" />
        </div>
      </td>
      <td>{reviewerName}</td>
      <td>{rating} ⭐</td>
      <td className="text-truncate" style={{ maxWidth: '250px' }}>{comment}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>
        <div className="d-flex gap-2">
          <Link href="" className="btn btn-soft-success btn-sm">
            <IconifyIcon icon="solar:check-bold" className="align-middle fs-18" /> Approve
          </Link>
          <Link href="" className="btn btn-soft-warning btn-sm">
            <IconifyIcon icon="solar:close-circle-bold" className="align-middle fs-18" /> Reject
          </Link>
          <Link href="" className="btn btn-soft-danger btn-sm">
            <IconifyIcon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18" /> Delete
          </Link>
        </div>
      </td>
    </tr>
  );
};

const ReviewList = async () => {
  const reviewsData = await getReviewsData(); 

  return (
     
    <Card>
        <PageTItle title="REVIEW LIST" />
      <CardHeader className="d-flex justify-content-between align-items-center gap-1">
        <CardTitle as={'h4'} className="flex-grow-1">All Reviews</CardTitle>
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
                  <input type="checkbox" className="form-check-input" />
                </div>
              </th>
              <th>Reviewer Name</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviewsData.map((item, idx) => (
              <ReviewCard key={idx} {...item} />
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

export default ReviewList;
