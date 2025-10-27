'use client';

import TextFormInput from '@/components/form/TextFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useEffect } from 'react';

const TourInfoEditForm = () => {
 
  const tourInfoSchema = yup.object({
    tourName: yup.string().required('Please enter Tour Name'),
    inclusions: yup.string().required('Please enter Inclusions'),
    exclusions: yup.string().required('Please enter Exclusions'),
    preparation: yup.string().required('Please enter Preparation details'),
    docRequired: yup.string().required('Please enter Documents Required')
  });

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(tourInfoSchema),
  });

  
  const defaultTourData = {
    tourName: 'Himalayan Adventure Tour',
    inclusions: 'Accommodation, Meals, Sightseeing, Guide Services, Local Transfers',
    exclusions: 'Personal expenses, Tips, Travel Insurance, Laundry, Beverages',
    preparation: 'Carry warm clothes, trekking shoes, ID proof, and basic medicines',
    docRequired: 'Passport, Visa, Travel Insurance, Government ID'
  };

  
  useEffect(() => {
    reset(defaultTourData);
  }, [reset]);


  const onSubmit = (data) => {
    console.log('Updated Tour Info:', data);
    alert('Tour Information updated successfully!');
  };

  return (
    <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'}>Edit Tour Information</CardTitle>
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
                      name="inclusions"
                      label="Inclusions"
                      placeholder="Enter Inclusions (e.g., Flights, Meals, Hotel)"
                      rows={4}
                    />
                  </div>
                </Col>

        
                <Col lg={6}>
                  <div className="mb-3">
                    <TextAreaFormInput
                      control={control}
                      name="exclusions"
                      label="Exclusions"
                      placeholder="Enter Exclusions (e.g., Personal expenses)"
                      rows={4}
                    />
                  </div>
                </Col>

              
                <Col lg={6}>
                  <div className="mb-3">
                    <TextAreaFormInput
                      control={control}
                      name="preparation"
                      label="Preparation"
                      placeholder="Enter Preparation details (e.g., Passport, Visa)"
                      rows={4}
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
                      placeholder="Enter required documents"
                    />
                  </div>
                </Col>

              
              </Row>
            </CardBody>

            <CardFooter className="border-top">
              <Button type="submit" variant="primary">
                Update Tour Information
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>
  );
};

export default TourInfoEditForm;
