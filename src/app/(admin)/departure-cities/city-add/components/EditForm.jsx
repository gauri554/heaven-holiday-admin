'use client';

import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const EditForm = () => {
  const messageSchema = yup.object({
 
  });
  const {
    reset,
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(messageSchema)
  });
  return <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(() => {})}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'}>Add Departure City</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput control={control} type="text" name="name" label="City Name" placeholder="Enter Departure City Name" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput control={control} type="text" name="value" label="Station Name" placeholder="Enter Station Name" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div>
                    <TextFormInput control={control} type="text" name="id" label="City ID" placeholder="Enter City ID" />
                  </div>
                </Col>
                <Col lg={6}>
                 <div>
                    <TextFormInput control={control} type="text" name="id" label="Country" placeholder="Enter Country Name" />
                  </div>
                  
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="border-top">
              <Button type="submit" variant="primary">
                Add City
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>;
};
export default EditForm;