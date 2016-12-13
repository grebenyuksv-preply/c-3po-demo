import React from 'react';
import { t } from 'c-3po';

const Multiline = () => (
    <div>
        <textarea>
            {t`this is multiline
            demo for demonstrating
            multiline strings`}
        </textarea>
    </div>
)

export default Multiline;