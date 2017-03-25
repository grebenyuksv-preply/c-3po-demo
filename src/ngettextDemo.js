import React from 'react';
import { t, ngettext, msgid, jt } from 'c-3po';

class NgettextDemo extends React.Component {
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
        const btn = <button onClick={this.countInc}>{ t`me` }</button>;
        return (
            <div>
                <h3>{ t`Ngettext demo` }</h3>
                <div>
                    { ngettext(msgid`${n} time clicked`, `${n} times clicked`, n) }
                </div>
                <span>
                    { jt`Click ${ btn }`}
                </span>
            </div>
        )
    }
}

export default NgettextDemo;