import { Col, Row } from 'react-bootstrap';
import GalleryList from './components/GalleryLst';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Gallery List'
};
const GalleryListPage = () => {
  return <>
      <PageTItle title="GALLERY LIST" />
      <Row>
        <Col xl={12}>
          <GalleryList />
        </Col>
      </Row>
    </>;
};
export default GalleryListPage;