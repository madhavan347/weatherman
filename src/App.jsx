import './App.css'
import TopBar from './comps/topBar';
import RightBox from './comps/rightBox';
import LeftBox from './comps/leftBox';
import { useState } from 'react';

import WelcomeBox from "./comps/welcomeBox";

const App = () => {
  const [dta, setDta] = useState(null);
  // console.log(dta);`

  return (
    <>
      {dta ?
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
        :
        <WelcomeBox changeData={(dd) => setDta(dd)} />
      }
    </>
  )
}

export default App;