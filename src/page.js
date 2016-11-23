import React from 'react';
import { gt } from './polyglot'
import PluralDemo from './PluralDemo';

const Page = () => (
    <div>
        <h1>{ gt`Polyglot page` }</h1>
        <h2>{ gt`Demo page for polyglot.js library` }</h2>
        <div>{ gt`Choose locale` }</div>
        <ul>
            <li><a href={`${HOST}/ua`}>{ gt`Ukrainian` }</a></li>
            <li><a href={`${HOST}/`}>{ gt`English` }</a></li>
        </ul>
        <PluralDemo/>
    </div>
);

export default Page;
