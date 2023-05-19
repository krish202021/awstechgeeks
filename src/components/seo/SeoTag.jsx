import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import * as API from '../API/Fetch';
export default function SeoTag(props) {
    const [seoTag, setSeoTag] = useState('');
    useEffect(() => {
        const data = { "page_id": props.page_id };
        API.api(data, 'user/get-seo').then(res => {
            if (res) {
                console.log('seo', res.result[0].seo_title)
                setSeoTag(res.result);
            } else {
                console.log('token mismatch')
            }
        });

    }, []);
    return (
        <>
            {
                seoTag ?
                    seoTag.map((item, index) => {
                        return (
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>{item.seo_title}</title>
                                <meta name="description" content={item.meta_description}></meta>
                                <meta name="keywords" content={item.meta_keyword}></meta>
                            </Helmet>
                        )
                    })
                    :
                    ''
            }
        </>

    )
}
