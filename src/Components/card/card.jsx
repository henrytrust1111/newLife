import './card.css'

const ScrollCard = () => {
    return(
        <div className="scrollparent">
            <div className="scrollwrap">
                <div className="cardhold">
                    <div className="card">
                        <div className="cardtype">
                            <img src="https://images.unsplash.com/photo-1609701873392-c0a01f980f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGluayUyMHJvc2V8ZW58MHx8MHx8fDA%3D" />
                        </div>
                        <div className="cardname">
                            <p>SQUARE ONE</p>
                            <p>The Foundation of faith</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardtype">
                            <img
                                src="https://media.istockphoto.com/id/674833094/photo/cherry-tree-blossom.webp?b=1&s=170667a&w=0&k=20&c=ikzsCszETlsx8teyx5qoXs1SSUEYTrCfMn8311KwGx0="
                                alt=""
                            />
                        </div>
                        <div className="cardname">
                            <p>TELL ME MORE</p>
                            <p>Digging Deeper into Christianity</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardtype">
                        <img
                            src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMGFuZCUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                        />
                        </div>
                        <div className="cardname">
                            <p>BIBLE ANSWERS</p>
                            <p>A Topical Guide to Bible Verses</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardtype">
                        <img
                            src="https://media.istockphoto.com/id/1283368238/photo/beautiful-tree-at-the-beach-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=mrz9YIEqL9aEjqO6FOVeLY_WgxouiNedCBMgR98NsP4="
                            alt=""
                        />
                        </div>
                        <div className="cardname">
                            <p>READY TO CHANGE</p>
                            <p>Becomming a Follower of Christ</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="joinhold"></div> */}
        </div>
    )
}

export default ScrollCard