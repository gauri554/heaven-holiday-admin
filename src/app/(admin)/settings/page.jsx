import React from 'react';
import GeneralSettings from './components/GeneralSettings';
import ContactDetails from './components/ContactDetails';
import PaymentSettings from './components/PaymentSettings';
import SettingsBoxs from './components/SettingsBoxs';
import TourSettings from './components/TourSettings';
import PageTItle from '@/components/PageTItle';
import Link from 'next/link';
const SettingsPage = () => {
  return <>
      <PageTItle title="SETTINGS" />
      <GeneralSettings />
      <ContactDetails />
      <PaymentSettings />
      <SettingsBoxs />
      <TourSettings />
      <div className="text-end">
        <Link href="" className="btn btn-danger">
          Cancel
        </Link>
        &nbsp;
        <Link href="" className="btn btn-success">
          Save Change
        </Link>
      </div>
    </>;
};
export default SettingsPage;