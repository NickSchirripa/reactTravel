export function Entry(props){
    return(
        <article className='card'>
            <div className='mainImgContainer'>
            <img 
                className='mainImg' 
                src={props.img.src}
                alt = {props.img.alt}
                />
            </div>
            <div className='cardContent'>
                <div className="countryPin">
                    <img className = "marker" src="src/assets/marker.png" alt="marker pin icon"/>
                    <span>{props.country} <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View On Google Maps</a></span>
                </div>
            <h2>{props.name}</h2>
            <p className='date'>{props.birthday}</p>
            <p className='entryText'>{props.text}</p>
            </div>
        </article>
    )
}