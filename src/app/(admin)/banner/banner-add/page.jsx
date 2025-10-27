import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Banner Add'
};
const BannerAddPage = () => {
  return <div>
      <PageTItle title="BANNER ADD" />
      <EditForm />
    </div>;
};
export default BannerAddPage;