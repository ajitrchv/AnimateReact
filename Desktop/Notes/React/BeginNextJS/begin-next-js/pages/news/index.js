//our-domain.com/news
import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () =>
{

    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href="/news/going-somewhere">
                Going somewhere.
                </Link>
            </li>
            <li>
            <Link href="/news/no-going-here">
                No, going here.
                </Link>
            </li>
         </ul>
        </Fragment>
}

export default NewsPage;