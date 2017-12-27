import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class FirstPage extends Component {
    render() {
        return <Redirect to="/1" />
    }
}

export default FirstPage;