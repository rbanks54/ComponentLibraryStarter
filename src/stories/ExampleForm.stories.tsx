import React from 'react';
			
import {TextBox} from '../components/TextBox';

export default {
  title: 'Example/Form',
};

export const Sample = () => (
  <div>
    <TextBox label="Username"/>
    <TextBox label="Password" password/>
  </div>
);
