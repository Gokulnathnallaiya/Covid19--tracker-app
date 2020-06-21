import React from "react";
import { Cards, Chart, CountryPicker, Table } from "./components"
import styles from './App.module.css';
import { fetchData, fetchIndiaData } from "./api";
class App extends React.Component {
    state = {
        data: {},
        indiaData: null,

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        const fetchedIndiaData = await fetchIndiaData();
        console.log(fetchedData)


        this.setState({ data: fetchedData.data })
        this.setState({ indiaData: fetchedIndiaData.data.confirmed.value })
        console.log(this.state.indiaData)


    }
    render() {
        const { data } = this.state
        const { indiaData } = this.state
        return (
            <div className={styles.container}>
                <div className={styles.container1}>

                    <Cards data={data} indiaconfirmed={this.state.indiaData} />
                    <Chart />

                </div>
                <div className={styles.container1}>

                    <Table/>

                </div>

            </div>


        )

    }
}

export default App;