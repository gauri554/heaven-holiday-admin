'use client';

import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const FlightAddForm = () => {
  
  const flightSchema = yup.object({
    airlineName: yup.string().required('Please enter Airline Name'),
    flightNumber: yup.string().required('Please enter Flight Number'),
    departureCity: yup.string().required('Please enter Departure City'),
    arrivalCity: yup.string().required('Please enter Arrival City'),
    departureTime: yup.string().required('Please enter Departure Time'),
    arrivalTime: yup.string().required('Please enter Arrival Time'),
    price: yup.number().typeError('Please enter a valid price').required('Please enter Ticket Price'),
  });


  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(flightSchema),
  });

  const onSubmit = (data) => {
    console.log('Flight Added:', data);
    reset();
  };

  return (
    <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'}>Add Flight</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="airlineName"
                      label="Airline Name"
                      placeholder="Enter Airline Name"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="flightNumber"
                      label="Flight Number"
                      placeholder="Enter Flight Number"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="departureCity"
                      label="Departure City"
                      placeholder="Enter Departure City"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="arrivalCity"
                      label="Arrival City"
                      placeholder="Enter Arrival City"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="departureTime"
                      label="Departure Time"
                      placeholder="Enter Departure Time (e.g. 08:30 AM)"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="arrivalTime"
                      label="Arrival Time"
                      placeholder="Enter Arrival Time (e.g. 12:45 PM)"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div>
                    <TextFormInput
                      control={control}
                      type="number"
                      name="price"
                      label="Ticket Price (₹)"
                      placeholder="Enter Ticket Price"
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>

            <CardFooter className="border-top">
              <Button type="submit" variant="primary">
                Add Flight
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>
  );
};

export default FlightAddForm;
