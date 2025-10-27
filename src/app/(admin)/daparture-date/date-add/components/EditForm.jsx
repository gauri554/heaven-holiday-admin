'use client';

import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const EditForm = () => {
  const messageSchema = yup.object({
    name: yup.string().required('Please enter Variant Name'),
    value: yup.string().required('Please enter Attribute Value'),
    id: yup.string().required('Please enter Enter ID')
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
        {/* Select Tour */}
        <Col lg={6}>
          <div className="mb-3">
            <SelectFormInput
              control={control}
              name="tourId"
              label="Select Tour"
              placeholder="Choose a Tour"
              options={tourOptions}
            />
          </div>
        </Col>

    
        <Col lg={6}>
          <div className="mb-3">
            <SelectFormInput
              control={control}
              name="departureCity"
              label="Departure City"
              placeholder="Choose Departure City"
              options={cityOptions}
            />
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
          <div className="mb-3">
            <TextFormInput
              control={control}
              type="number"
              name="seatsAvailable"
              label="Seats Available"
              placeholder="Enter Seats Available"
            />
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

        {/* Status */}
        <Col lg={6}>
          <div className="form-check form-switch mt-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="statusSwitch"
              {...register('status')}
            />
            <label className="form-check-label ms-2" htmlFor="statusSwitch">
              Active
            </label>
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