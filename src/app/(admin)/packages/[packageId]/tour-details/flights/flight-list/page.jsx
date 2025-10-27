import { Col, Row } from 'react-bootstrap';
import FlightList from './components/FlightList';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Flight List'
};
const FlightListPage = () => {
  return <>
      <PageTItle title="FLIGHT LIST" />
      <Row>
        <Col xl={12}>
          <FlightList />
        </Col>
      </Row>
    </>;
};
export default FlightListPage;