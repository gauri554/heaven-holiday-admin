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
          <CardTitle as={'h4'}>Add Itinerary</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
         
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

         
             <Col lg={12}>
                         <div className="mb-3">
                           <label htmlFor="description" className="form-label">
                             Description
                           </label>
                           <textarea className="form-control bg-light-subtle" id="description" rows={4} placeholder="Short description about the tour" defaultValue={''} />
                         </div>
                       </Col>
          
              <Col lg={6}>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="permissions" className="form-label">
                             Sightseeing 
                            </label>
                            <ChoicesFormInput
                              className="form-control"
                              id="permissions"
                              data-choices
                              data-choices-removeitem
                              multiple
                              data-placeholder="Select Sightseeing Spots"
                            >
                              <option value="Manage Tours">Hawa Mahal</option>
                              <option value="Create Tours">City Palace</option>
                              <option value="Edit Tours">Jantar Mantar</option>
                                <option value="View Bookings">Amer Fort</option>
                            </ChoicesFormInput>
                          </div>
                        </form>
                      </Col>

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
                  <option value="">-- Select Travel Mode --</option>
                  <option value="sightseeing">Flight</option>
                  <option value="travel">Train</option>
                  <option value="meal">Cruise</option>
                  <option value="other">Other</option>
                </ChoicesFormInput>
              </div>
            </Col>

            
                       <Col lg={6}>
              <div className="mb-3">
                <label htmlFor="travelMode" className="form-label">
               
               Meal
                </label>
                <ChoicesFormInput
                  className="form-control"
                  id="travelMode"
                  data-choices
                  data-choices-groups
                  data-placeholder=""
                >
                  <option value="">Breakfast</option>
                  <option value="sightseeing">Breakfast</option>
                  <option value="travel">Lunch</option>
                  <option value="meal">Dinner</option>
             
                </ChoicesFormInput>
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="border-top">
          <Button type="submit" variant="primary">
            Add Itinerary
          </Button>
        </CardFooter>
      </Card>
    </form>
  </Col>
</Row>;
};
export default EditForm;