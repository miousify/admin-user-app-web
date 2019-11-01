import React from 'react';
import ReactDOM from 'react-dom';

import {Grid} from "@material-ui/core";

import App from './App';


it('renders without crashing', () => {
  let a= (

      <Grid >

      </Grid>
  );
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
