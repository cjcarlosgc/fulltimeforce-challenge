import { Fragment, Component } from 'react'
import '../assets/styles/pages/AllCommits.scss';

import { Title } from '../components/Title';
import { CommitSearchField } from '../components/CommitSearchField';
import { ShowFilterButton } from '../components/ShowFilterButton';
import { DateFilterBar } from '../components/DateFilterBar';
import { CommitTable } from '../components/CommitTable';

class AllCommits extends Component {
    state = {
        commits: []
    }

    render(){
        return (
            <Fragment>
                <Title/>
                <CommitSearchField/>
                <ShowFilterButton/>
                <DateFilterBar/>
                <CommitTable commits={this.state.commits}/>
            </Fragment>
        );
    }

    async componentDidMount(){
        const response = await fetch(
            'https://api.github.com/repos/cjcarlosgc/fulltimeforce-challenge/commits'
        );
        this.setState({
            commits: await response.json()
        });

        fetch(
            'https://api.github.com/repos/cjcarlosgc/fulltimeforce-challenge/commits'
        ).then(response => response.json())
        .then(commits => {
            this.setState({
                commits: commits
            });
        })
    }
}

export default AllCommits;
