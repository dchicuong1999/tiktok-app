import { Children } from 'react';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
  return Children.only(children);
}

export default GlobalStyles;
