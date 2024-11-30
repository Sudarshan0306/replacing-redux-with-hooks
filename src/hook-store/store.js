import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    if (shouldListen) {
      return () => {
        listeners = listeners.filter((li) => li !== setState);
      };
    }
  }, [setState]);
  return [globalState, dispatch];
};

export const initStore = (userActions, initalState) => {
  if (initalState) {
    globalState = { ...globalState, ...initalState };
  }
  actions = { ...actions, ...userActions };
};
