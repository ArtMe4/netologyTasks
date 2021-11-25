import './App.css';
import React, {useState} from 'react';
import Toolbar from './components/Portfolio/Toolbar/Toolbar';
import ProjectList from './components/Portfolio/ProjectList/ProjectList';
import PropTypes from "prop-types";

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

Toolbar.defaultProps = {

    filters: ['All', 'Websites'],
    selected: 'All'

}

ProjectList.defaultProps = {

    projects: [
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards"
        }
    ],
    active: 'All'

}

Portfolio.propTypes = {

    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func,
    projects: PropTypes.array

}


export default Portfolio;
