import './profile.css'

const FullProfile = () => {
    return(
        <div className="myprofileparent">
            <div className="profilewrap">
                <div className="profilehold">
                    <div className="profileleft">
                        <div className="profilehead">
                            <div className="profilepic">
                                <img src="https://theemon.com/c/charity/LivePreview/assets/img/img-slide-04.jpg" alt="" />
                            </div>
                        </div>
                        <div className="profilename">
                            <div className='name'>
                                <p>Midnight Illusions</p>
                            </div>
                            <div className='member'>
                                <span>MEMBER SINCE:</span>
                                <p>october 2020</p>
                            </div>
                            <div className='member'>
                                <span>FAITH:</span>
                                <p>others</p>
                            </div>
                            <button id='editon'>EDIT PROFILE</button>
                        </div>
                    </div>
                    <div className="profileright">
                        <div className="inspiration">
                            <p>DAILY INSPIRATION</p>
                            <span>
                                Be encouraged every day! Choose a Daily Inspirations plan and receive a verse from the 
                                Bible each day in your email. You’ll also receive the verse on your mobile device when 
                                you’re logged into the NewLife app.
                            </span>
                        </div>
                        <div className="otherpro">
                            <div className="otherprowrap">
                                <div className="wrapperpic">
                                    <p>CHRISTIANITY</p>
                                    <p>101</p>
                                    <p>45 DAYS</p>
                                </div>
                                <div className="wrapperpic">
                                    <p>FAITH</p>
                                    <p>101</p>
                                    <p>31 DAYS</p>
                                </div>
                                <div className="wrapperpic">
                                    <p>GOD'S LOVE FOR ME</p>
                                    <p>90 DAYS</p>
                                </div>
                            </div>
                            <div className="otherprowrap">
                                <div className="wrapperpic">
                                    <p>GRACE $ REDEMPTION</p>
                                    <p>31 DAYS</p>
                                </div>
                                <div className="wrapperpic">
                                <div className="wrapperpic">
                                    <p>JESUS QUOTES</p>
                                    <p>365 DAYS</p>
                                </div>
                                </div>
                                <div className="wrapperpic">
                                <div className="wrapperpic">
                                    <p>PAIN $ SUFFERING</p>
                                    <p>31 DAYS</p>
                                </div>
                                </div>
                            </div>
                            <div className="otherprowrap">
                                <div className="wrapperpic">
                                <div className="wrapperpic">
                                    <p>PSALMS AND PROVERBS</p>
                                    <p>365 DAYS</p>
                                </div>
                                </div>
                                <div className="wrapperpic">
                                <div className="wrapperpic">
                                    <p>RELATIONSHIPS</p>
                                    <p>30 DAYS</p>
                                </div>
                                </div>
                                <div className="wrapperpic">
                                <div className="wrapperpic">
                                    <p>WORK $ FINANCES</p>
                                    <p>31 DAYS</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="givetesty">
                            <p>MY TESTIMONY</p>
                            <button>ADD YOUR TESTIMONY</button>
                        </div>
                    </div>
                </div>
          
            </div>
        </div>
    )
}

export default FullProfile