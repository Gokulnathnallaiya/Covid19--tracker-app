import axios from "axios";
const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {

    try {
        const response = await axios.get(url);
        return response;



    } catch (error) {

    }

}
export const fetchDailyData = async () => {

    try {
        const { data } = await axios.get(`${url}/daily`);
        // return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,

        }));
        return modifiedData




    } catch (error) {

    }

}
export const fetchIndiaData = async () => {

    try {
        const response = await axios.get(`${url}/countries/india`);
        return response;



    } catch (error) {

    }

}
export const fetchStateData = async () => {

    try {
        const response = await axios.get(`${url}/countries/india/confirmed`);
        return response;



    } catch (error) {

    }

}