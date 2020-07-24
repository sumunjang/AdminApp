import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminHome from "../Routes/AdminHome";
import RootHome from "../Routes/RootHome";
import Gateway from "../Routes/Gateway";
import Question from '../Routes/Question';
import Register from '../Routes/Register';
import Statistics from '../Routes/Statistics';
import List from '../Routes/List';
const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" exact component={AdminHome} />
      <Route path="/admin/:id/gateway" exact component={Gateway} />
      <Route path="/admin/:id/question" exact component={Question} />
      <Route path="/root" exact component={RootHome} />
      <Route path="/root/list" exact component={List} />
      <Route path="/root/register" exact component={Register} />
      <Route path="/root/statistics" exact component={Statistics} />

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;