import '../assets/styles/components/DateFilterBar.scss';

import 'date-fns';
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { GrClose } from 'react-icons/gr';
import IconButton from '@material-ui/core/IconButton';

export const DateFilterBar = () => {
    const [selectedDate, setSelectedDate] = useState(
        new Date('2014-08-18T21:11:54')
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <section className="DateFilterBar">
            <div className="DateFilterBar__from">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Desde"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className="DateFilterBar__to">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Desde"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className="DateFilterBar__button">
                <IconButton aria-label="delete">
                    <GrClose/>
                </IconButton>
            </div>
        </section>
    )
}
