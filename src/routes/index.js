import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import Students from '../pages/Students';
import AddStudent from '../pages/Students/Add';
import EditStudent from '../pages/Students/Edit';

import Registrations from '../pages/Registrations';
import AddRegistration from '../pages/Registrations/Add';
import EditRegistration from '../pages/Registrations/Edit';

import Plans from '../pages/Plans';
import AddPlan from '../pages/Plans/Add';
import EditPlan from '../pages/Plans/Edit';

import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/add" component={AddStudent} isPrivate />
      <Route path="/students/:id/edit" component={EditStudent} isPrivate />

      <Route path="/registrations" exact component={Registrations} isPrivate />
      <Route path="/registrations/add" component={AddRegistration} isPrivate />
      <Route
        path="/registrations/:id/edit"
        component={EditRegistration}
        isPrivate
      />

      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/add" component={AddPlan} isPrivate />
      <Route path="/plans/:id/edit" component={EditPlan} isPrivate />

      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
