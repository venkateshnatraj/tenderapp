import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/layout'
import DailyAuction from './components/tender/dailyAuction'
import DummyNumberEntry from './components/tender/dummyNumberEntry'
import TopRateEntry from './components/tender/topRateEntry'
import SampleView from './components/tender/sampleView'
import SampleReport from './components/tender/sampleReport'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Layout >
          <Switch>
            <Route path="/toprate" component={TopRateEntry} />
            <Route path="/dummynumber" component={DummyNumberEntry} />
            <Route path="/sampleview" component={SampleView} />
            <Route path="/samplereport" component={ SampleReport } />
            <Route path="/dailyauction" component={ DailyAuction } />
            <Route path="/" exact component={ DailyAuction } />
          </Switch>
        </Layout>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
