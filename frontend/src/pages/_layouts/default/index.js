import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayouts({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayouts.propTypes = {
  children: PropTypes.element.isRequired,
};
