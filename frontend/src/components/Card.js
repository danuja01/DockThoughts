import { FiHeart } from 'react-icons/fi';

const Card = ({ thought }) => {
  return (
    <div className='card'>
      <div>
        <p className='text'>{thought.text}</p>
        <p className='author'>{thought.author}</p>
      </div>
      <div>
        <button className='delete'>X</button>
      </div>
      <div>
        <button className='heart'>
          <span style={{ fontSize: '9px', marginRight: '5px' }}>21</span>
          <FiHeart />
        </button>
      </div>
    </div>
  );
};

export default Card;
