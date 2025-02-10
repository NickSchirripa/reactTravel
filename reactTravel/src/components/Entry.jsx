export function Entry(){
    return(
        <article className='card'>
            <div className='mainImgContainer'>
            <img className='mainImg' src="https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div className='cardContent'>
                <div className="countryPin">
                    <img className = "marker" src="src/assets/marker.png" alt="marker pin icon"/>
                    <span>Japan <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View On Google Maps</a></span>
                </div>
            <h2>Mount Fuji</h2>
            <p className='date'>12  Jan, 2021- 24 Jan, 2021</p>
            <p className='entryText'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}