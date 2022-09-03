import React, { createContext, useState } from 'react';
import { Parent } from './Parent';

//createContextで、SapmleContextを作成する。
export const SampleContext = createContext();

export const BigParent = () => {
const [sampleContext, setSampleContext] = useState('★★useContextの値です★★');

  return (
    <div>
      <p>useContextのサンプルです</p>
      <SampleContext.Provider value={ [sampleContext, setSampleContext] }>
        <Parent />
      </SampleContext.Provider>
    </div>
  );
}

