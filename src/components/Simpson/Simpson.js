
const Simpson = ({simpson}) => {
    const {name, surname, img, info} = simpson;
    return(
        <div className="big-block">
            <div className="block">
               <h2 className="title"> {name}  {surname} </h2>
                <p className="text"><b>Some info:</b> {info}</p>
                <img className="photo" src={img}  alt={name}/>

            </div>
        </div>
    )
}
export {Simpson};
