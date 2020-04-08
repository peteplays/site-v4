import React from 'react';

import { configService } from '../../config/config.service';

import './quotes.scss';

const Quotes = ({ sectionId }: { sectionId: string }) => {
  const allQuotes = configService.quotes;
  // const randomNumber = Math.floor(Math.random() * allQuotes.length - 1) + 1;
  const randomNumber = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[randomNumber];

  return (
    <h2 className='quoteSection fontStyle textCenter sb-color' id={sectionId}>
      <i className='fa fa-angle-double-left' />
      {Object.values(quote)}
      <i className='fa fa-angle-double-right' />
      {Object.keys(quote)}
    </h2>
  )
}

export default Quotes;
