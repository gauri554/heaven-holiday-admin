import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Departure City Add'
};
const CityAddPage = () => {
  return <div>
      <PageTItle title="ADD DEPARTURE CITY" />
      <EditForm />
    </div>;
};
export default CityAddPage;