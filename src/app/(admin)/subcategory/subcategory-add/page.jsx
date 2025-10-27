import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SubcategoryEditCard from './components/SubcategoryEditCard';
import FileUpload from '@/components/FileUpload';
import AddSubcategory from './components/AddSubcategory';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'subcategory Add'
};
const subcategoryAddPage = () => {
  return <>
      <PageTItle title="Create subcategory" />
      <Row>
        <SubcategoryEditCard />
        <Col xl={8} lg={8}>
          <FileUpload title="Add Subcategory Photo" />
          <AddSubcategory />
        </Col>
      </Row>
    </>;
};
export default subcategoryAddPage;