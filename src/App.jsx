import './App.css'
import TopBar from './comps/topBar';
import RightBox from './comps/rightBox';
import LeftBox from './comps/leftBox';
import { useState } from 'react';

import one from "../scOne.json";

const App = () => {
  const [dta, setDta] = useState(one.wapi);
  // console.log(dta);`

  return (
    <>
      <div className="row">

        <div className="col-9 left-box" style={{ paddingRight: "0px" }}>
          <TopBar changeData={(dd) => setDta(dd)} />
          <div className="left-bottom-box">
            <LeftBox wthrData={dta} />

          </div>
        </div>
        <div className="col-3 right-box">
          <RightBox wthrData={dta} />
        </div>
      </div>
    </>
  )
}

export default App;