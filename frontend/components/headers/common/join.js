import React, { Fragment } from 'react';
import Link from 'next/link';

const Join = ({ logo }) => {
    return (
        <Fragment>
            <Link href={'/join'} >
                <a>
                    JOIN NOW
                </a>
            </Link>
        </Fragment>
    )
}

export default Join;