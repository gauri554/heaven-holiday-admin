import React from 'react';
import BookingForm from './components/BookingForm';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'NEW BOOKING'
};
const AddbookingPage = () => {
  return <>
      <PageTItle title="NEW BOOKING" />
      <BookingForm />
    </>;
};
export default AddbookingPage;
