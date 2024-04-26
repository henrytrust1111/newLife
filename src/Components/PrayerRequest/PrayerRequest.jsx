import './requestPrayer.css'

const PrayerRequest = () => {
    return(
        <div className="prayerwrap">
            <div className="requesthold">
                <p>We would like to pray for you</p>
            </div>
            <div className="requestbody">
                <div className="leftrequest">
                    <p>
                        WE invite you to share your request with us, so you dont have to be alone sharing what is in your heart
                    </p>
                    <p>
                    Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.
                    </p>
                    <button>REQUEST A PRAYER</button>
                </div>
            </div>
        </div>
    )
}

export default PrayerRequest