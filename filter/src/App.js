import './App.css';
import React, {useState, Component} from 'react';

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

function Toolbar({filters, selected, onSelectFilter}) {

    return (
        <div className="filters">
            {
                filters.map((el, idx) => {
                    return (
                        <div key={idx} className={selected === el ? 'selected' : ''} onClick={() => onSelectFilter(el)}>
                            {el}
                        </div>
                    )
                })
            }
        </div>
    );

}

function ProjectList({projects, active}) {

    return (
        <div className="projects">
            {
                projects.map((el, idx) => {
                    return (
                        <div key={idx} className={active === el.category || active === 'All' ? 'active' : ''}>
                            <img src={el.img} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    );

}


function Portfolio() {

    const [selected, setSelected] = useState('All');

    const onSelectFilter = (filter) => {

        setSelected(() => filter);

    }

    return (
        <>
            <div className="content">
                <Toolbar
                    filters={filters}
                    selected={selected}
                    onSelectFilter={onSelectFilter}/>
                <ProjectList projects={projects} active={selected} />
            </div>
        </>
    );

}


export default Portfolio;
