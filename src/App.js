import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Layout from './components/layout/layout'
import DailyAuction from './components/tender/dailyAuction'
import DummyNumberEntry from './components/tender/dummyNumberEntry'
import TopRateEntry from './components/tender/topRateEntry'
import DailyAuctionView from './components/tender/dailyAuctionView'
import SampleReport from './components/tender/sampleReport'
import Theme from './components/layout/theme'
import { StateProvider } from './store/store'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <StateProvider>
          <ThemeProvider theme={Theme}>
            <Layout>
              <Switch>
                <Route path="/toprate" component={TopRateEntry} />
                <Route path="/dummynumber" component={DummyNumberEntry} />
                <Route path="/dailyauctionview" component={DailyAuctionView} />
                <Route path="/samplereport" component={SampleReport} />
                <Route path="/dailyauction" component={DailyAuction} />
                <Route path="/" exact component={DailyAuction} />
              </Switch>
            </Layout>
          </ThemeProvider>
        </StateProvider>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
