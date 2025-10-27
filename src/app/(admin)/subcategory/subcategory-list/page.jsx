import React from 'react';
import Subcategory from './components/Subcategory';
import SubcategoryList from './components/SubcategoryList';
import PageTItle from '@/components/PageTItle';
export const metadata = {
  title: 'subcategory List'
};
const subcategoryListPage = () => {
  return <>
      <PageTItle title="SUBCATEGORIES LIST" />
      <Subcategory />
      <SubcategoryList />
    </>;
};
export default subcategoryListPage;