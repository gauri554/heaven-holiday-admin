import PageTItle from '@/components/PageTItle';
import EditForm from './components/EditForm';
export const metadata = {
  title: 'Gallery Image Add'
};
const GalleryimgAddPage = () => {
  return <div>
      <PageTItle title=" GALLERY IMAGE ADD" />
      <EditForm />
    </div>;
};
export default GalleryimgAddPage;