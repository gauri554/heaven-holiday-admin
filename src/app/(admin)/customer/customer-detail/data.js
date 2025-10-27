import { currency } from '@/context/constants';
import { addOrSubtractDaysFromDate } from '@/utils/date';
export const latestInvoice = [{
  title: 'Ticket Id #INV2540',
  date: addOrSubtractDaysFromDate(1)
}, {
  title: 'Ticket Id #INV0914',
  date: addOrSubtractDaysFromDate(10)
}, {
  title: 'Ticket Id #INV3801',
  date: addOrSubtractDaysFromDate(100)
}, {
  title: 'Ticket Id #INV4782',
  date: addOrSubtractDaysFromDate(120)
}];
export const customerDetailsCardDta = [{
  title: 'Total Ticket',
  item: '234',
  icon: 'solar:bill-list-bold-duotone'
}, {
  title: 'Total Booking',
  item: '219',
  icon: 'solar:box-bold-duotone'
}, {
  title: 'Total Revenue',
  item: `${currency}2,189`,
   icon: 'solar:wallet-money-bold-duotone'
}];