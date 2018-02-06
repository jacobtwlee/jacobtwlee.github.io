import React from 'react';

import Header from './header/Header';
import Content from './content/Content';
import Section from './content/Section';
import About from './content/about'

import model from '../model/model';
import Experience from "./content/experience";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header profile={this.props.data.profile} />
                <Content>
                    <About data={this.props.data} />
                    <Section title='Experience'>
                        <Experience data={this.props.data} />
                    </Section>
                    <Section title='Projects'>
                    </Section>
                    <Section title='Education'>
                    </Section>
                    <Section title='Contact'>
                    </Section>
                </Content>
            </div>
        )
    }
}

App.propTypes = {
    data: model.data
};

export default App