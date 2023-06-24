import { creds_owm, creds_wa } from "../creds";

const appid = creds_owm();
const appid_wa = creds_wa();

export const handleSearchNameReq = async (city, limit = 1) => {
    if (city == false) {
        return
    }
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${appid}`
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        if (data.length) {
            // console.log(data.length);

            return data.map((d) => {
                return { name: d.name, state: d.state, country: d.country, lat: d.lat, lon: d.lon }
            });
        }
        throw new Error('City not FOUND');
    } catch (err) {
        // console.log(err);
        // console.error();
        return err.message;
    }
}

export const handleFinalSearch = async (lat, lon) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${appid_wa}&q=${lat},${lon}&days=4&aqi=yes&alerts=no`
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data)
        return data;
    } catch (err) {
        return err.message;
    }
}
