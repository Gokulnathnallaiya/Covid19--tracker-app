import React from "react";
import { Cards, Chart, Table, NavBar ,Footer} from "./components"
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



        this.setState({ data: fetchedData.data })
        this.setState({ indiaData: fetchedIndiaData.data.confirmed.value })



    }
    render() {
        const { data } = this.state

        return (
            <div>
                <div>
                    <NavBar />

                </div>
                <div className={styles.container}>

                    <div className={styles.container1}>

                        <Cards data={data} indiaconfirmed={this.state.indiaData} />
                        <Chart />
                    </div>
                    <div className={styles.container2}>
                        <Table />
                        
                        
                    </div>
                    

                </div>
                <div>
                    <Footer />

                </div>
            </div>


        )

    }
}

export default App;