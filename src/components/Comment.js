import React, { Component } from 'react';
import CommentItem from './CommentItem';

class Comment extends Component {
    constructor(props) {
        super();
        this.element = [];
    }

    renderChildren(data, type = 1) {
        if (data.comments) {
            data.comments.forEach((comment, key) => {
                this.element.push(
                    <CommentItem 
                        user={comment.user}
                        timeAgo={comment.time_ago}
                        content={comment.content}
                        key={comment.id}
                        type={type}
                        id={comment.id}
                    />
                );
                this.renderChildren(comment, key + 2);
            });
        }
    }

    renderComponent(data) {
        this.element = [
            <CommentItem
                user={data.user}
                timeAgo={data.time_ago}
                content={data.content}
                key={data.id}
                id={data.id}
            />
        ];
        this.renderChildren(data);
        return this.element;
    }

    render() {
        return (
            <div>
                {this.renderComponent(this.props.data)}
            </div>
        );
    }
}

export default Comment;