'use client';

import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const AccommodationAddForm = () => {

  const accommodationSchema = yup.object({
    city: yup.string().required('Please enter City Name'),
    country: yup.string().required('Please enter Country Name'),
    hotelName: yup.string().required('Please enter Hotel Name'),
    checkIn: yup.string().required('Please enter Check-In Date'),
    checkOut: yup.string().required('Please enter Check-Out Date'),
    nights: yup
      .number()
      .typeError('Please enter valid number of nights')
      .required('Please enter Number of Nights'),
  });


  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(accommodationSchema),
  });

  const onSubmit = (data) => {
    console.log('Accommodation Added:', data);
    reset();
  };

  return (
    <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'}>Add Accommodation</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="city"
                      label="City"
                      placeholder="Enter City Name"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="country"
                      label="Country"
                      placeholder="Enter Country Name"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="hotelName"
                      label="Hotel Name"
                      placeholder="Enter Hotel Name (e.g. Elysium Gardens Hill Resorts)"
                    />
                  </div>
                </Col>


                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="date"
                      name="checkIn"
                      label="Check-In Date"
                      placeholder="Select Check-In Date"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="date"
                      name="checkOut"
                      label="Check-Out Date"
                      placeholder="Select Check-Out Date"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div>
                    <TextFormInput
                      control={control}
                      type="number"
                      name="nights"
                      label="Number of Nights"
                      placeholder="Enter Number of Nights"
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>

            <CardFooter className="border-top">
              <Button type="submit" variant="primary">
                Add Accommodation
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>
  );
};

export default AccommodationAddForm;
