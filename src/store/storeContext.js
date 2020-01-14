import React from 'react';

const storeContext = React.createContext(null);

const Provider = (props) => (
  <storeContext.Provider value={props.store}>
    {props.children}
  </storeContext.Provider>
);

export { storeContext, Provider };
