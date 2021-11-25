export function Toolbar({filters, selected, onSelectFilter}) {

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