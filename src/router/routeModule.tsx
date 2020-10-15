import React from "react";
import { Switch, Route } from "react-router-dom";
import { PHome, PAbout, P404 } from "@Pages";
interface IRouteList {
  [propName: string]: {
    comp: React.ReactNode;
    path: string;
  };
}

type routeParam = Array<"ABOUT" | "HOME" | "404">;

// 数量少可以这么操作，有大量路由的时候要把下面这块拆分了
const routeType: IRouteList = {
  HOME: {
    comp: <PHome></PHome>,
    path: "/"
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

export default (routeList: routeParam) => {
  return (
    <Switch>
      {routeList.map(item => {
        const { path, comp } = routeType[item];
        return (
          <Route path={path} key={path}>
            {comp}
          </Route>
        );
      })}
    </Switch>
  );
};
