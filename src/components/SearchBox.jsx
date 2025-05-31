import React from 'react';
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { fetchPlaces } from "../features/places/placesThunk";
import { SearchOutlined } from '@ant-design/icons';
import './SearchBox.css';

export default function SearchBox() {
    const dispatch = useDispatch();

    const onSearch = (value) => {
        if (value.trim()) {
            dispatch(fetchPlaces(value));
        }
    };

    return(
         <div className='search-container'>
            <Input.Search
                placeholder="Search for a place..."
                onSearch={onSearch}
                enterButton={<SearchOutlined />}
                size="large"
                allowClear
            />
        </div>
    );
}