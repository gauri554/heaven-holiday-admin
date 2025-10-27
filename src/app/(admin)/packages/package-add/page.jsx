import React from 'react';
import { Row } from 'react-bootstrap';
import PackageDetails from './components/PackageDetails';
import AddPackage from './components/AddPackage';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Package Add'
};
const PackageAddPage = () => {
  return <>
      <PageTItle title="CREATE PACKAGE" />
      <Row>
        <PackageDetails />
        <AddPackage />
      </Row>
    </>;
};
export default PackageAddPage;