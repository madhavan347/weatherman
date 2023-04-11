import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import handleSearchNameReq, { handleFinalSearch } from './comps/apiBed';

const App = () => {
  const [isQ, setIsQ] = useState('');
  const handleSearchInput = async (q) => {
    //need to add auto completion feature
    // setIsQ(q);
    const result = await handleSearchNameReq(q.target.value, 5);
    console.log(result);
  }
  const handleSearching = async (qd) => {
    qd.preventDefault();
    const queryCity = await handleSearchNameReq(qd.target.q.value);
    const result = await handleFinalSearch(queryCity[0]['lat'], queryCity[0]['lon']);
    console.log(result);


  }
  return (
    <>
      <form onSubmit={data => handleSearching(data)}>
        <input type="search" name="q" id="queryBar" onChange={e => handleSearchInput(e)} />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default App;