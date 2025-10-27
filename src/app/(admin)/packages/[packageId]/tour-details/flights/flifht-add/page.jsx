import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Flight Add'
};
const FlightAddPage = () => {
  return <div>
      <PageTItle title="ADD FLIGHT" />
      <EditForm />
    </div>;
};
export default FlightAddPage;