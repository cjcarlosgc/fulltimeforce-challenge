import '../assets/styles/components/Commit.scss';

export const Commit = (props) => {
    return (
        <div>
            {props.commit.message}
        </div>
    )
}
