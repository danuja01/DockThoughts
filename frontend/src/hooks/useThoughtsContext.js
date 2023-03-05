import { useContext } from 'react';
import { ThoughtsContext } from '../context/ThoughtsContext';

const useThoughtsContext = () => {
  const context = useContext(ThoughtsContext);

  if (!context) {
    throw new Error(
      'useThoughtsContext must be used within a ThoughtsProvider'
    );
  }

  return context;
};

export default useThoughtsContext;
