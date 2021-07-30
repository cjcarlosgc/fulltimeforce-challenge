import '../assets/styles/components/DateFilterBar.scss';

// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DatePicker from '@material-ui/lab/DatePicker';

import { GrClose } from 'react-icons/gr';
import IconButton from '@material-ui/core/IconButton';

export const DateFilterBar = () => {
    // const [selectedDate, setSelectedDate] = useState(null
    //     // new Date('2014-08-18T21:11:54')
    // );

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //     console.log(date)
    // };

    return (
        <section className="DateFilterBar">
            <div className="DateFilterBar__from">
               
            </div>
            <div className="DateFilterBar__to">
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
                <IconButton aria-label="clear">
                    <GrClose/>
                </IconButton>
            </div>
        </section>
    )
}
