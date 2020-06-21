import React, { useState, useEffect } from "react";
import { fetchIndiaData } from "../../api";
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from "react-countup"
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {


    const [indiaData, setIndiaData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {

            setIndiaData(await fetchIndiaData());


        };
        fetchAPI();

    }, []);

    const indiadata = indiaData.data

    if (!confirmed) {
        return "Loading...";
    }
    var confirmpercent = (indiadata.confirmed.value * 100 / confirmed.value).toFixed(0)
    var recoveredpercent = (indiadata.recovered.value * 100 / recovered.value).toFixed(0)
    var deathpercent = (indiadata.deaths.value * 100 / deaths.value).toFixed(0)



    return (
        <div className={styles.container}>

            <div className={styles.cardlist1}>
                <h2>Global</h2>
                <Grid container spacing={2} justify="center" direction='column'>
                    <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Grid>

                </Grid>

            </div>
            <div className={styles.cardlist2}>
                <h2>India</h2>
                <Grid container spacing={2} justify="center" direction='column'>
                    <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.confirmed.value} duration={2} separator="," /></Typography>
                            <Typography color="primary"><CountUp start={0} end={confirmpercent} duration={4} />%</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.recovered.value} duration={2} separator="," /></Typography>
                            <Typography color="primary"><CountUp start={0} end={recoveredpercent} duration={4} />%</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.deaths.value} duration={2} separator="," /></Typography>
                            <Typography color="primary"><CountUp start={0} end={deathpercent} duration={4} />%</Typography>
                        </CardContent>
                    </Grid>

                </Grid>

            </div>
        </div>

    )
}

export default Cards;