import { currency } from '@/context/constants';
import { addOrSubtractDaysFromDate } from '@/utils/date';

export const latestEnquiries = [
  {
    id: 'ENQ2540',
    customer: 'Michael A. Miner',
    tour: 'Goa Tour',
    date: addOrSubtractDaysFromDate(1),
    status: 'Pending'
  },
  {
    id: 'ENQ0914',
    customer: 'Sara K. James',
    tour: 'Kerala Backwaters',
    date: addOrSubtractDaysFromDate(10),
    status: 'Contacted'
  },
  {
    id: 'ENQ3801',
    customer: 'John Doe',
    tour: 'Himachal Adventure',
    date: addOrSubtractDaysFromDate(100),
    status: 'Converted'
  },
  {
    id: 'ENQ4782',
    customer: 'Alice M. Brown',
    tour: 'Rajasthan Tour',
    date: addOrSubtractDaysFromDate(120),
    status: 'Pending'
  }
];

export const enquiryDetailsCardData = [{
  title: 'Total Ticket',
  item: '234',
  icon: 'solar:bill-list-bold-duotone',
  responseStatus: 'Pending',
  assignedStaff: 'John Smith',
  followUpDate: addOrSubtractDaysFromDate(5),
    remarks: 'Initial enquiry received.'
},];