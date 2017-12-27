import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import { PulseLoader } from 'halogenium';

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }

    renderItem(data) {
        if (data && data.length > 0) {
            return data.map((ele, index) => (
                <Item index={index} data={ele} key={index} page={this.props.match.params.page} />
            ));
        }
    }

    renderLoading() {
        const { match } = this.props;
        const page = Number(match.params.page);
        let element;
        if (page > 1) {
            element = (
                <div className="footer-page">
                    There is no content, please come back to previous page!
                </div>
            );
        } else {
            element = (
                <div className="loading">
                    <PulseLoader color="#26A65B" size="16px" margin="4px"/>
                </div>
            );
        }
        return element;
    }

    renderList(data) {
        return (
            <div className="content">
            {
                (data && data.length) > 0 ?
                <main>
                    {this.renderItem(data)}
                </main> :
                this.renderLoading()
            }
            </div>
        );
    }

    renderPage(type) {
        const { match } = this.props;
        const page = Number(match.params.page);
        let newTypePrve;
        let newTypeNext;
        if (type) {
            newTypePrve = `/${type}/${(page - 1) > 1 ? page - 1 : 1}`
            newTypeNext = `/${type}/${page + 1}`;
        } else {
            newTypePrve = `/${(page - 1) > 1 ? page - 1 : 1}`
            newTypeNext = `/${page + 1}`;
        }
        return (
            <div>
                <div className="footer-page">
                    <Link to={newTypePrve} onClick={() => this.scrollTop()}><button className="btn btn-pre">Previous</button></Link>
                    <span>{page}</span>
                    <Link to={newTypeNext} onClick={() => this.scrollTop()}><button className="btn btn-next">Next</button></Link>
                </div>
                <div className="footer">
                    <span>Build by React, Redux, React Router, PWA. Credit: <a href="https://github.com/banhaclong20">banhaclong20</a></span>
                </div>  
            </div>  
        );
    }
}
