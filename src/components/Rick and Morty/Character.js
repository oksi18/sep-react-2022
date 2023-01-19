const Character = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    return (
        <div className='big-block1'>
            <div className='block1'>
                <h2>{id}  {name}</h2>
                <ul>
                    <li><b>status:</b>{status}</li>
                    <li><b>species:</b>{species}</li>
                    <li><b>gender:</b>{gender}</li>
                </ul>
                <img src={image} alt={name}/>
            </div>
        </div>
    )

}
export {Character};
