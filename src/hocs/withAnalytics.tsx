import React, { Component } from 'react';
import { loadGetInitialProps, DocumentContext, DocumentInitialProps } from 'next/dist/next-server/lib/utils';
import ReactGA from 'react-ga';

const withAnalytics = () => (Composed: React.FC) => (
  class extends Component {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      return await loadGetInitialProps(Composed, ctx)
    }

    componentDidMount() {
      ReactGA.initialize('UA-175238304-1');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />
    }
  }
)

export default withAnalytics