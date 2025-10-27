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
  return  <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(() => {})}>
          <Card>
            <CardHeader>
              <CardTitle as={"h4"}>Add New Banner</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
               
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="title"
                      label="Banner Title"
                      placeholder="Enter banner title"
                    />
                  </div>
                </Col>

             
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="subtitle"
                      label="Subtitle"
                      placeholder="Enter subtitle (optional)"
                    />
                  </div>
                </Col>

             
                <Col lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Desktop Banner Image</label>
                    <input
                      type="file"
                      name="desktopImage"
                      className="form-control"
                      accept="image/*"
                    />
                    <small className="text-muted">Recommended: 1920x600 px</small>
                  </div>
                </Col>

           
                <Col lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Mobile Banner Image</label>
                    <input
                      type="file"
                      name="mobileImage"
                      className="form-control"
                      accept="image/*"
                    />
                    <small className="text-muted">Recommended: 768x600 px</small>
                  </div>
                </Col>

              
                <Col lg={6}>
                  <div className="mb-3">
                    <label htmlFor="linkType" className="form-label">
                      Link Type
                    </label>
                    <ChoicesFormInput
                      className="form-control"
                      id="linkType"
                      data-choices
                      data-placeholder="Select Link Type"
                      name="linkType"
                    >
                      <option value="tour">Tour Package</option>
                      <option value="category">Category</option>
                      <option value="external">External URL</option>
                    </ChoicesFormInput>
                  </div>
                </Col>

             
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="linkTarget"
                      label="Link Target"
                      placeholder="Enter URL or package/category slug"
                    />
                  </div>
                </Col>

            
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="number"
                      name="order"
                      label="Display Order"
                      placeholder="Enter display order (e.g. 1)"
                    />
                  </div>
                </Col>

              
                <Col lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <ChoicesFormInput
                      className="form-control"
                      id="status"
                      data-choices
                      name="status"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </ChoicesFormInput>
                  </div>
                </Col>
              </Row>
            </CardBody>

            <CardFooter className="border-top text-end">
              <Button type="submit" variant="primary">
                Add Banner
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>;
};
export default EditForm;