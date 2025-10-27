'use client';

import { WorldVectorMap } from '@/components/VectorMap';
import ReactApexChart from 'react-apexcharts';
import { pagesList } from '../data';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
const Conversions = () => {
  const chartOptions = {
    chart: {
      height: 292,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '14px',
            color: 'undefined',
            offsetY: 100
          },
          value: {
            offsetY: 55,
            fontSize: '20px',
            color: undefined,
            formatter: function (val) {
              return val + '%';
            }
          }
        },
        track: {
          background: 'rgba(170,184,197, 0.2)',
          margin: 0
        }
      }
    },
    fill: {
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    stroke: {
      dashArray: 4
    },
    colors: ['#ff6c2f', '#22c55e'],
    series: [54.1],
    labels: ['Package Booking'],
    responsive: [{
      breakpoint: 380,
      options: {
        chart: {
          height: 180
        }
      }
    }],
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  };
  const options = {
    map: 'world',
    zoomOnScroll: true,
    zoomButtons: false,
    markersSelectable: true,
    markers: [{
      name: 'India',
      coords: [56.1304, -106.3468]
    }, {
      name: 'USA',
      coords: [-14.235, -51.9253]
    }, {
      name: 'UK',
      coords: [61, 105]
    }, {
      name: 'Australia',
      coords: [35.8617, 104.1954]
    }],
    markerStyle: {
      initial: {
        fill: '#7f56da'
      },
      selected: {
        fill: '#22c55e'
      }
    },
    labels: {
      markers: {
        render: marker => marker.name
      }
    },
    regionStyle: {
      initial: {
        fill: 'rgba(169,183,197, 0.3)',
        fillOpacity: 1
      }
    }
  };
  return <>
      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle as={'h5'}>Conversions</CardTitle>
            <ReactApexChart options={chartOptions} series={chartOptions.series} height={292} type="radialBar" className="apex-charts mb-2 mt-n2" />
            <Row className="text-center">
              <Col xs={6}>
                <p className="text-muted mb-2">This Week</p>
                <h3 className="text-dark mb-3">12.4k</h3>
              </Col>
              <Col xs={6}>
                <p className="text-muted mb-2">Last Week</p>
                <h3 className="text-dark mb-3">10.9k</h3>
              </Col>
            </Row>
            <div className="text-center">
              <button type="button" className="btn btn-light shadow-none w-100">
                View Details
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle as={'h5'}>Bookings by Country</CardTitle>
            <div id="world-map-markers" style={{
            height: 316
          }}>
              <WorldVectorMap height="300px" width="100%" options={options} />
            </div>
            <Row className="text-center">
              <Col xs={6}>
                <p className="text-muted mb-2">This Week</p>
                <h3 className="text-dark mb-3">23.5k</h3>
              </Col>
              <Col xs={6}>
                <p className="text-muted mb-2">Last Week</p>
                <h3 className="text-dark mb-3">41.05k</h3>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className="card-height-100">
          <CardHeader className="d-flex align-items-center justify-content-between gap-2">
            <CardTitle as={'h4'} className="flex-grow-1">
              Top Packages
            </CardTitle>
            <Button variant="soft-primary" size="sm">
              View All
            </Button>
          </CardHeader>
          <div className="table-responsive">
            <table className="table table-hover table-nowrap table-centered m-0">
              <thead className="bg-light bg-opacity-50">
                <tr>
                  <th className="text-muted ps-3">Package Name</th>
                  <th className="text-muted">Bookings</th>
                  <th className="text-muted">Conversion Rate</th>
                </tr>
              </thead>
              <tbody>
                {pagesList.map((item, idx) => <tr key={idx}>
                    <td className="ps-3">
                      <Link href="" className="text-muted">
                        {item.packageName}
                      </Link>
                    </td>
                    <td>{item.views} </td>
                    <td>
                      <span className={`badge badge-soft-${item.variant}`}>{item.rate}%</span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Card>
      </Col>
     
    </>;
};
export default Conversions;