import React from 'react';
import { User, Clock } from 'react-feather';

export default (props) => {
    return (
        <div
            style={{
                marginLeft: `${props.type * 40}px`,
            }}
            className="comment-item"
        >
            <div className="comment-info">
                <span>
                    <User size={15} /> {props.user}
                </span>
                <span className="time-ago">
                    <Clock size={15} /> {props.timeAgo}
                </span>
            </div>
            <div dangerouslySetInnerHTML={{__html: props.content}}>    
            </div>              
        </div>    
    );
}