import { useState } from 'react';
import useThoughtsContext from '../hooks/useThoughtsContext';
import axios from 'axios';

const From = () => {
  const { dispatch } = useThoughtsContext();

  const [thought, setThought] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newThought = {
      text: thought,
      author: author,
    };

    if (!thought || !author) {
      alert('Please fill all the fields');
      return;
    } else {
      setIsSubmitting(true);

      const response = await axios.post(
        'http://localhost:4000/api/thoughts',
        newThought,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data) {
        setIsSubmitting(false);

        dispatch({ type: 'ADD_THOUGHT', payload: response.data });
        setThought('');
        setAuthor('');
      } else {
        setIsSubmitting(false);
        alert('Something went wrong');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method='POST'>
        <textarea
          id='text'
          name='text'
          placeholder='What are your thoughts?'
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
        <input
          type='text'
          id='author'
          name='author'
          placeholder='Name? (Eg : DarkLoad)'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {isSubmitting && (
          <button className='submit' disabled={true}>
            Loading...
          </button>
        )}

        {!isSubmitting && <button className='submit'>ADD</button>}
      </form>
    </div>
  );
};

export default From;
