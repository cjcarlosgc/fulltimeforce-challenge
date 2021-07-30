import { Component } from 'react'
import '../assets/styles/pages/AllCommits.scss';

import { Title } from '../components/Title';
import { ShowFilterButton } from '../components/ShowFilterButton';
import { DateFilterBar } from '../components/DateFilterBar';
import { CommitTable } from '../components/CommitTable';
import { Footer } from '../components/Footer';
class AllCommits extends Component {
    state = {
        commits: [],
        fromDate: null,
        toDate: null,
        showFilterBar: false
    }

    handleClickShowFilterButton = () => {
        this.setState({
            showFilterBar: !this.state.showFilterBar
        });
    }

    handleFromDate = (date) => {
        this.setState({
            fromDate: date
        });
    };

    handleToDate = (date) => {
        this.setState({
            toDate: date
        });
    };

    handleClickClearDates = () => {
        this.setState({
            fromDate: null,
            toDate: null
        })
    }

    render(){
        return (
            <div className="AllCommits">
                <header>
                    <Title/>
                    <ShowFilterButton
                        showFilterBar={this.state.showFilterBar}
                        handleClickShowFilterButton={this.handleClickShowFilterButton}
                    />
                </header>
                <DateFilterBar
                    fromDate={this.state.fromDate}
                    toDate={this.state.toDate}
                    showFilterBar={this.state.showFilterBar}
                    handleFromDate={this.handleFromDate}
                    handleToDate={this.handleToDate}
                    handleClickClearDates={this.handleClickClearDates}
                />
                <CommitTable
                    commits={this.state.commits}
                    showFilterBar={this.state.showFilterBar}
                    fromDate={this.state.fromDate}
                    toDate={this.state.toDate}
                />
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
