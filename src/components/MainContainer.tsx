import './MainContainer.css';
import { query字頭, 音韻地位 } from "qieyun";
import { zaonhe } from '../scripts/zaonhe_built.js'

import React, { useState } from 'react';
import { IonSearchbar } from "@ionic/react"

interface ContainerProps { }

const MainContainer: React.FC<ContainerProps> = () => {
  const [searchText, setSearchText] = useState('');
  function zaonhesearch(zys: string) {
    let result = '';
    for (var i = 0; i < zys.length; i++) {
      try {
        result += zaonhe(query字頭(zys.charAt(i))[0].音韻地位)
      } catch (error) {
        result += zys.charAt(i)
      }
    }
    return result
  }

  return (
    <div className="container">
      <strong>阿拉講上海閑話</strong>
      <p>在此地？</p>
      <p><a href='search'>asdfas</a> {query字頭('結')[0].解釋}</p>
      
      <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>

      Search Text: {zaonhesearch(searchText) ?? '(none)'}
    </div>
  );
};

export default MainContainer;
