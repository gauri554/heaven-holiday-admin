import React from 'react';
import EditForm from './components/EditForm';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Itinerary Edit'
};
const page = () => {
  return <>
      <PageTItle title="EDIT ITINERARY" />
      <EditForm />
    </>;
};
export default page;