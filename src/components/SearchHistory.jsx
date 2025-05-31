import React from 'react';
import { useSelector } from "react-redux";
import { Card, Empty } from "antd";
import './SearchHistory.css';

export default function SearchHistory() {
    const { history } = useSelector((state) => state.places);

    return (
        <div className="search-history-container">
            <h3 className="search-history-title">Search History:</h3>
            {history.length === 0 ? (
                <Empty description="No previous searches" />
            ) : (
                <ul className="search-history-list">
                    {history.map((place, idx) => (
                        <Card key={idx} className="search-history-card">
                            {place.description}
                        </Card>
                    ))}
                </ul>
            )}
        </div>
    );
}
