import { handleSearchNameReq, handleFinalSearch } from './apiBed.jsx'
const WelcomeBox = ({ changeData }) => {
    const handleSearchInput = async (q) => {
        //need to add auto completion feature here
        const result = await handleSearchNameReq(q.target.value, 5);
        // console.log(result);
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
        <>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="row text-center vw-100">
                    <br />
                    <div className="col-lg-12">
                        <h1 className='display-3'><span className="text-body-secondary">Weather</span>Man</h1>
                        <br />
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <form onSubmit={data => handleSearching(data)}>
                            <div className="input-group border rounded-5">
                                <input className='form-control bg-light border-light rounded-5 rounded-end' type="search" name="q" id="queryBar" onChange={e => handleSearchInput(e)} />
                                <span className="input-group-text border-light rounded-5 rounded-start" id="basic-addon1">🔍</span>

                            </div>
                            <br />
                        </form>
                    </div>
                    <div className="col-lg-3"></div>

                </div>
            </div>
        </>
    )
}
export default WelcomeBox;