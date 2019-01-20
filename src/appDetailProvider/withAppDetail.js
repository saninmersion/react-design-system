import React from "react";
import { AppDetailConsumer } from "appDetailProvider/appDetailProvider";

const withAppDetail = WrappedComponent => {
  const WithHOC = props => {
    return (
      <AppDetailConsumer>
        {({ appDetail }) => (
          <WrappedComponent {...props} appDetail={appDetail} />
        )}
      </AppDetailConsumer>
    );
  };
  WithHOC.WrappedComponent = WrappedComponent;

  return WithHOC;
};

export default withAppDetail;
