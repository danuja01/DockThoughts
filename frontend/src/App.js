import { useEffect } from 'react';

import axios from 'axios';

import Card from './components/Card';
import From from './components/Form';
import Navbar from './components/Navebar';
import useThoughtsContext from './hooks/useThoughtsContext';

function App() {
  const { thoughts, dispatch } = useThoughtsContext();

  useEffect(() => {
    const fetchThoughts = async () => {
      const res = await axios.get('http://localhost:4000/api/thoughts');

      if (res.data) {
        dispatch({
          type: 'SET_THOUGHTS',
          payload: res.data,
        });
      }
    };

    fetchThoughts();
  }, [dispatch]);

  return (
    <div className='App'>
      <Navbar />
      <From />
      <section id='cardStack'>
        <div id='card'>
          {thoughts.map((thought) => (
            <Card key={thought._id} thought={thought} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
