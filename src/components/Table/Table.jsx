import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import { fetchStateData } from '../../api'

const MyTable = () => {
    // React Hooks
    const [stateData, setStateData] = useState([])

    useEffect(() => {
        const FetchAPI = async () => {

            setStateData(await fetchStateData())

        }
        FetchAPI()

    }, [])

    /* in built styling of material UI*/
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    const useStyles = makeStyles({
        table: {
            minWidth: 100,
        },
    });
    /*end of inbuilt styling of material UI*/




    
    const dataa = stateData.data
    const classes = useStyles();

    return (

        <div style={{marginTop:"100px"}}>
            <TableContainer component={Paper}>
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width='100'>States</StyledTableCell>
                            <StyledTableCell align="left" width='50'>Confirmed</StyledTableCell>
                            <StyledTableCell align="left" width='50'>Active</StyledTableCell>

                            <StyledTableCell align="left" width='50'>Rcvrd</StyledTableCell>
                            <StyledTableCell align="left" width='50'>Deaths</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataa && dataa.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.provinceState}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.confirmed}</StyledTableCell>
                                <StyledTableCell align="left">{row.active}</StyledTableCell>
                                <StyledTableCell align="left">{row.recovered}</StyledTableCell>
                                <StyledTableCell align="left">{row.deaths}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
export default MyTable;