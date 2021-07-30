import '../assets/styles/components/CommitTable.scss';
import { Commit } from './Commit';

export const CommitTable = (props) => {
    return(
        <section className="CommitTable">
            {
                props.commits.map(
                    commitData => <Commit key={commitData.node_id} {...commitData}/>
                )
            }
        </section>
    )
}
