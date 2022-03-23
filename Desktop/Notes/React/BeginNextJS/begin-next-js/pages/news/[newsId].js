import { useRouter } from 'next/router';
import { Fragment } from 'react';
//our-domain.com/news/something-important

const DetailPage = () =>
{
    const router = useRouter();
    const newsId = router.query.newsId;



    console.log(newsId);
    
    return <Fragment>
        <h1>The Detail Page of ID: {newsId}</h1>

    </Fragment>
    
}

export default DetailPage;