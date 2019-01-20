import React, { Component } from "react";
const AppDetailContext = React.createContext();

const appDetail = {
  title: "React Design System",
  description: "Learning react is pretty awesome"
};

export class AppDetailProvider extends Component {
  render() {
    const { children } = this.props;

    return (
      <AppDetailContext.Provider value={{ appDetail }}>
        {children}
      </AppDetailContext.Provider>
    );
  }
}

export const AppDetailConsumer = AppDetailContext.Consumer;
