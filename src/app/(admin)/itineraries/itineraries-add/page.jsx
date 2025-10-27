import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Itinerary Add'
};
const AttributesAddPage = () => {
  return <div>
      <PageTItle title="ITINERARY ADD" />
      <EditForm />
    </div>;
};
export default AttributesAddPage;