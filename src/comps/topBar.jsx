import { handleSearchNameReq, handleFinalSearch } from './apiBed.jsx'
const TopBar = ({ changeData }) => {
    const handleSearchInput = async (q) => {
        //need to add auto completion feature
        // setIsQ(q);
        const result = await handleSearchNameReq(q.target.value, 5);
        // console.log(result);
    }
    const handleSearching = async (qd) => {
        qd.preventDefault();
        const queryCity = await handleSearchNameReq(qd.target.q.value);
        const result = await handleFinalSearch(queryCity[0]['lat'], queryCity[0]['lon']);
        // console.log(result);
        changeData(result);
    }
    return (
        <div className="left-top-box">

            <div className="row p-3 mx-4 top-bar">
                <div className="col-8 m-auto">
                    <div className='input-group'>
                        <img src="https://ouch-cdn2.icons8.com/2Cuo9HYTII6I8gBSie5nqQ9BiFH5zb7ffyWAu94ldAc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDA3/LzY2YWY1NTEyLWEy/NDctNDlmZS1hODli/LTg4MDdkNTg3N2Nj/Yi5wbmc.png" alt="" className='rounded-circle border img-thumbnail m-2' width="50px" />
                        <h3>
                            Hello,<br />
                            <small className="text-body-secondary">Charmer</small>
                        </h3>
                    </div>
                </div>
                <div className="col-3 m-auto">
                    <form onSubmit={data => handleSearching(data)}>
                        <div className="input-group">
                            <input className='form-control bg-light border-light' type="search" name="q" id="queryBar" onChange={e => handleSearchInput(e)} />
                            <span className="input-group-text border-light" id="basic-addon1">🔍</span>
                        </div>
                        {/* <button className='btn btn-outline-dark' type="submit">Search</button> */}
                    </form>
                </div>
                <div className="col-1 m-auto p-auto ">
                    <button className="btn btn-white border border-light border-2 rounded-circle">
                        🔔
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopBar;