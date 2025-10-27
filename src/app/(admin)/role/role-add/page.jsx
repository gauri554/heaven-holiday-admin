import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import PageTItle from '@/components/PageTItle';
import Link from 'next/link';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
export const metadata = {
  title: 'Role Add'
};
const RoleAddPage = () => {
  return <>
      <PageTItle title="ROLE ADD" />
  <Row>
  <Col lg={12}>
    <Card>
      <CardHeader>
        <CardTitle as={'h4'}>Roles Information</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          {/* Role Name */}
          <Col lg={6}>
            <form>
              <div className="mb-3">
                <label htmlFor="roles-name" className="form-label">
                  Role Name
                </label>
                <input
                  type="text"
                  id="roles-name"
                  className="form-control"
                  placeholder="Role name"
                  defaultValue="Tour Manager"
                />
              </div>
            </form>
          </Col>

          {/* Assign Permissions */}
          <Col lg={6}>
            <form>
              <div className="mb-3">
                <label htmlFor="permissions" className="form-label">
                  Assign Permissions
                </label>
                <ChoicesFormInput
                  className="form-control"
                  id="permissions"
                  data-choices
                  data-choices-removeitem
                  multiple
                  data-placeholder="Select Permissions"
                >
                  <option value="Manage Tours">Manage Tours</option>
                  <option value="Create Tours">Create Tours</option>
                  <option value="Edit Tours">Edit Tours</option>
                  <option value="View Bookings">View Bookings</option>
                  <option value="Manage Packages">Manage Packages</option>
                  <option value="View Reports">View Reports</option>
                </ChoicesFormInput>
              </div>
            </form>
          </Col>

          {/* Assigned Tours */}
          <Col lg={6}>
            <div className="mb-3">
              <label htmlFor="assigned-tours" className="form-label">
                Assigned Tours
              </label>
              <ChoicesFormInput
                className="form-control"
                id="assigned-tours"
                data-choices
                data-choices-removeitem
                multiple
                data-placeholder="Select Tours"
              >
            <option value="Rajsthan Marwad">Rajsthan Marwad</option>
                <option value="Highlights of Rajsthan">Highlighths of Rajsthan</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="America">America</option>
              </ChoicesFormInput>
            </div>
          </Col>

          {/* Assign Users */}
          <Col lg={6}>
            <div className="mb-3">
              <label htmlFor="user-name" className="form-label">
                Assign User
              </label>
              <input
                type="text"
                id="user-name"
                className="form-control"
                placeholder="Enter user names"
                defaultValue="John Doe"
              />
            </div>
          </Col>

          {/* Role Status */}
          <Col lg={6}>
            <p>Role Status</p>
            <div className="d-flex gap-2 align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roleStatus"
                  id="statusActive"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="statusActive">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="roleStatus"
                  id="statusInactive"
                />
                <label className="form-check-label" htmlFor="statusInactive">
                  Inactive
                </label>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>

      <CardFooter className="border-top">
        <Link href="" className="btn btn-primary">
          Create Role
        </Link>
      </CardFooter>
    </Card>
  </Col>
</Row>

    </>;
};
export default RoleAddPage;