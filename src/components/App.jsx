import React from 'react';

import Header from './header/Header';
import Content from './content/Content';
import About from './content/about'

import model from '../model/model';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header profile={this.props.data.profile} />
                <Content>
                    <About data={this.props.data} />
                </Content>
            </div>
        )
    }
}

App.propTypes = {
    data: model.data
};

export default App