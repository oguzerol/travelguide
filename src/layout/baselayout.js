import React from 'react';
import Header from '../components/header/index';
import Content from '../routes';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}