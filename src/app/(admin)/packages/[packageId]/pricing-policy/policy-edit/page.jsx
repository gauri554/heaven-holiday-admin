import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Policy Terms Edit'
};
const PolicyEditPage = () => {
  return <div>
      <PageTItle title="EDIT POLICY TERMS" />
      <EditForm />
    </div>;
};
export default PolicyEditPage;