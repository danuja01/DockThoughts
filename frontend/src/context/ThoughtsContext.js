import { createContext, useReducer } from 'react';

export const ThoughtsContext = createContext();

export const thoughtsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THOUGHTS':
      return {
        thoughts: action.payload,
      };
    case 'ADD_THOUGHT':
      return {
        thoughts: [action.payload, ...state.thoughts],
      };
    case 'DELETE_THOUGHT':
      return {
        thoughts: state.thoughts.filter((t) => t._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const ThoughtsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(thoughtsReducer, {
    thoughts: [],
  });

  return (
    <ThoughtsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThoughtsContext.Provider>
  );
};
