'use client';

import ChoicesFormInput from '@/components/form/ChoicesFormInput';
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
              <CardTitle as={'h4'}>Add Departure Date</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg={6}>
                 <div className="mb-3">
                <label htmlFor="packageName" className="form-label">
              Package Name
                </label>
                <ChoicesFormInput
                  className="form-control"
                  id="packageName"
                  data-choices
                  data-choices-groups
                  data-placeholder="Select Package Name"
                >
                  <option value="">-- Select Package Name --</option>
                  <option value="sightseeing">Rajsthan Marwad</option>
                  <option value="travel">Highlights of Rajsthan</option>
      
                </ChoicesFormInput>
              </div>
                </Col>
                <Col lg={6}>
                     <div className="mb-3">
                <label htmlFor="travelMode" className="form-label">
                Travel Mode
                </label>
                <ChoicesFormInput
                  className="form-control"
                  id="departureCity"
                  data-choices
                  data-choices-groups
                  data-placeholder="Select Departure City"
                >
                  <option value="">-- Select Departure City --</option>
                  <option value="sightseeing">Mumbai</option>
                  <option value="travel">Pune</option>
             
                </ChoicesFormInput>
              </div>
                </Col>
                <Col lg={6}>
                   <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="date"
                      name="departureDate"
                      label="Departure Date"
                      placeholder="Select Departure Date"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                 <div>
                    <TextFormInput control={control} type="number" name="id" label="Seats Available" placeholder="Enter Seats Available" />
                  </div>
                  
                </Col>
                  <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="number"
                      name="price"
                      label="Price (Per Person)"
                      placeholder="Enter Price"
                    />
                  </div>
                </Col>

                {/* Tag Label */}
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="tagLabel"
                      label="Tag / Label"
                      placeholder="Enter Tag or Label (optional)"
                    />
                  </div>
                </Col>

                {/* Sub Label */}
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="subLabel"
                      label="Sub Label"
                      placeholder="Enter Sub Label (optional)"
                    />
                  </div>
                </Col>

              </Row>
            </CardBody>
            <CardFooter className="border-top">
              <Button type="submit" variant="primary">
                Add Departure Date
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>;
};
export default EditForm;