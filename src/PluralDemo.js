import React from 'react';
import { t as i18n, nt } from 'c-3po';

class PluralDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.countInc = this.countInc.bind(this);
    }
    countInc() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        const n = this.state.count;
        return (
            <div>
                <h3>{ i18n`Deadly boring counter demo (but with plurals)` }</h3>
                <div>{ nt(this.state.count)`You have clicked ${this.state.count} times` }</div>
                <button onClick={this.countInc}>{ i18n`Click me` }</button>
            </div>
        )
    }
}

export default PluralDemo;