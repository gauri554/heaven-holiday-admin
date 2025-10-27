'use client'

import ChoicesFormInput from '@/components/form/ChoicesFormInput'
import package1 from '@/assets/images/products/package1.jpg'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Image from 'next/image'
const EditForm = () => {
  const messageSchema = yup.object({})
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(messageSchema),
    defaultValues: {
      title: 'Discover Sikkim',
      subtitle: 'Darjeeling Gangtok Special',
      desktopImage: '/images/banners/sikkim.jpg',
      mobileImage: '/images/banners/sikkim-mobile.jpg',
      linkType: 'category',
      linkTarget: '/india/northeast',
      order: 2,
      status: 'Active',
      name: 'Brand',
      value: 'Dyson , H&M, Nike , GoPro , Huawei , Rolex , Zara , Thenorthface',
      id: 'BR-3922',
    },
  })
  return (
    <Row>
      <Col lg={12}>
        <form onSubmit={handleSubmit(() => {})}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'}>Edit Banner</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput control={control} type="text" name="title" label="Banner Title" placeholder="Enter banner title" />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput control={control} type="text" name="subtitle" label="Subtitle" placeholder="Enter subtitle (optional)" />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Desktop Banner Image</label>

                    <div className="mb-2">
                      <Image
                        src={package1}
                        alt="Desktop Banner"
                        style={{
                          width: '100%',
                          maxWidth: '300px',
                          height: 'auto',
                          borderRadius: '6px',
                          border: '1px solid #ddd',
                        }}
                        width={300}
                        height={200}
                      />
                    </div>

                    <input type="file" name="desktopImage" className="form-control" accept="image/*" />
                    <small className="text-muted">Recommended: 1920x600 px</small>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Mobile Banner Image</label>

                    <div className="mb-2">
                      <Image
                        src={package1}
                        alt="Mobile Banner"
                        width={300}
                        height={200}
                        style={{
                          width: '100%',
                          maxWidth: '250px',
                          height: 'auto',
                          borderRadius: '6px',
                          border: '1px solid #ddd',
                        }}
                      />
                    </div>

                    <input type="file" name="mobileImage" className="form-control" accept="image/*" />
                    <small className="text-muted">Recommended: 768x600px</small>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <label htmlFor="linkType" className="form-label">
                      Link Type
                    </label>
                    <ChoicesFormInput className="form-control" id="linkType" data-choices data-placeholder="Select Link Type" name="linkType">
                      <option value="tour">Tour Package</option>
                      <option value="category">Category</option>
                      <option value="external">External URL</option>
                    </ChoicesFormInput>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput
                      control={control}
                      type="text"
                      name="linkTarget"
                      label="Link Target"
                      placeholder="Enter URL or package/category slug"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <TextFormInput control={control} type="number" name="order" label="Display Order" placeholder="Enter display order (e.g. 1)" />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <ChoicesFormInput className="form-control" id="status" data-choices name="status">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </ChoicesFormInput>
                  </div>
                </Col>
              </Row>
            </CardBody>

            <CardFooter className="border-top text-end">
              <Button type="submit" variant="primary">
                Update Banner
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Col>
    </Row>
  )
}
export default EditForm
