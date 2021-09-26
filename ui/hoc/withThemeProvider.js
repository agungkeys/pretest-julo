/* eslint-disable react/display-name */
import React from 'react';
import { julo } from '../theme';
import { deepMerge } from '../utils';
import { ThemeProvider } from '@emotion/react'


const withThemeProvider = Component => props => {
  return (
    <ThemeProvider theme={julo}>
      <Component {...props} theme={julo}/>
    </ThemeProvider>
  )
};

export default withThemeProvider;
