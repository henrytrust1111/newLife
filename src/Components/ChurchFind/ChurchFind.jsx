import './findChurch.css'

const ChurchFind = () => {
    return(
        <div className="churchfindwrap">
            <div className="churchpic">
                <h1>We'd love to see you this sunday</h1>
            </div>
            <div className="explain">
                <div className="explainhold">
                    <p className='explainfollow'>
                        An important part of faith as a Christian is time 
                        spent in community with other like-minded followers of Jesus Christ. 
                        It might be a massive gathering of people that meets weekly in a large building, 
                        or it might be a small group of believers that gathers regularly in someone’s home.
                    </p>
                    <p>
                        Church is about worshiping God together, encouraging one another in the faith, praying, 
                        reading the Bible, and then reaching out to the community as the hands and feet of Christ. 
                        Look for a church that teaches the Bible faithfully and closely follows the teachings of Jesus.
                    </p>
                </div>
            </div>
            <div className="locate">
                <div className="locatewrap">
                    <div className="locateinputwrap">
                        <div className="inputlocate">
                            <p>YOUR LOCATION</p>
                            <input 
                                type="text" 
                                className='location'
                            />
                        </div>
                        <div className="inputradius">
                            <p>SEARCH RADIUS</p>
                            <select name="radius" id="radius">
                                <option value="10km">10km</option>
                                <option value="25km">25km</option>
                                <option value="50km">50km</option>
                                <option value="100km">100km</option>
                                <option value="200km">200km</option>
                                <option value="500km">500km</option>
                            </select>
                        </div>
                        <div className="inputsearch">
                            <button>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChurchFind