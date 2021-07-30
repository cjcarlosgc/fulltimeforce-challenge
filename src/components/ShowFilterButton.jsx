import '../assets/styles/components/ShowFilterButton.scss';
import { RiFilterLine, RiFilterFill } from 'react-icons/ri';
import IconButton from '@material-ui/core/IconButton';

export const ShowFilterButton = (props) => {
    return (
        <IconButton
            onClick={props.handleClickShowFilterButton}
            className="ShowFilterButton"
            aria-label="mostrar/ocultar"
        >
            {
                props.showFilterBar ?
                    <RiFilterFill/> :
                    <RiFilterLine/>
            }
        </IconButton>
    )
}
