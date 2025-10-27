import React from 'react';
import EditForm from './components/EditForm';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Banner Edit'
};
const page = () => {
  return <>
      <PageTItle title="BANNER EDIT" />
      <EditForm />
    </>;
};
export default page;