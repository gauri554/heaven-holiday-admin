import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Tour Information Add'
};
const TourInfoAddPage = () => {
  return <div>
      <PageTItle title="ADD TOUR INFORMATION" />
      <EditForm />
    </div>;
};
export default TourInfoAddPage;