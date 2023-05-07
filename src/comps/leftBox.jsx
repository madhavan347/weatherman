import sunBg from "../assets/weather-images/sun-sky.jpg"
import windBg from "../assets/weather-images/wind-img2.jpg"
import sceneBg from "../assets/weather-images/some-scene.jpg"
import { LineChart, Line, ResponsiveContainer, LabelList, XAxis, CartesianGrid, CartesianAxis } from "recharts";

const dBlue = "#102038";
const data = [
    {
        name: "20°",
        uv: 20,
        timing: "Morning"
    },
    {
        name: "34°",
        uv: 34,
        timing: "Afternoon"
    },
    {
        name: "28°",
        uv: 28,
        timing: "Evening"
    },
    {
        name: "22°",
        uv: 22,
        timing: "Night"
    },
]
const renderLineChart = (
    <ResponsiveContainer width={750} height={200}>
        <LineChart data={data}
            margin={{ top: 60, right: 30, left: 40, bottom: 5 }}>
            <CartesianAxis />
            <XAxis dataKey={"timing"} axisLine={false} tickLine={false} />

            <Line type="natural" dataKey="uv" stroke="#ffa500" strokeWidth={4} dot={{ strokeWidth: 2, fill: "orange" }}>
                <LabelList dataKey={"name"} position={"top"} offset={45} stroke={dBlue} className="h4" fill="" />
            </Line>
        </LineChart>
    </ResponsiveContainer>
);

const StatBox = (info) => {
    return (
        <div className="col-3 shadow rounded-4 text-center p-3 mx-auto" style={{ background: `${info.bgcolor}` }}>
            <div className="" style={{ color: `${info.color}` }}>
                {info.title}
                <div className="h4 m-auto fw-medium " style={{ color: `${info.color}` }}>
                    {info.cont}
                </div>
            </div>
        </div>
    )
}
const MainStatBox = (content) => {
    return (
        <div className="col-5 card my-5 mx-auto rounded-4 p-auto border-0 shadow" style={{ backgroundImage: `url(${content.bg})`, backgroundSize: "110%" }}>

            <div className='row'>
                <i className={`align-items-middle col-1 my-4 fa-solid ${content.icon}`} style={{ color: "orange" }}></i>
                <div className="h4 col-6">
                    {content.name}<br />
                    <small className="text-body-secondary h6">{content.subname}</small>
                </div>
            </div>

            <div className="display-5 mx-3 my-4">
                {content.reading}
                <p className=" h5 text-body-secondary">{content.readsub}</p>
            </div>
            {content.air ?
                <div className="bg-white rounded-4 row shadow pb-2">
                    <div className="col p-3 mx-1 ">
                        <div className="row pb-2">
                            <span className="col-6 text-start">Good</span>
                            <span className="col-6 text-end">Hazardous</span>
                        </div>

                        <div className="progress" role="progressbar" aria-label="Default Bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: "13px" }}>
                            <div className="progress-bar progress-bar-striped" style={{ background: "orange", width: `21%` }}>
                            </div>
                        </div>

                    </div>
                </div>
                :
                <div className="row">
                    <StatBox title="Pressure" cont="800mb" bgcolor={dBlue} color="white" />
                    <StatBox title="Visibility" cont="4.3km" bgcolor="greenyellow" color={dBlue} />
                    <StatBox title="Humidity" cont="87%" bgcolor="white" />
                </div>
            }
        </div>
    )
}
const LeftBox = () => {
    return (
        <div className="">
            <div className="row m-auto">

                <MainStatBox name="Weather" subname="What's the weather" reading="22°C" readsub="Partly Cloudy" bg={sunBg} icon="fa-cloud-sun fa-xl" />
                <MainStatBox name="Air Quality" subname="Main Pollution: PM2.5" reading="390" readsub="West Wind" bg={windBg} icon="fa-wind fa-xl" air="true" />
            </div>
            <div className="row m-auto">
                <div className="col-7 m-auto rounded-4" style={{ height: "23rem" }}>
                    <div className="row">
                        <div className="col-5 fs-3" style={{ fontWeight: 600 }}>
                            How's the temperature today?
                        </div>
                        <div className="row">
                            <div className="col-md-3 offset-md-11">
                                <button className="btn shadow text-white rounded-3" style={{ background: "orange" }}>
                                    <i class="bi bi-thermometer-sun"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 pt-4">
                        {renderLineChart}
                    </div>
                </div>
                <div className="row col-3 m-auto rounded-4 shadow"
                    style={{
                        height: "23rem", background: "greenyellow", backgroundImage: `url(${sceneBg})`, color: { dBlue }
                    }}>
                    <div className="h6 m-auto">Tomorrow</div>
                    <div className="h3 fw-semibold mt-0">Alam Barzah</div>
                    <div className="h2 m-auto mb-0">20°C</div>
                    <div className="h6 m-auto mt-2">Cloudy</div>
                </div>
            </div>
        </div >
    )
}

export default LeftBox;