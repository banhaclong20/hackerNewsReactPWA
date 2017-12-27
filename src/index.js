import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/App';
import FirstPage from './components/FirstPage';
import Newest from './containers/Newest';
import ArticleItem from './containers/ArticleItem';
import Ask from './containers/Ask';
import Job from './containers/Job';
import './style.css';

import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];

const store = createStore(
    reducer, 
    applyMiddleware(...middleware)
)

const defaultChannelList = ['news', 'newest', 'ask', 'job'];

const changeChanel = (e) => {
    const channelList = document.querySelectorAll('.channel');
    if (channelList && channelList.length > 0) {
        for(let i = 0; i < channelList.length; i++) {
            channelList[i].setAttribute('style', '');
        }
    }
    e.target.parentNode.setAttribute('style', 'background: #d4813a');
}

const initChannel = () => {
    const path = window.location.pathname.match(/\/([a-z]*)\/([0-9]*)/, 'g');
    console.log(path);
    let chanel = 'news';
    if (path) {
        chanel = path[1];
    }
    const index = defaultChannelList.indexOf(chanel);
    const channelList = document.querySelectorAll('.channel');
    index > -1 && channelList[index].setAttribute('style', 'background: #d4813a');
}


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <div className="nav-bar">
                    <div className="logo">Y</div>
                    <Link to="/"><h2>Hacker News</h2></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li className="channel"><Link to="/1" onClick={(e) => changeChanel(e)}>Front Page</Link></li>
                        <li className="channel"><Link to="/newest/1" onClick={(e) => changeChanel(e)}>Newest</Link></li>
                        <li className="channel"><Link to="/ask/1" onClick={(e) => changeChanel(e)}>Ask</Link></li>
                        <li className="channel"><Link to="/jobs/1" onClick={(e) => changeChanel(e)}>Jobs</Link></li>
                    </ul>  
                </div>    
                <Route path="/" exact component={FirstPage} />
                <Route path="/:page" exact component={App} />
                <Route path="/newest/:page" exact component={Newest} />
                <Route path="/item/:id" exact component={ArticleItem} />
                <Route path="/ask/:page" exact component={Ask}/>
                <Route path="/jobs/:page" exact component={Job} />
            </div>    
        </Router>    
    </Provider>,     
    document.querySelector('#root'))

window.addEventListener('popstate', () => initChannel());

initChannel();
registerServiceWorker();