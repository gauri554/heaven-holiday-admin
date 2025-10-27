

import Image from 'next/image';
import { subcategoryData } from '../data';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const subcategoryCard = ({
  subcategoryTitle,
  categoryImg
}) => {
  return <Card>
      <CardBody className="text-center">
    <div className="rounded bg-secondary-subtle d-flex align-items-center justify-content-center mx-auto">
  <Image
    src={categoryImg}
    alt="SubcategoryImg"
    width={250}
    height={120}
    className="object-cover rounded"
  />
</div>


        <h4 className="mt-3 mb-0">{subcategoryTitle}</h4>
      </CardBody>
    </Card>;
};
const subcategory = () => {
  return <Row>
      {subcategoryData.map((item, idx) => <Col md={6} xl={3} key={idx}>
          <subcategoryCard {...item} />
        </Col>)}
    </Row>;
};
export default subcategory;