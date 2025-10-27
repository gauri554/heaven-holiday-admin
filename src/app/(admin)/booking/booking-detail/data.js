import { addOrSubtractDaysFromDate } from '@/utils/date';
export const timelineData = [
  {
    title: 'Booking Requested',
    description: 'Booking request submitted by customer.',
    date: addOrSubtractDaysFromDate(5)
  },
  {
    title: 'Payment Received',
    description: 'Payment completed successfully.',
    date: addOrSubtractDaysFromDate(200),
    isTicket: true
  },
  {
    title: 'Documents Verified',
    description: 'All travel documents verified by admin.',
    date: addOrSubtractDaysFromDate(100),
    downloadTicket: true
  },
  {
    title: 'Tour Confirmed',
    description: 'Tour confirmed for selected dates.',
    date: addOrSubtractDaysFromDate(150),
    bookingStatus: 'Confirmed'
  },
  {
    title: 'Trip Completed',
    description: 'Tour successfully completed.',
    date: addOrSubtractDaysFromDate(45),
    bookingButton: ['Send Reminder', 'Edit Booking']
  }
];
export const bookingData = [ {
    title: 'Traveller Name',
    description: 'Gaston Lapierre',
    icon: 'solar:user-circle-bold-duotone'
  },
  {
    title: 'Tour Date',
    description: 'April 23, 2024',
    icon: 'solar:calendar-date-bold-duotone'
  },
  {
    title: 'Payment Status',
    description: 'Paid',
    icon: 'solar:chat-round-money-broken'
  },
  {
    title: 'Booking Reference',
    description: '#VW-0758267/90',
    icon: 'solar:clipboard-text-bold-duotone'
  }
 ];