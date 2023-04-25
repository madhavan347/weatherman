import './App.css'
import TopBar from './comps/topBar';
import RightBox from './comps/rightBox';
import LeftBox from './comps/leftBox';

const App = () => {

  return (
    <>
      <div className="row">

        <div className="col-9 left-box shadow" style={{ paddingRight: "0px" }}>
          <TopBar />
          <div className="left-bottom-box">
            <LeftBox />

          </div>
        </div>
        <div className="col-3 right-box">
          <RightBox />
        </div>
      </div>
    </>
  )
}

export default App;