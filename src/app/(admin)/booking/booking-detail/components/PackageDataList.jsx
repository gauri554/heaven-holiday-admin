import { currency } from '@/context/constants';
import { getAllBooking } from '@/helpers/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap';
const PackageDataList = async () => {
  const packageData = await getAllBooking();
  return <Card>
      <CardHeader>
        <CardTitle as={'h4'}>Tour Package</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <table className="table align-middle mb-0 table-hover table-centered">
            <thead className="bg-light-subtle border-bottom">
              <tr>
                <th>Tour Package Name</th>
                <th>Status</th>
                <th>Category</th>
                <th>Price (per person)</th>
                <th>Departure Date</th>
                <th>Travellers</th>
              </tr>
            </thead>
            <tbody>
              {packageData.slice(0, 4).map((item, idx) => <tr key={idx}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                        {item.image && <Image src={item.image} alt="productImg" className="avatar-md" />}
                      </div>
                      <div>
                        <Link href="" className="text-dark fw-medium fs-15">
                          {item.packageName}
                        </Link>
                      
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge bg-${item.bookingStatus == 'Packaging' ? 'light' : item.bookingStatus == 'Canceled' ? 'danger-subtle' : 'success-subtle'} text-${item.bookingStatus == 'Packaging' ? 'dark' : item.bookingStatus == 'Canceled' ? 'danger' : 'success'}  px-2 py-1 fs-13`}>
                      {item.bookingStatus}
                    </span>
                  </td>
                  <td> {item.category}</td>
                  <td>
                    {currency}
                    {item.totalAmt}.00
                  </td>
                  <td>
                   
                    {item.travelDate}
                  </td>
                  <td>{item.guests}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default PackageDataList;