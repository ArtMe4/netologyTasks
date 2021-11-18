import './App.css';
import React, {useState, Component} from 'react';

function Toolbar({filters, selected, onSelectFilter}) {

    return (
        filters.map((el, idx) => {
            return (
            <div key={idx} className={selected === el ? 'selected' : ''} onClick={() => onSelectFilter(el)}>
                {el}
            </div>
            )
        })
    );

}

function ProjectList({projects, active}) {

    return (
        projects.map((el, idx) => {
            return (
                <div key={idx} className={active === el.category || active === 'All' ? 'active' : ''}>
                    <img src={el.img} alt=""/>
                </div>
            )
        })
    );

}


function Portfolio() {

    const projects = [
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites"
        },
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers"
        }
    ];
    const filters = [
        "All",
        "Websites",
        "Flayers",
        "Business Cards"
    ];
    const [selected, setSelected] = useState('All');

    const onSelectFilter = (filter) => {

        setSelected(() => filter);

    }

    return (
        <>
            <Toolbar
                filters={filters}
                selected={selected}
                onSelectFilter={onSelectFilter}/>
            <ProjectList projects={projects} active={selected} />
        </>
    );

}


export default Portfolio;
