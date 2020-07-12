import React from "react";

export function withLayout(Layout) {
  return function applyLayout(Component) {
    return (props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
}
