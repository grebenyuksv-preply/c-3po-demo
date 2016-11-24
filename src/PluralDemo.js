import React from 'react';
import { t, nt } from './polyglot';

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
                <h3>{ t`Deadly boring counter demo (but with plurals)` }</h3>
                <div>{ nt(n)`You have clicked ${n} times` }</div>
                <button onClick={this.countInc}>{ t`Click me` }</button>
            </div>
        )
    }
}

export default PluralDemo;