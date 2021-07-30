import '../assets/styles/components/CommitTable.scss';
import { Commit } from './Commit';
import { CommitTableHead } from './CommitTableHead';

export const CommitTable = (props) => {
    return(
        <div className="CommitTable">
            <CommitTableHead/>
            <div className="CommitTableBody">
                {
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
