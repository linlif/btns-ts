import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import './styles/index.scss'; // 引入样式

function App() {
  return (
    <div className="App">
      <h1>Button</h1>
      <h2>不同类型的按钮</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Button btnType="default">default</Button>
        <Button btnType="primary">primary</Button>
        <Button btnType="danger">danger</Button>
        <Button btnType="dash">dash</Button>
        <Button btnType="link">link</Button>
      </div>
    </div>
  );
}

export default App;
