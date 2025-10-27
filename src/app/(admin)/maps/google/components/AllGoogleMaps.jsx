'use client';

import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import UIExamplesList from '@/components/UIExamplesList';
import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const centerMumbai = { lat: 21.569874, lng: 71.5893798 };
const centerNY = { lat: 40.7295174, lng: -73.9986496 };
const polylinePath = [
  { lat: 37.789411, lng: -122.422116 },
  { lat: 37.785757, lng: -122.421333 },
  { lat: 37.789352, lng: -122.415346 },
];

const BasicMap = () => (
  <ComponentContainerCard id="basic_google_map" title="Basic Example" description={
    <>
      Give textual form controls like <code>&lt;input&gt;</code> and <code>&lt;textarea&gt;</code> an upgrade with custom styles, sizing, focus states, and more.
    </>
  }>
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={centerMumbai} zoom={14}></GoogleMap>
    </LoadScript>
  </ComponentContainerCard>
);

const MapWithMarkers = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <ComponentContainerCard id="google_map" title="Markers Google Map" description="Map with clickable markers and info windows.">
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={centerMumbai} zoom={18}>
          <Marker position={centerMumbai} onClick={() => setSelectedPlace(centerMumbai)} />
          <Marker position={{ lat: 21.56969, lng: 71.5893798 }} onClick={() => setSelectedPlace({ lat: 21.56969, lng: 71.5893798, name: 'Current location' })} />
          {selectedPlace && (
            <InfoWindow position={selectedPlace} onCloseClick={() => setSelectedPlace(null)}>
              <div>{selectedPlace.name || 'Marker clicked!'}</div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </ComponentContainerCard>
  );
};

const StreetViewMap = () => (
  <ComponentContainerCard id="street_view" title="Street View Panoramas Google Map">
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={centerNY} zoom={14}></GoogleMap>
    </LoadScript>
  </ComponentContainerCard>
);

const PolyLineMap = () => (
  <ComponentContainerCard id="poly_line" title="PolyLine Google Map">
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={polylinePath[0]} zoom={14}>
        <Polyline path={polylinePath} options={{ strokeColor: '#0000FF', strokeWeight: 2 }} />
      </GoogleMap>
    </LoadScript>
  </ComponentContainerCard>
);

// You can similarly add LightStyledMap and DarkStyledMap if needed

const AllGoogleMaps = () => (
  <Row>
    <Col xl={9}>
      <BasicMap />
      <MapWithMarkers />
      <StreetViewMap />
      <PolyLineMap />
    </Col>
    <Col xl={3}>
      <UIExamplesList examples={[
        { link: '#basic_google_map', label: 'Basic' },
        { link: '#google_map', label: 'Markers Google Map' },
        { link: '#street_view', label: 'Street View Panoramas' },
        { link: '#poly_line', label: 'PolyLine Google Map' },
      ]}/>
    </Col>
  </Row>
);

export default AllGoogleMaps;
