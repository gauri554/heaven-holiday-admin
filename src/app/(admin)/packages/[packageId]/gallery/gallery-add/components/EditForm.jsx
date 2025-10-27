'use client';

import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';

const GalleryAddForm = () => {

  const gallerySchema = yup.object({
    imageFile: yup.mixed().required('Please select an image'),
    title: yup.string().optional(),
    uploadDate: yup.string().required('Please select upload date'),
  });

 
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(gallerySchema),
    defaultValues: {
      imageFile: null,
      title: '',
      uploadDate: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Image Added:', data);
    reset();
  };

  return (
    <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle as="h4">Add Gallery Image</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                {/* Image File */}
                <Col lg={6} className="mb-3">
                  <Controller
                    name="imageFile"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Form.Group>
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control
                          type="file"
                          onChange={(e) => field.onChange(e.target.files[0])}
                        />
                        {fieldState.error && (
                          <Form.Text className="text-danger">{fieldState.error.message}</Form.Text>
                        )}
                      </Form.Group>
                    )}
                  />
                </Col>

                {/* Image Title */}
                <Col lg={6} className="mb-3">
                  <TextFormInput
                    control={control}
                    type="text"
                    name="title"
                    label="Image Title (optional)"
                    placeholder="Enter image title"
                  />
                </Col>

                {/* Upload Date */}
                <Col lg={6} className="mb-3">
                  <TextFormInput
                    control={control}
                    type="date"
                    name="uploadDate"
                    label="Upload Date"
                  />
                </Col>
              </Row>
            </CardBody>

            <CardFooter className="border-top">
              <Button type="submit" variant="primary">
                Add Image
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>
  );
};

export default GalleryAddForm;
