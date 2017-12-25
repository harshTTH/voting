var React = require('react');
var Reactdom = require('react-dom');
var App = require('./components/App.js');
import { AppContainer } from 'react-hot-loader'

const render = Component => {
    Reactdom.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./components/App', () => {
      const newApp = require('./components/App');
      render(newApp)
     })
}