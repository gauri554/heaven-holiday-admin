import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const GeneralSettings = () => {
  return <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'} className="d-flex align-items-center gap-1">
              <IconifyIcon icon="solar:settings-bold-duotone" className="text-primary fs-20" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="meta-name" className="form-label">
                       Title
                    </label>
                    <input type="text" id="meta-name" className="form-control" placeholder="Title" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="meta-title" className="form-label">
                      Meta Title
                    </label>
                    <input type="text" id="meta-title" className="form-control" placeholder="Enter meta title" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
                 <form>
                  <div className="mb-3">
                    <label htmlFor="meta-keyword" className="form-label">
                      Meta Keyword
                    </label>
                    <input type="text" id="meta-keyword" className="form-control" placeholder="Enter meta keyword" />
                  </div>
                </form>
              </Col>
              <Col lg={6}>
           <form>
  <div className="mb-1">
    <label htmlFor="site-logo" className="form-label">
      Upload Website Logo
    </label>
    <input
      type="file"
      id="site-logo"
      className="form-control"
      accept="image/*"
    />
    <div className="form-text">
      Supported formats: JPG, PNG, SVG (Recommended size: 200×60px)
    </div>
  </div>

  {/* Optional Preview */}
 
</form>

              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="description" className="form-label">
                   Meta Description
                  </label>
                  <textarea className="form-control bg-light-subtle" id="description" rows={4} placeholder="Type description" defaultValue={''} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default GeneralSettings;