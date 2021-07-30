import { Component } from 'react'
import '../assets/styles/pages/AllCommits.scss';

import { Title } from '../components/Title';
import { ShowFilterButton } from '../components/ShowFilterButton';
import { DateFilterBar } from '../components/DateFilterBar';
import { CommitTable } from '../components/CommitTable';
import { Footer } from '../components/Footer';
class AllCommits extends Component {
    state = {
        commits: []
    }

    render(){
        return (
            <div className="AllCommits">
                <header>
                    <Title/>
                    <ShowFilterButton/>
                </header>
                <DateFilterBar/>
                <CommitTable commits={this.state.commits}/>
                <Footer/>
            </div>
        );
    }

    async componentDidMount(){
        const response = await fetch(
            'https://api.github.com/repos/cjcarlosgc/fulltimeforce-challenge/commits'
        );
        this.setState({
            commits: await response.json()
        });
    }
}

export default AllCommits;
