import React from 'react';
import { t } from 'c-3po'
import PluralDemo from './PluralDemo';
import Multiline from './multiline'
import Ngettext from './ngettextDemo';

const Page = () => (
    <div>
        <h1>{ t`c-3po` }</h1>
        <h2>{ t`Demo page for c-3po and react library` }</h2>
        <div>{ t`Choose locale` }</div>
        <ul>
            <li><a href={`${HOST}/ua`}>{ t`Ukrainian` }</a></li>
            <li><a href={`${HOST}/`}>{ t`English` }</a></li>
        </ul>
        <PluralDemo/>
        <Multiline/>
        <Ngettext/>
    </div>
);

export default Page;
