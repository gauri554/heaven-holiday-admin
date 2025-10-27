import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Departure Date Add'
};
const DateAddPage = () => {
  return <div>
      <PageTItle title="ADD DEPARTURE DATE" />
      <EditForm />
    </div>;
};
export default DateAddPage;