import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import budega92 from "../../public/images/budega-v1.svg";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -2.432806349504045,
  lng: -54.720066169194325,
};

const markerPosition = {
  lat: -2.432806349504045,
  lng: -54.720066169194325,
};

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(markerPosition);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    setInfoWindowOpen(true);
  };

  const handleCloseClick = () => {
    setInfoWindowOpen(false);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={markerPosition}
        icon={{
          url: budega92.src,
          scaledSize: new google.maps.Size(70, 70),
        }}
        onClick={handleMarkerClick}
      />
      {infoWindowOpen && (
        <InfoWindow position={markerPosition} onCloseClick={handleCloseClick}>
          <div>
            <h1>Budega 92</h1>
            <p>
              O Bar Budega 92 é um destino exclusivo para apreciadores de
              bebidas, oferecendo uma experiência única centrada em uma
              variedade exuberante de coquetéis, destilados e cervejas
              artesanais.
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);
