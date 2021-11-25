export function ProjectList({projects, active}) {

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