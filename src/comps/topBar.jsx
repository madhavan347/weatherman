import { handleSearchNameReq, handleFinalSearch } from './apiBed.jsx'
const TopBar = ({ changeData, classDetails }) => {
    const handleSearchInput = async (q) => {
        //need to add autocompletion feature here
        const result = await handleSearchNameReq(q.target.value, 5);
    }
    const handleSearching = async (qd) => {
        qd.preventDefault();
        const queryCity = await handleSearchNameReq(qd.target.q.value);
        if (queryCity == null) {
            qd.target.q.classList.add('is-invalid')
        } else {
            qd.target.q.classList.remove('is-invalid')
            const result = await handleFinalSearch(queryCity[0]['lat'], queryCity[0]['lon']);
            changeData(result);
        }
    }
    return (
        <div className={`left-top-box mt-3 ${classDetails}`}>

            <div className="row p-3 mx-lg-5 top-bar">
                <div className="col-lg-8 m-auto text-lg-start text-center">
                    <h3>
                        <span className="text-body-secondary">Weather</span>Man
                    </h3>
                </div>
                <div className="col-lg-3 m-auto">
                    <form onSubmit={data => handleSearching(data)}>
                        <div className="input-group has-validation">
                            <input type="text" className="form-control bg-light border-light" id="validationServerUsername" onChange={e => handleSearchInput(e)} name='q' required />
                            <span className="input-group-text border-light" id="inputGroupPrepend3">🔍</span>

                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                Please enter a valid city
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className="col-1 m-auto p-auto ">
                    <button className="btn btn-white border border-light border-2 rounded-circle">
                        🔔
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default TopBar;