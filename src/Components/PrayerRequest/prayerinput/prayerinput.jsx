import './prayerinput.css'

const YourPrayer = () => {
    return(
        <div className="prayerparent">
            <div className="prayerwrapper">
                <div className="prayerpoint">
                    <div className="pray">
                        <p>
                            There are communities of Christians who would like to pray for you. When you submit a prayer request, they will notify you and pray for you.
                        </p>
                    </div>
                    <div className="praywrapinput">
                        <p>SHORT DESCRIPTION</p>
                        <input
                            type="text"
                            placeholder='50 words or less, please'
                         />
                    </div>
                    <div className="prayeroption">
                        <div className='ccc'>
                            <input type="checkbox" name='ccc' /> <p>Health</p>
                        </div>
                        <div className='ccc'>
                            <input type="checkbox" name='ccc' /> <p>Temptation</p>
                        </div>
                        <div className='ccc'>
                            <input type="checkbox" name='ccc' /> <p>Finance</p>
                        </div>
                        <div className='ccc'>
                            <input type="checkbox" name='ccc' /> <p>Address</p>
                        </div>
                        <div className='ccc'>
                            <input type="checkbox" name='ccc' /> <p>Mariage</p>
                        </div>
                        <div className='ccc'>
                            <input type="checkbox" name='ccc' /> <p>Depression</p>
                        </div>
                        <div className='ccc'>
                            <input type="checkbox" name='ccc' /> <p>Anxiety</p>
                        </div>
                    </div>
                    <div className="praywrapinput">
                        <p>BACKGROUND</p>
                        <input
                            type="text"
                            placeholder='unlimited characters'
                         />
                    </div>
                    <div className="prayeroption">
                        <div className="ccc2">
                            <input type="checkbox" />
                            <p>We can share this outside of our prayer team</p>
                        </div>
                    </div>
                    <div className="praybuthold">
                        <button>SUBMIT YOUR PRAYER REQUEST</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourPrayer