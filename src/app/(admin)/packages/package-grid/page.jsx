import IconifyIcon from '@/components/wrappers/IconifyIcon';
import CategoryMenu from './components/CategoryMenu';
import PackageHead from './components/PackageHead';
import Package from './components/Package';
import { Card, CardHeader, Col, Row } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import Link from 'next/link';
export const metadata = {
  title: 'Package Grid'
};
const PackageGridPage = () => {
  return <>
      <PageTItle title="PACKAGE GRID" />
      <Row>
        <Col lg={3}>
          <Card className="bg-light-subtle">
            <CardHeader className="border-0">
              <div className="search-bar me-3 mb-1">
                <span>
                  <IconifyIcon icon="bx-search-alt" />
                </span>
                <input type="search" className="form-control" id="search" placeholder="Search ..." />
              </div>
            </CardHeader>
          </Card>
          <CategoryMenu />
        </Col>
        <Col lg={9}>
          <PackageHead />
          <Package />
          <div className="py-3 border-top">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end mb-0">
                <li className="page-item">
                  <Link className="page-link" href="">
                    Previous
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" href="">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Col>
      </Row>
    </>;
};
export default PackageGridPage;