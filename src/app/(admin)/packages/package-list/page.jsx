import { Col, Row } from 'react-bootstrap';
import PackageList from './Components/PackageList';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Package List'
};
const PackageListPage = () => {
  return <>
      <PageTItle title="TOUR PACKAGE LIST" />
      <Row>
        <Col xl={12}>
          <PackageList />
        </Col>
      </Row>
    </>;
};
export default PackageListPage;