import  { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <AiFillHeart
      onClick={handleClick}
      style={{ color: liked ? 'red' : 'gray', cursor: 'pointer' }}
      size={24}
    />
  );
};

export default LikeButton;
