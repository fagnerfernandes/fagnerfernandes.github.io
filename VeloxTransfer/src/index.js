import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import _Home from './pages/_Home';
import _SendMoney from './pages/_SendMoney';
import _HowItWorks from './pages/_HowItWorks';
import _MyPayments from './pages/_MyPayments';
import _NewRecipient from './pages/_NewRecipient';
import _MyRecipients from './pages/_MyRecipients';
import _MyProfile from './pages/_MyProfile';
import _Privacy from './pages/_Privacy';
import _Customer from './pages/_Customer';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={_Home} />
        <Route path="/send-money" component={_SendMoney} />
        <Route path="/how-it-works" component={_HowItWorks} />
        <Route path="/my-payments" component={_MyPayments} />
        <Route path="/new-recipient" component={_NewRecipient} />
        <Route path="/my-recipients" component={_MyRecipients} />
        <Route path="/my-profile" component={_MyProfile} />
        <Route path="/privacy" component={_Privacy} />
        <Route path="/customer" component={_Customer} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
