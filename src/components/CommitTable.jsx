import '../assets/styles/components/CommitTable.scss';
import { Commit } from './Commit';
import { CommitTableHead } from './CommitTableHead';
import moment from 'moment';

export const CommitTable = (props) => {
    return(
        <div className="CommitTable">
            <CommitTableHead/>
            <div className="CommitTableBody">
                {
                    props.showFilterBar &&
                    props.fromDate &&
                    props.toDate ?

                    props.commits.map(
                        (commitData, index) => {
                            const dateTime = new Date(commitData.commit.author.date);
                            const date = moment(dateTime).format('YYYY-MM-DD');

                            const fromDateTime = props.fromDate;
                            const fromDate = moment(fromDateTime).format('YYYY-MM-DD');

                            const toDateTime = props.toDate;
                            const toDate = moment(toDateTime).format('YYYY-MM-DD');
                            debugger;
                            const betweenRanges = moment(date).isBetween(fromDate, toDate, null, '[]');
                            if(betweenRanges){
                                return <Commit
                                            key={commitData.node_id}
                                            index={index}
                                            {...commitData}
                                        />
                            }
                            else {
                                return null;
                            }
                        }
                    ) :
                    props.commits.map(
                        (commitData, index) =>
                            <Commit
                                key={commitData.node_id}
                                index={index}
                                {...commitData}
                            />
                    )
                }
            </div>
        </div>
    )
}
