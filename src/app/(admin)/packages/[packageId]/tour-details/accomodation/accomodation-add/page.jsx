import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Accomodation Add'
};
const AccomodationAddPage = () => {
  return <div>
      <PageTItle title="ADD ACCOMODATION" />
      <EditForm />
    </div>;
};
export default AccomodationAddPage;