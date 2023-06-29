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
        <div className="left-top-box mt-3">

            <div className="row p-3 mx-5 top-bar">
                <div className="col-8 m-auto">
                    <div className='input-group'>
                        <h3>
                            <span className="text-body-secondary">Weather</span>Man
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