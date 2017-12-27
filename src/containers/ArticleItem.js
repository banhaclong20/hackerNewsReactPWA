import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../actions/comment';
import Comment from '../components/Comment';

class Comments extends Component {
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.dispatch(getItem(id));
    }

    reply(id) {
        window.location.href = `https://news.ycombinator.com/item?id=${id}`;
    }

    renderDescription(data) {
        if (data && Object.hasOwnProperty.call(data, 'title')) {
            return (
                <div className="story-top">
                    <a className="story-title" href={data.url} target="_blank">{data.title}</a>
                    <ul>
                        <li>Points: {data.points}</li>
                        <li>Comments: {data.comments_count}</li>
                        <li>Time: {data.time_ago}</li>
                        <li className="btn-reply" onClick={() => this.reply(data.id)}>Reply</li>
                    </ul>        
                </div>    
            );
        }
    }

    renderComments(data) {
        if (data && Object.hasOwnProperty.call(data, 'comments')&& data.comments.length > 0) {
            return (
                <div>
                    {data.comments.map((ele, key) => 
                    <Comment data={ele} key={key} />)}
                </div>    
            );
        }
        return null;
    }

    render() {
        const { state } = this.props;
        console.log(state);
        return (
            <div className="article">
                {this.renderDescription(state)}
                {this.renderComments(state)}
            </div>
        );
    }
}

const mapStateToProps = state => state.story;

export default connect(mapStateToProps)(Comments);