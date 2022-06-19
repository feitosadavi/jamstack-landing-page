import React from 'react';
import { ThemeUIJSX } from 'theme-ui/core'
import { FaStar } from 'react-icons/fa';

interface Props {
  rating: number
}

const Rating = ({ rating }: Props) => {
  const totalRating: ThemeUIJSX.Element[] = []

  for (let i = 0; i < 5; i++) {
    const className = i < rating ? 'star' : 'star-o'
    const li = (
      <li key={i} className={className}>
        <FaStar />
      </li>
    )
    totalRating.push(li)
  }

  return (
    <div className='rating'>
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
