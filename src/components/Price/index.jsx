import React, {Fragment} from 'react';

const THOUSAND = 1000;
const MILLION = 1000000;

function formatPrice(price) {
  if (price > MILLION) {
    return `${(price / MILLION)}M USD`
  } else if (price > THOUSAND) {
    return `${(price / THOUSAND)}K USD`
  } else {
    return `${price} USD`
  }
}

export default ({children}) => {
  return <Fragment>
    {formatPrice(children)}
  </Fragment>
} 