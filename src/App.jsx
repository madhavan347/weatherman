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
        <div className="row bg-md-cm-light">
          <TopBar changeData={(dd) => setDta(dd)} classDetails="bg-white d-block d-lg-none" />

          <div className="col-lg-9 left-box bg-white order-lg-first order-last" style={{ paddingRight: "0px" }}>
            <TopBar changeData={(dd) => setDta(dd)} classDetails="d-none d-lg-block" />
            <div className="left-bottom-box">
              <LeftBox wthrData={dta} />
            </div>
          </div>

          <div className="col-lg-3 right-box bg-light">
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