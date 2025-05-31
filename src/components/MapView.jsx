import React from 'react';
import { useSelector } from 'react-redux';
import { Spin, Card, Empty } from 'antd';
import './MapView.css';

export default function MapView() {
    const { results, loading } = useSelector((state) => state.places);

    return (
        <div className="map-view-container">
            <h3 className="map-view-title">Results:</h3>

            {loading ? (
                <div className="map-view-loading">
                <Spin tip="Searching..." size="large" />
                </div>
            ) : results.length === 0 ? (
                <Empty description="No results found" />
            ) : (
                <div className="map-view-list">
                {results.map((place, idx) => (
                    <Card key={idx} className="map-view-card">
                    <h4>{place.description}</h4>
                    <p>
                        <strong>Latitude:</strong> {place.lat}<br />
                        <strong>Longitude:</strong> {place.lng}
                    </p>
                    </Card>
                ))}
                </div>
            )}
        </div>
  );
}