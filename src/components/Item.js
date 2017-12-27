import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, MessageCircle } from 'react-feather';

class Item extends Component {
    openURL(e, target) {
        e.preventDefault();
        window.open(target);
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <ul>
                    <li>
                        <span className="number">{ data.points ? `${data.points}` : '' }</span><br/>
                        <span className="text">Points</span>
                    </li>
                    <li>
                        <Link to={`/item/${data.id}`}>
                            <div onClick={() => this.scrollTop()}>
                            <span className="number">{data.comments_count}</span><br/>
                            <span className="text">Comments</span>
                            </div>
                        </Link>

                        
                    </li>
                    <li>
                        <a onClick={(e) => this.openURL(e, data.url)} target="_blank">{data.title}</a>
                        <div className="info">
                            <Clock size={15} /><span className="info-text">{data.time_ago}</span>
                            <User size={15} /><span className="info-text">{data.user}</span>
                            <Link to={`/item/${data.id}`}>
                                <MessageCircle size={15} /><span className="info-text" onClick={() => this.scrollTop()}>View Comment</span>
                            </Link>
                            
                        </div>    
                        

                    </li>    
                </ul>          
            </div>
        );
    }
}

export default Item;