import React from 'react';
import PackageDetails from './components/PackageDetails';
import Step from './components/Step';
import Review from './components/Review';
import TourDetails from './components/TourDetails';
import { Row } from 'react-bootstrap';
import { getPackageById } from '@/helpers/data';
import { notFound } from 'next/navigation';
import PageTItle from '@/components/PageTItle';
export const generateMetadata = async ({
  params
}) => {
  const pkg = await getPackageById(params.packageId);
  return {
    title: pkg?.id ?? 'Package Details'
  };
};
const PackageDetailsPage = async ({
  params
}) => {
  const pkg = await getPackageById(params.packageId);
  if (!pkg) notFound();
  return <>
      <PageTItle title="PACKAGE DETAILS" />
      <PackageDetails />
      <Step />
      <Row>
        <TourDetails />
        <Review />
      </Row>
    </>;
};
export default PackageDetailsPage;