import React, { useEffect, createRef, useCallback, useMemo, useState } from 'react';
import axios from 'axios';
import classes from './Jobs.module.css';
import { Button } from '../ui-components/Button';
import { Container } from '../ui-components/Container';

const leverWebsite = 'https://jobs.lever.co/acala';

const leverApi = 'https://api.lever.co/v0/postings/acala?mode=json';

const useLever = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(leverApi).then((result) => {
            if (result.status === 200) setData(result.data); 
        });
    }, []);
    
    return data;
};

export const Jobs = () => {
    const ref = createRef();

    const openBlog = useCallback(() => {
        window.open('https://medium.com/acalanetwork');
    }, []);

    const jobs = useLever();

    return (
        <section className={classes.root}>
            <div className={classes.header}>
                <p className={classes.title}>Want to Build the Future of Finance?</p>
                <p className={classes.title}>Build with Acala</p>
                <Button className={classes.viewCurrentOpening} link={leverWebsite}>View Our Current Opening</Button>
            </div>
            <Container className={classes.jobs} ref={ref}>
                <p className={classes.subTitle}>Who we are looking for</p>
                <div className={classes.jobsList}>
                    {
                        jobs ? jobs.map((item) => {
                            return (
                                <div key={item.text} className={classes.jobItem} onClick={() => window.open(item.hostedUrl)}>
                                    <p className={classes.jobTitle}>{item.text}</p>
                                    <p className={classes.jobCategories}>{`${item.categories.location} ${item.categories.team}`}</p>
                                </div>
                            );
                        }) : <p>loading</p>
                    }
                </div>
            </Container>

            <Container className={classes.concat}>
                <p className={classes.subTitle}>Want to learn more about the work we do?</p>
                <Button className={classes.blogBtn} onClick={openBlog}>READ OUR BLOG</Button>
                <p className={classes.getInTouch}>Or <a href='mailto:hello@acala.network' target='_blank' rel="noopener noreferrer">get in touch</a> with us</p>
            </Container>
        </section>
    );
};
