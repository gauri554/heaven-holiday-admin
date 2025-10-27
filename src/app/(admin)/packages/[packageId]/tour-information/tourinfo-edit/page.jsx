import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: ' Tour Information Edit'
};
const TourInfoEditPage = () => {
  return <div>
      <PageTItle title="EDIT TOUR INFORMATION" />
      <EditForm />
    </div>;
};
export default TourInfoEditPage;