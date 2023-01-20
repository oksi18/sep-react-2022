const Flight = ({flight}) => {
    const {mission_name, launch_year, mission_patch_small} = flight
return (
    <div>
        <div>mission name: {mission_name}</div>
        <div>launch year: {launch_year}</div>
        <div>mission patch small: {mission_patch_small}</div>
    </div>
)
}

export {Flight}
