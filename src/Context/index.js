import React, { createContext, useState, useReducer, useEffect } from "react";

import { api } from "../Api";

import { reduce, initialState } from "../Reducer";

export const NexaasContext = createContext({});

const NexaasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  useEffect(() => {
    dispatch({
      type: "allUsers",
      payload: api[0].customers,
    });
  }, []);

  const [visible, setVisible] = useState(false);
  return (
    <NexaasContext.Provider value={{ visible, state, setVisible, dispatch }}>
      {children}
    </NexaasContext.Provider>
  );
};

export default NexaasProvider;
