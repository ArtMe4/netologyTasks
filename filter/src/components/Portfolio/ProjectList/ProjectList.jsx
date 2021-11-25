import PropTypes from 'prop-types';

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

ProjectList.propTypes = {

    projects: PropTypes.array,
    active: PropTypes.string

}

export default ProjectList;