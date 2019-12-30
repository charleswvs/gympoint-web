import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import Students from '../pages/Students';
import AddStudent from '../pages/Students/Add';
import EditStudent from '../pages/Students/Edit';

import Registrations from '../pages/Registrations';
import HelpOrders from '../pages/HelpOrders';
import Plans from '../pages/Plans';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/add" component={AddStudent} isPrivate />
      <Route path="/students/edit" component={EditStudent} isPrivate />

      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
