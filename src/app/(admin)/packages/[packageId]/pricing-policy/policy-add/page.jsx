import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Policy Terms Add'
};
const PolicyAddPage = () => {
  return <div>
      <PageTItle title="ADD POLICY TERMS" />
      <EditForm />
    </div>;
};
export default PolicyAddPage;