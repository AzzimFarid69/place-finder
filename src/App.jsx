import React from 'react';
import { Layout } from 'antd';
import SearchBox from './components/SearchBox';
import MapView from './components/MapView';
import SearchHistory from './components/SearchHistory';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ color: 'white' }}>Place Finder (Mock + Thunk)</Header>
      <Content style={{ padding: 20 }}>
        <SearchBox />
        <MapView />
        <SearchHistory />
      </Content>
    </Layout>
  );
}

export default App;
