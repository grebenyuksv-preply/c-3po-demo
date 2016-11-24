import React from 'react';
import { t } from './polyglot'
import PluralDemo from './PluralDemo';

const Page = () => (
    <div>
        <h1>{ t`Polyglot page` }</h1>
        <h2>{ t`Demo page for polyglot.js library` }</h2>
        <div>{ t`Choose locale` }</div>
        <ul>
            <li><a href={`${HOST}/ua`}>{ t`Ukrainian` }</a></li>
            <li><a href={`${HOST}/`}>{ t`English` }</a></li>
        </ul>
        <PluralDemo/>
    </div>
);

export default Page;
