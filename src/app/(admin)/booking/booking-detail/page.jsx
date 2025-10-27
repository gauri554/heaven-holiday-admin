import React from 'react';
import ProgressCard from './components/ProgressCard';
import PackageDataList from './components/PackageDataList';
import PackageTimeline from './components/PackageTimeline';
import BookingTags from './components/BookingTags';
import BookingDetails from './components/BookingDetails';
import { Col, Row } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Booking Detail'
};
const BookingDetailPage = () => {
  return <>
      <PageTItle title="BOOKING DETAILS" />
      <Row>
        <Col xl={9} lg={8}>
          <Row>
            <Col lg={12}>
              <ProgressCard />
              <PackageDataList />
              <PackageTimeline />
              <BookingTags />
            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={4}>
          <BookingDetails />
        </Col>
      </Row>
    </>;
};
export default BookingDetailPage;