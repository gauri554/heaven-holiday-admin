'use client';

import TextFormInput from '@/components/form/TextFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row, Table } from 'react-bootstrap';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const PricingPolicyEditForm = () => {

  const { control } = useForm({
    defaultValues: {
      departureCity: 'Mumbai',
      departureDate: '2026-03-06',
      cancellationPolicy: [
        { fromDays: 121, toDays: 900, fromDate: '2023-09-18', toDate: '2025-11-05', fee: 10 },
        { fromDays: 91, toDays: 120, fromDate: '2025-11-06', toDate: '2025-12-05', fee: 15 },
      ],
      paymentMethods: ['Cheque', 'NEFT', 'Debit Card'],
      convenienceCharge: 1.8,
      beneficiaryName: 'Veena Patil Hospitality Pvt Ltd',
      remarks: `All meals are provided by Veena World in case the flight reaches the stipulated destination early morning or leaves destination late in the evening.
The tour price varies for NRI’s or foreign nationals, for more details kindly contact your travel advisor.
NRIs and Foreign nationals please ensure proper identity is conveyed to booking executive at the time of booking and all details along with passport copies are handed over to the booking executive.
Standard Check-in and check-out time of hotels in India is generally 1.30 PM and 10 AM respectively.`,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cancellationPolicy',
  });

  const paymentOptions = ['Cheque', 'NEFT', 'Debit Card', 'Credit Card', 'IMPS'];

  return (
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'}>Edit Pricing & Policy</CardTitle>
          </CardHeader>

          <CardBody>
            <Row>
              <Col lg={6}>
                <TextFormInput control={control} name="departureCity" label="Departure City" />
              </Col>
              <Col lg={6}>
                <TextFormInput control={control} type="date" name="departureDate" label="Departure Date" />
              </Col>

              <Col lg={12} className="mb-3 mt-3">
                <h5>Cancellation Policy</h5>
                <Table bordered responsive>
                  <thead>
                    <tr>
                      <th>From Days</th>
                      <th>To Days</th>
                      <th>From Date</th>
                      <th>To Date</th>
                      <th>Fee (%)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((item, index) => (
                      <tr key={item.id}>
                        <td><Controller control={control} name={`cancellationPolicy.${index}.fromDays`} render={({ field }) => <input type="number" className="form-control" {...field} />} /></td>
                        <td><Controller control={control} name={`cancellationPolicy.${index}.toDays`} render={({ field }) => <input type="number" className="form-control" {...field} />} /></td>
                        <td><Controller control={control} name={`cancellationPolicy.${index}.fromDate`} render={({ field }) => <input type="date" className="form-control" {...field} />} /></td>
                        <td><Controller control={control} name={`cancellationPolicy.${index}.toDate`} render={({ field }) => <input type="date" className="form-control" {...field} />} /></td>
                        <td><Controller control={control} name={`cancellationPolicy.${index}.fee`} render={({ field }) => <input type="number" className="form-control" {...field} />} /></td>
                        <td><button type="button" className="btn btn-danger btn-sm" onClick={() => remove(index)}>Delete</button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => append({ fromDays: '', toDays: '', fromDate: '', toDate: '', fee: '' })}>Add Row</button>
              </Col>

              <Col lg={12} className="mt-3">
                <h5>Payment Terms</h5>
                {paymentOptions.map((option) => (
                  <div className="form-check form-check-inline" key={option}>
                    <input type="checkbox" className="form-check-input" checked={control._defaultValues.paymentMethods.includes(option)} />
                    <label className="form-check-label">{option}</label>
                  </div>
                ))}
                <div className="mt-2">
                  <TextFormInput control={control} type="number" name="convenienceCharge" label="Convenience Charge (%)" />
                </div>
                <div className="mt-2">
                  <TextFormInput control={control} type="text" name="beneficiaryName" label="Beneficiary Name" />
                </div>
              </Col>

              <Col lg={12} className="mt-3">
                <TextAreaFormInput control={control} name="remarks" label="Remarks" />
              </Col>
            </Row>
          </CardBody>

          <CardFooter className="border-top">
            <Button variant="primary">Update Pricing & Policy</Button>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default PricingPolicyEditForm;
