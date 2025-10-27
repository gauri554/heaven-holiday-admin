'use client';

import TextFormInput from '@/components/form/TextFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const TourInfoAddForm = () => {
 
  const tourInfoSchema = yup.object({
    tourName: yup.string().required('Please enter Tour Name'),
    inclusions: yup.string().required('Please enter Inclusions'),
    exclusions: yup.string().required('Please enter Exclusions'),
    preparation: yup.string().required('Please enter Preparation details'),
    lastUpdated: yup
      .string()
      .required('Please enter Last Updated Date')
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        'Date must be in YYYY-MM-DD format'
      ),
  });

  
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(tourInfoSchema),
  });

  const onSubmit = (data) => {
    console.log('Tour Information Added:', data);
    reset();
  };

  return (
    <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'}>Add Tour Information</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="tourName"
                      label="Tour Name"
                      placeholder="Enter Tour Name"
                    />
                  </div>
                </Col>

             
                <Col lg={6}>
                  <div className="mb-3">
                    <TextAreaFormInput
                      control={control}
                      type="text"
                      name="inclusions"
                      label="Inclusions"
                      placeholder="Enter Inclusions (e.g., Flights, Meals, Hotel)"
                    />
                  </div>
                </Col>

             
                <Col lg={6}>
                  <div className="mb-3">
                    <TextAreaFormInput
                      control={control}
                      type="text"
                      name="exclusions"
                      label="Exclusions"
                      placeholder="Enter Exclusions (e.g., Personal expenses)"
                    
                    />
                  </div>
                </Col>

             
                <Col lg={6}>
                  <div className="mb-3">
                    <TextAreaFormInput
                      control={control}
                      type="text"
                      name="preparation"
                      label="Preparation"
                      placeholder="Enter Preparation details (e.g., Passport, Visa)"
                    />
                  </div>
                </Col>

        
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="docRequired"
                      label="Documents Required"
                      placeholder="Documents Required"
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>

            <CardFooter className="border-top">
              <Button type="submit" variant="primary">
                Add Tour Information
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>
  );
};

export default TourInfoAddForm;
