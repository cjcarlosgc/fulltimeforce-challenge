import '../assets/styles/components/Commit.scss';
import lastChangeGraph from '../assets/images/last-change.png';
import changeGraph from '../assets/images/change.png';
import * as utils from '../utils';

export const Commit = (props) => {
    return (
        <div className="Commit">
            <div className="Commit__graph">
                {
                    !props.index?
                        <img
                            alt="Last change graphic"
                            src={lastChangeGraph}
                        /> :
                        <img
                            className='change-graph'
                            alt="change graphic"
                            src={changeGraph}
                        />
                }
            </div>
            <div className="Commit__content">
                <div className="Commit__content-message">
                    {props.commit.message}
                </div>
                <div className="Commit__content-hash">
                    {props.sha?.substr(0,8)}
                </div>
                <div className="Commit__content-datetime">
                    {`${utils.formatStringDate(props.commit.author.date)} a las ${utils.extractHourAndMinutes(props.commit.author.date)}`}
                </div>
            </div>
        </div>
    )
}
