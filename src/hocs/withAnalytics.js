import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import ReactGA from 'react-ga';

const withAnalytics = () => Composed => 
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx)
    }

    componentDidMount() {
      ReactGA.initialize('UA-175238304-1');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />
    }
  }

  export default withAnalytics