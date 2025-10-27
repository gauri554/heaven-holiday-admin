import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomerEditCard from './components/CustomerEditCard';
import FileUpload from '@/components/FileUpload';
import AddCustomer from './components/AddCustomer';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Customer Add'
};
const CustomerAddPage = () => {
  return <>
      <PageTItle title="CREATE CUSTOMER" />
      <Row>
        <CustomerEditCard />
        <Col xl={8} lg={8}>
          <FileUpload title="Add Customer Photo" />
          <AddCustomer />
        </Col>
      </Row>
    </>;
};
export default CustomerAddPage;