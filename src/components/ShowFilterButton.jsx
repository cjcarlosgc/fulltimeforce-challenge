import '../assets/styles/components/ShowFilterButton.scss';

import { RiFilterLine } from 'react-icons/ri';
import IconButton from '@material-ui/core/IconButton';

export const ShowFilterButton = () => {
    return (
        <IconButton aria-label="mostrar/ocultar">
            <RiFilterLine/>
        </IconButton>
    )
}
