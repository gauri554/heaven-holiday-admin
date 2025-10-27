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
              <TextFormInput control={control} name="customername" label="Customer Name" placeholder="Enter Customer Name" />
            </div>
          </Col>
          <Col lg={6}>
            <label htmlFor="crater" className="form-label">
              Created By
            </label>
            <ChoicesFormInput className="form-control" id="creater" data-choices data-choices-groups data-placeholder="Select Creater">
              <option defaultValue={''}>Select Creater</option>
              <option value="Seller">Seller</option>
              <option value="Admin">Admin</option>
              <option value="Other">Other</option>
            </ChoicesFormInput>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} type="text" name="phonenumber" label="Phonenumber" placeholder="Enter Phone Number" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} type="text" name="customerid" label="Customer ID" placeholder="F12360" />
            </div>
          </Col>
          <Col lg={12}>
            <div className="mb-0">
              <TextFormInput control={control} type="text" name="email" label="Email ID" placeholder="Enter Email ID" />
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
              <TextFormInput control={control} type="text" name="reference" label="Booking Reference" placeholder="Enter Booking Reference" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <TextFormInput control={control} type="text" name="category" label="Category" placeholder="Enter Category" />
            </div>
          </Col>
          <Col lg={12}>
            <div className="mb-0">
              <TextFormInput  control={control} type="number" name="travelers" label="Number of Travelers" placeholder="Number of Travelers" />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
const AddCustomer = () => {
  const messageSchema = yup.object({
  
  });
  const {
    reset,
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(messageSchema)
  });
  return <form onSubmit={handleSubmit(() => {})}>
      <GeneralInformationCard control={control} />
      <MetaOptionsCard control={control} />
      <div className="p-3 bg-light mb-3 rounded">
        <Row className="justify-content-end g-2">
          <Col lg={2}>
            <Button variant="outline-secondary" type="submit" className=" w-100">
              Create
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
export default AddCustomer;