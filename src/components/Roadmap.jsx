import React, { createRef, useRef } from 'react';
import clsx from 'clsx';
import classes from './Roadmap.module.css';
import { Container } from '../ui-components/Container';
import { Button } from '../ui-components/Button';
import { RightArrowIcon } from '../ui-components/RightArrowIcon';

const Timeline = ({ timeline }) => {
    const $listRef = createRef();
    const page = useRef(0);
    const onNext = () => {
        const $list = $listRef.current;
        const $item = $list.querySelector('li');
        if (!$list || !$item) {
            return false;
        }
        const listWidth = $list.clientWidth;
        const itemWidth = $item.clientWidth;
        const marginRight = parseInt(window.getComputedStyle($item)['margin-right']);
        const maxPage = Math.ceil(listWidth / ((marginRight + itemWidth) * 3));
        if (page.current < maxPage) {
            page.current = page.current + 1;
            $list.style.transform = `translate3d(-${(itemWidth + marginRight) * 3 * page.current}px, 0, 0)`
        }
    };
    const onPrev = () => {
        const $list = $listRef.current;
        const $item = $list.querySelector('li');
        if (!$list || !$item) {
            return false;
        }
        const itemWidth = $item.clientWidth;
        const marginRight = parseInt(window.getComputedStyle($item)['margin-right']);
        if (page.current > 0) {
            page.current = page.current - 1;
            $list.style.transform = `translate3d(-${(itemWidth + marginRight) * 3 * page.current}px, 0, 0)`
        }
    };

    return (
        <div className={classes.timelineContainer}>
            <div className={classes.controll}>
                <Button className={classes.prevBtn} onClick={onPrev}><RightArrowIcon /></Button>
                <Button className={classes.nextBtn} onClick={onNext}><RightArrowIcon /></Button>
            </div>
            <ul className={classes.timeline} ref={$listRef}>
                {
                    timeline.map(({ year, quarter, item, type }, index) => (
                        <li className={clsx(classes.timelineItem, classes[type])} key={`timeline-${index}`}>
                            <div className={clsx(classes.precent, classes[type])} />
                            <p>
                                <span className={classes.timelineYear}>{year}</span>
                                <span className={classes.timelineQuarter}>.{quarter}</span>
                            </p>
                            <ul className={classes.timelineDetail}>
                                {
                                    item.map(({ text, complated }, index) => (
                                        <li className={clsx({ [classes.complated]: complated })} key={`timeline-detail-${index}`}>
                                            <p>{text}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export const Roadmap = () => {
    const timeline = [
        {
            type: 'past',
            year: '2019',
            quarter: 'Q3',
            item: [
                { text: 'Acala Incorporated', complated: true },
                { text: 'Development Kick-off', complated: true }
            ]
        },
        {
            type: 'past',
            year: '2019',
            quarter: 'Q4',
            item: [
                { text: 'Whitepaper &  Economic model', complated: true },
                { text: 'Testnet Candidate #1 Launch', complated: true }
            ]
        },
        {
            type: 'past',
            year: '2020',
            quarter: 'Q1',
            item: [
                { text: 'Web3 Foundation Grant', complated: true },
                { text: 'Release dSWF whitepaper', complated: true },
                { text: 'Testnet Candidate 2', complated: true }
            ]
        },
        {
            type: 'past',
            year: '2020',
            quarter: 'Q2',
            item: [
                { text: 'Staking Derivative LDOT Launch', complated: true },
                { text: 'Web3 Foundation Grant Completion', complated: true }
            ]
        },
        {
            type: 'current',
            year: '2020',
            quarter: 'Q3',
            item: [
                { text: 'Launch-Code Complete', complated: true },
                { text: 'Launch on Polkadot Testnet Rococo', complated: true },
                { text: 'Security Aduit/Economic Audit', complated: false },
            ]
        },
        {
            type: 'feature',
            year: '2020',
            quarter: 'Q4',
            item: [

                { text: 'Implement EVM & Smart Contract', complated: false },
                { text: 'Launch Acala on Kusama', complated: false },
                { text: 'Launch Acala on Polkadot', complated: false }
            ]
        },
        {
            type: 'feature',
            year: '2021',
            quarter: 'Q1',
            item: [

                { text: 'Enable Council Governance Enable Stablecoin, Staking', complated: false },
                { text: 'Derivative and DeX', complated: false },
                { text: 'Enable Cross-chain Asset Bitcoin', complated: false }
            ]
        },
        {
            type: 'feature',
            year: '2021',
            quarter: 'Q2',
            item: [

                { text: 'Enable more Cross-chain Assets', complated: false },
                { text: 'Full EVM & Smart Contract Support', complated: false },
                { text: 'Launch Parachain Bonding Derivative PDOT', complated: false }
            ]
        },
        {
            type: 'feature',
            year: '2021',
            quarter: 'Q3',
            item: [

                { text: 'Enable Liquid Democracy', complated: false },
                { text: 'Enable dSWF & DAO3.0', complated: false }
            ]
        }
    ]
    return (
        <section className={classes.root}>
            <Container>
                <p className={classes.title}>Roadmap</p>
                <Timeline timeline={timeline} />
            </Container>
        </section>
    );
}