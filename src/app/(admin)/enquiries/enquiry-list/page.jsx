import PageTItle from '@/components/PageTItle';
import EnquiryData from './components/EnquiryData';
import EnquiryList from './components/EnquiryList';
export const metadata = {
  title: 'Enquiries List'
};
const EnquiryPage = () => {
  return <>
      <PageTItle title="ENQUIRIES LIST" />
      <EnquiryData />
      <EnquiryList />
    </>;
};
export default EnquiryPage;