//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { BLOCKS } from "@contentful/rich-text-types";

import React from 'react';

function ArticleBody({raw}) {
    
    return (
        <>
            { raw }
        </>
    );
}

export default ArticleBody;