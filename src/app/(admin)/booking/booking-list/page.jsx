import PageTItle from '@/components/PageTItle';
import BookingDataCardPage from './components/BookingDataCard';
import BookingList from './components/BookingList';
export const metadata = {
  title: 'Booking List'
};
const page = () => {
  return <>
      <PageTItle title="BOOKING LIST" />
      <BookingDataCardPage />
      <BookingList />
    </>;
};
export default page;