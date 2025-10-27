import Image from "next/image";
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "react-bootstrap";
import package1 from "@/assets/images/products/package1.jpg";
import IconifyIcon from "@/components/wrappers/IconifyIcon";


const galleryData = [
  { id: 1, src: package1, uploadedOn: "2025-10-10" },
  { id: 2, src: package1, uploadedOn: "2025-10-12" },
  { id: 3, src: package1, uploadedOn: "2025-10-14" },
  { id: 4, src: package1, uploadedOn: "2025-10-16" },
];

export default function GalleryList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">Gallery List</CardTitle>
      </CardHeader>

      <CardBody>
        <Row className="g-4">
          {galleryData.map((image) => (
            <Col key={image.id} lg={3} md={4} sm={6}>
              <div className="border rounded shadow-sm overflow-hidden position-relative bg-light">
              
                <button
                  type="button"
                  className="position-absolute top-0 end-0 m-2 rounded-circle border-0"
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    zIndex: 5,
                  }}
                  title="Delete Image"
                >
                  <IconifyIcon
                    icon="solar:trash-bin-minimalistic-2-broken"
                    width={16}
                    height={16}
                  />
                </button>

            
                <div className="ratio ratio-1x1">
                  <Image
                    src={image.src}
                    alt="Gallery"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

            
                <div className="p-2 text-center">
                  <small className="text-muted">
                    Uploaded: {image.uploadedOn}
                  </small>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
}
