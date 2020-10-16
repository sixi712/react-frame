import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PHome, PAbout, P404 } from "@Pages";
interface IRouteList {
  [propName: string]: {
    comp: React.ReactNode;
    path: string;
    exact?: true;
  };
}

// 数量少可以这么操作，有大量路由的时候要把下面这块拆分了
const routeType: IRouteList = {
  HOME: {
    comp: <PHome></PHome>,
    path: "/",
    exact: true
  },
  ABOUT: {
    comp: <PAbout></PAbout>,
    path: "/about"
  },
  "404": {
    comp: <P404></P404>,
    path: "*"
  }
};

// 这个地方，依赖routeList的顺序，不采用Object.keys(routeType)
const routeList = ["HOME", "ABOUT", "404"];

export default (props: { children: React.ReactNode }) => {
  return (
    <Router>
      {props.children}
      <Switch>
        {routeList.map(item => {
          const { path, comp, exact } = routeType[item];
          return (
            <Route exact={exact || false} path={path} key={path}>
              {comp}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};
