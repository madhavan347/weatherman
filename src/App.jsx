import './App.css'
import { useState } from 'react'
import TopBar from './comps/topBar';


const App = () => {
  const [isQ, setIsQ] = useState('');

  return (
    <>
      <div className="row">

        <div className="col-8 left-box">
          <TopBar />
          <div className="left-bottom-box">
            <div className=" border border-danger-subtle rounded">

            </div>

          </div>
        </div>
        <div className="right-box col-4">
          <div className="border border-danger-subtle rounded">

          </div>
        </div>
      </div>
    </>
  )
}

export default App;