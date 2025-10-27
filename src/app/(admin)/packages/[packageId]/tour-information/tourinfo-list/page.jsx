import { Col, Row } from 'react-bootstrap';
import TourInfoList from './components/TourInfoList';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'TourInfo List'
};
const TourInfoListPage = () => {
  return <>
      <PageTItle title="TOUR INFORMATION LIST" />
      <Row>
        <Col xl={12}>
          <TourInfoList />
        </Col>
      </Row>
    </>;
};
export default TourInfoListPage;