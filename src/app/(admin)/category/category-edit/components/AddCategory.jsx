'use client';

import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import * as yup from 'yup';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
const GeneralInformationCard = ({
  control
}) => {
  return <Card>
      <CardHeader>
        <CardTitle as={'h4'}>General Information</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} name="title" label="Category Title" placeholder="Enter Title" />
            </div>
          </Col>
          <Col lg={6}>
            <label htmlFor="crater" className="form-label">
              Created By
            </label>
            <ChoicesFormInput className="form-control" id="crater" data-choices data-choices-groups data-placeholder="Select Crater">
              <option>Select Creater</option>
              <option value="Seller">Seller</option>
              <option value="Admin" selected>Admin</option>
              <option value="Other">Other</option>
            </ChoicesFormInput>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} type="number" name="slug" label="Slug" placeholder="Enter Slug" defaultValue="group-tour"/>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} type="text" name="tag" label="Tag ID" placeholder="Enter Tag ID" />
            </div>
          </Col>
          <Col lg={12}>
            <div className="mb-0">
              <TextAreaFormInput control={control} type="text" name="description" label="Description" placeholder="Type description" />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
const MetaOptionsCard = ({
  control
}) => {
  return <Card>
      <CardHeader>
        <CardTitle as={'h4'}>Meta Options</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} type="text" name="meta" label="Meta Title" placeholder="Enter Title"  />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} type="text" name="metaTag" label="Meta ID" placeholder="Enter ID" />
            </div>
          </Col>
          <Col lg={12}>
            <div className="mb-0">
              <TextAreaFormInput rows={4} control={control} type="text" name="description2" label="Description" placeholder="Type description" />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
const AddCategory = () => {
  const messageSchema = yup.object({
    title: yup.string().required('Please enter title'),
    tag: yup.string().required('Please enter tag'),
    description: yup.string().required('Please enter description'),
    meta: yup.string().required('Please enter meta title'),
    metaTag: yup.string().required('Please enter meta tag')
  });
  const {
    reset,
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues: {
      title: "Group Tour",
      slug: 'group-tour',
      tag: 'FS16276',
      description: 'Architectural wonders, exquisite handicrafts, colourful culture, and tempting cuisine are a few of the many highlights of this magnificent state. Set amidst a vast desert, the magical land of Rajasthan is synonymous with romance and chivalry. As one of the best travel agency in India, we at Veena World take immense pride in helping you explore royalty like never before. With our Rajasthan tour packages, travel back in time and in the era of the reign of the crown',
      meta: 'Group Tour',
      metaTag: 'FS16276'
    }
  });
  return <form onSubmit={handleSubmit(() => {})}>
      <GeneralInformationCard control={control} />
      <MetaOptionsCard control={control} />
      <div className="p-3 bg-light mb-3 rounded">
        <Row className="justify-content-end g-2">
          <Col lg={3}>
            <Button variant="outline-secondary" type="submit" className="w-100">
              Save Change
            </Button>
          </Col>
          <Col lg={2}>
            <Link href="" className="btn btn-primary w-100">
              Cancel
            </Link>
          </Col>
        </Row>
      </div>
    </form>;
};
export default AddCategory;