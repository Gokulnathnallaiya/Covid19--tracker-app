import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { fetchStateData } from '../../api'

const MyTable = () => {
    const [stateData, setStateData] = useState([])

    useEffect(() => {
        const FetchAPI = async () => {

            setStateData(await fetchStateData())

        }
        FetchAPI()

    }, [])
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




    console.log(stateData.data)
    const dataa = stateData.data
    const classes = useStyles();

    return (

        <div style={{margin:'50px'}}>
            <TableContainer component={Paper}>
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width='100'>States</StyledTableCell>
                            <StyledTableCell align="right" width='50'>Confirmed</StyledTableCell>
                            <StyledTableCell align="right" width='50'>Active</StyledTableCell>

                            <StyledTableCell align="right" width='50'>Recovered</StyledTableCell>
                            <StyledTableCell align="right" width='50'>Deaths</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataa && dataa.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.provinceState}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.confirmed}</StyledTableCell>
                                <StyledTableCell align="right">{row.active}</StyledTableCell>
                                <StyledTableCell align="right">{row.recovered}</StyledTableCell>
                                <StyledTableCell align="right">{row.deaths}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
export default MyTable;