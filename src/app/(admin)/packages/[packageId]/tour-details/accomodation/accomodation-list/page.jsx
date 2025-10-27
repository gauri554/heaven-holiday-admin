import { Col, Row } from 'react-bootstrap';
import AccomodationList from './components/AccomodationList';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'Accomodation List'
};
const AccomodationListPage = () => {
  return <>
      <PageTItle title="ACCOMODATION LIST" />
      <Row>
        <Col xl={12}>
          <AccomodationList />
        </Col>
      </Row>
    </>;
};
export default AccomodationListPage;