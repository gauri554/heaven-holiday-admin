import FileUpload from '@/components/FileUpload';
import PageTItle from '@/components/PageTItle';
import { Col, Row } from 'react-bootstrap';
import AddSubcategory from './components/AddSubcategory';
import SubcategoryEditCard from './components/SubcategoryEditCard';
export const metadata = {
  title: 'subcategory Edit'
};
const subcategoryEditPage = () => {
  return <>
      <PageTItle title="subcategory EDIT" />
      <Row>
        <SubcategoryEditCard />
        <Col xl={8} lg={8}>
          <FileUpload title="Add subcategory Photo" />
          <AddSubcategory />
        </Col>
      </Row>
    </>;
};
export default subcategoryEditPage;