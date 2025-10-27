'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap'

// React Quill (text editor) – load dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const HelpCenter = () => {
  const [text, setText] = useState('')

  return (
    <>
      <Row className="justify-content-center mt-4">
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle as="h4" className="mb-3">
                Add Notes or Description
              </CardTitle>
              <ReactQuill theme="snow" value={text} onChange={setText} placeholder="Write something here..." className="bg-white rounded" />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default HelpCenter
