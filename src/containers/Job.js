import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/comment';
import Container from '../components/Container';

class Job extends Container {
    componentWillMount() {
        const page = this.props.match.params.page;
        this.props.dispatch(getData('jobs', page));
    }

    componentWillReceiveProps(nextProps) {
        const newpage = nextProps.match.params.page;
        const page = this.props.match.params.page;
        if (newpage !== page) {
            this.props.dispatch(getData('jobs', newpage));
        }
    }

    render() {
        const { jobs } = this.props;
        return (
            <div>
                {this.renderList(jobs)}
                {this.renderPage('jobs')}
            </div>
        );
    }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Job);