import '../assets/styles/components/DateFilterBar.scss';
import { TextField } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';

import { GrClose } from 'react-icons/gr';
import IconButton from '@material-ui/core/IconButton';
import { Fragment } from 'react';

export const DateFilterBar = (props) => {
    return (
        <Fragment>
            {
                props.showFilterBar && (
                    <section className="DateFilterBar">
                        <div className="DateFilterBar__from">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Desde"
                                    format="dd/MM/yyyy"
                                    inputFormat="dd/MM/yyyy"
                                    value={props.fromDate}
                                    onChange={props.handleFromDate}
                                    renderInput={(props) => (
                                        <TextField {...props} helperText={null}/>
                                    )}
                                    cancelText="Cancelar"
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="DateFilterBar__to">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Hasta"
                                    format="dd/MM/yyyy"
                                    inputFormat="dd/MM/yyyy"
                                    value={props.toDate}
                                    onChange={props.handleToDate}
                                    renderInput={(props) => (
                                        <TextField {...props} helperText={null}/>
                                    )}
                                />
                            </LocalizationProvider>
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    placeholder="Hasta"
                                    format="dd/MM/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider> */}
                        </div>
                        <div className="DateFilterBar__button">
                            <IconButton
                                aria-label="clear"
                                onClick={props.handleClickClearDates}
                            >
                                <GrClose/>
                            </IconButton>
                        </div>
                    </section>
                )
            }
        </Fragment>
    )
}
