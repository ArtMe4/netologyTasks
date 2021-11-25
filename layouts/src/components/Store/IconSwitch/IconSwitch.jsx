export function IconSwitch({icon, onSwitch}) {

    return (
        <div className={"view-switcher"}>
            <span className="material-icons" onClick={onSwitch}>
                {icon}
            </span>
        </div>
    );

}