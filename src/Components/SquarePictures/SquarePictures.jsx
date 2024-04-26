import "./allsquare.css";

const SquarePictures = () => {
  return (
    <div className="squarewrapcont">
      <div className="joinnewlifewrap">
        <div className="squarewrap">
          <div className="square">
            <img
              src="https://images.unsplash.com/photo-1609701873392-c0a01f980f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGluayUyMHJvc2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <p>
            SQUARE ONE: <span>The Foundation of faith</span>
          </p>
          {/* <span></span> */}
        </div>
        <div className="squarewrap">
          <div className="square">
            <img
              src="https://media.istockphoto.com/id/674833094/photo/cherry-tree-blossom.webp?b=1&s=170667a&w=0&k=20&c=ikzsCszETlsx8teyx5qoXs1SSUEYTrCfMn8311KwGx0="
              alt=""
            />
          </div>
          <p>
            TELL ME MORE: <span>Digging Deeper into Christianity</span>
          </p>
        </div>
        <div className="squarewrap">
          <div className="square">
            <img
              src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdCUyMGFuZCUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <p>
            BIBLE ANSWERS: <span>A Topical Guide to Bible Verses</span>
          </p>
        </div>
        <div className="squarewrap">
          <div className="square">
            <img
              src="https://media.istockphoto.com/id/1283368238/photo/beautiful-tree-at-the-beach-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=mrz9YIEqL9aEjqO6FOVeLY_WgxouiNedCBMgR98NsP4="
              alt=""
            />
          </div>
          <p>
            READY TO CHANGE: <span>Becomming a Follower of Christ</span>
          </p>
        </div>
      </div>
      <div className="newlifeinvite">
        <div className="newlifeivhold">
          <div className="joinhand">
            <h3>Join Newlife today</h3>
            <p>JOIN A COMMUNITY OF PRAYER</p>
            <p>GET DAILY INSPIRATION</p>
            <p>SELECT CUSTOM THEMES</p>
          </div>
          <div className="joinbutt">
            <button>SIGN IN</button>
            <button>SIGN UP FOR FREE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquarePictures;
