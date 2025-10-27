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
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues: {
      dayNumber: '1',
      title: 'Arrival at Destination',
      description: 'This tour includes the services of Veena Worlds Tour Manager. With 150+ sales offices, 1,000+ dedicated team members, and 350+ expert tour managers, Veena World ensures every detail of your journey is seamlessly planned.',
      sightseeing: ['Hawa Mahal', 'City Palace'],
        travelMode: 'Flight',
        meal: 'Breakfast',
      value: 'Dyson , H&M, Nike , GoPro , Huawei , Rolex , Zara , Thenorthface',
      id: 'BR-3922'
    }
  });
  return <Row>
  <Col lg={12}>
    <form onSubmit={handleSubmit(() => {})}>
      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Edit Itinerary</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            {/* Day Number */}
            <Col lg={6}>
              <div className="mb-3">
                <TextFormInput
                  control={control}
                  type="number"
                  name="dayNumber"
                  label="Day Number"
                  placeholder="Enter Day Number"
                
                />
              </div>
            </Col>

            {/* Title */}
            <Col lg={6}>
              <div className="mb-3">
                <TextFormInput
                  control={control}
                  type="text"
                  name="title"
                  label="Title"
                  placeholder="Enter Title"
              
                />
              </div>
            </Col>

            {/* Description */}
            <Col lg={12}>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control bg-light-subtle"
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="This tour includes the services of Veena World's Tour Manager.

With 150+ sales offices, 1,000+ dedicated team members, and 350+ expert tour managers, Veena World ensures every detail of your journey is seamlessly planned."
             
                />
              </div>
            </Col>

            {/* Sightseeing Spots */}
            <Col lg={6}>
              <div className="mb-3">
                <label htmlFor="sightseeing" className="form-label">
                  Sightseeing
                </label>
                <ChoicesFormInput
                  className="form-control"
                  id="sightseeing"
                  data-name="sightseeing"
                  data-choices
                  data-choices-removeitem
                  multiple
                  data-placeholder="Select Sightseeing Spots"
               
                >
                  <option value="Hawa Mahal" selected>Hawa Mahal</option>
                  <option value="City Palace">City Palace</option>
                  <option value="Jantar Mantar">Jantar Mantar</option>
                  <option value="Amer Fort">Amer Fort</option>
                </ChoicesFormInput>
              </div>
            </Col>

            {/* Travel Mode */}
            <Col lg={6}>
              <div className="mb-3">
                <label htmlFor="travelMode" className="form-label">
                  Travel Mode
                </label>
                <ChoicesFormInput
                  className="form-control"
                  id="travelMode"
             
                  data-choices
                  data-choices-groups
                  data-placeholder="Select Travel Mode"
                
                >
                  <option value="">Flight</option>
                  <option value="Flight">Flight</option>
                  <option value="Train">Train</option>
                  <option value="Cruise">Cruise</option>
                  <option value="Other">Other</option>
                </ChoicesFormInput>
              </div>
            </Col>

            {/* Meal */}
            <Col lg={6}>
              <div className="mb-3">
                <label htmlFor="meal" className="form-label">
                  Meal
                </label>
                <ChoicesFormInput
                  className="form-control"
                  id="meal"
                  name="meal"
                  data-choices
                  data-choices-groups
                  data-placeholder="Select Meal"
               
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </ChoicesFormInput>
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="border-top">
          <Button type="submit" variant="primary">
            Update Itinerary
          </Button>
        </CardFooter>
      </Card>
    </form>
  </Col>
</Row>;
};
export default EditForm;