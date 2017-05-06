import React from 'react';
import { t as i18n, ngettext, msgid } from 'c-3po';

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
                <div>{ ngettext(msgid`You have clicked ${ n } time`, `You have clicked ${ n } time`, n) }</div>
                <button onClick={this.countInc}>{ i18n`Click me` }</button>
            </div>
        )
    }
}

export default PluralDemo;