import './App.css'
import TopBar from './comps/topBar';
import RightBox from './comps/rightBox';


const App = () => {

  return (
    <>
      <div className="row">

        <div className="col-9 left-box">
          <TopBar />
          <div className="left-bottom-box">
            <div className=" border border-danger-subtle rounded">

            </div>

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