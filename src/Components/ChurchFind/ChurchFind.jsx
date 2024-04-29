import './findChurch.css'

const ChurchFind = () => {
    return(
        <div className="churchfindwrap">
            <div className="churchpic">
                <img src="./bkg.webp" alt="" />
                <div>
                    <h1>We'd love to see you this sunday</h1>
                    <i>Join a community of belivers to grow in your faith</i>
                </div>
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
                    <div className="searchfunctionbody">
                        <div className="churcharound">
                            <div className="churchaddress">
                                <div className="address">
                                    <p className='bold'>Guelph Church of Christ</p>
                                    <span>45 Home st Guelph, Ontario N1H2E4</span>
                                </div>
                                <div className="service">
                                    <span>SERVICE TIMES</span>
                                    <p className='bold'>10:30am</p>
                                </div>
                            </div>
                            <div className="churchaddress">
                                <div className="address">
                                    <p className='bold'>Guelph Church of Christ</p>
                                    <span>45 Home st Guelph, Ontario N1H2E4</span>
                                </div>
                                <div className="service">
                                    <span>SERVICE TIMES</span>
                                    <p className='bold'>10:30am</p>
                                </div>
                            </div>
                            <div className="churchaddress">
                                <div className="address">
                                    <p className='bold'>Guelph Church of Christ</p>
                                    <span>45 Home st Guelph, Ontario N1H2E4</span>
                                </div>
                                <div className="service">
                                    <span>SERVICE TIMES</span>
                                    <p className='bold'>10:30am</p>
                                </div>
                            </div>
                            <div className="churchaddress">
                                <div className="address">
                                    <p className='bold'>Guelph Church of Christ</p>
                                    <span>45 Home st Guelph, Ontario N1H2E4</span>
                                </div>
                                <div className="service">
                                    <span>SERVICE TIMES</span>
                                    <p className='bold'>10:30am</p>
                                </div>
                            </div>
                        </div>
                        <div className="churchmap">
                            <div className="mapitself">
                                <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChurchFind