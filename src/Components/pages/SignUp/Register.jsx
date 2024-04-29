import { IoCloseSharp } from "react-icons/io5";
import "./signup.css";
import { FaApple } from "react-icons/fa";

const Register = ({setShow,setShow1}) => {
  const handleSignUp = ()=>{
    setShow1(true)
    setShow(false)
  }
  const handleClose = ()=>{
    // localStorage.setItem("SignIn", false)
    localStorage.removeItem("SignUp")
    // localStorage.removeItem("SignIn")
    setShow(false)
  }
  return (
    <div className="signUpContainer1">
      <div className="signupwrap">
        <div className="w-full flex justify-end p-2">
          <IoCloseSharp className="text-4xl cursor-pointer" onClick={handleClose} />
        </div>
        <div className="signuphold">
          <div className="w-full flex justify-between mb-2">
            <p className="w-[50%]">Sign in with</p>
            <p className="w-[50%]">
              Are you a Member Already?<span className="text-blue-500 cursor-pointer" onClick={handleSignUp}>Click here to Sign in</span>
            </p>
          </div>

          <div className="ios">
            <div className="ioswrap">
              <div className="iosicon">
                <FaApple />
              </div>
            </div>
          </div>
          <div className="namehold">
            <div className="leftname">
              <p>FIRST NAME</p>
              <input
                type="text"
                placeholder="first name"
                className="nameinput"
              />
            </div>
            <div className="leftname">
              <p>LAST NAME</p>
              <input
                type="text"
                placeholder="last name"
                className="nameinput"
              />
            </div>
          </div>
          <div className="namehold namehold2">
            <div className="leftname">
              <p>USER NAME</p>
              <input
                type="text"
                placeholder="user name"
                className="nameinput"
              />
              <p>please use only alphanumeric characters and underscore</p>
            </div>
            <div className="leftname">
              <p>EMAIL</p>
              <input type="email" placeholder="email" className="nameinput" />
              <p style={{ color: "transparent" }}>p</p>
            </div>
          </div>
          <div className="namehold">
            <div className="leftname">
              <p>PASSWORD</p>
              <input
                type="password"
                placeholder="password"
                className="nameinput"
              />
            </div>
            <div className="leftname">
              <p>CONFIRM PASSWORD</p>
              <input
                type="password"
                placeholder="confirm password"
                className="nameinput"
              />
            </div>
          </div>
          <div className="otherrequirement">
            <div className="require">
              <p>DAILY INSPIRATION EMAIL</p>
              <div className="confirm">
                <input type="checkbox" />
                <p>Send daily inspiration to my e-mail</p>
              </div>
            </div>
            <div className="require">
              <p>EMAIL UPDATES</p>
              <div className="confirm">
                <input type="checkbox" />
                <p>
                  I want to stay up-to-date! Send me occasional email updates.
                </p>
              </div>
            </div>
          </div>
          <div className="region">
            <div className="languagehold">
              <p>PREFERED LANGUAGE</p>
              <select name="language" id="language" className="">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <div className="languagehold">
              <p>TIME ZONE</p>
              <select name="language" id="language">
                <option value="English">
                  (GMT+3:00) Baghdad, Riyadh, Moscow, St.Petersburg
                </option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>
          <div className="faithhold">
            <div className="faith">
              <p>ARE YOU A PERSON OF FAITH ?</p>
              <div className="faithans">
                <div>
                  <input type="radio" name="yes" />
                  <p>YES</p>
                </div>
                <div>
                  <input type="radio" name="yes" />
                  <p>NO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="engagewrap">
            <div className="consider">
              <p>I CONSIDER MYSELF A:</p>
              <select name="denom" id="denom">
                <option value="CHOOSE YOUR FAITH">CHOOSE YOUR FAITH</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Catholic">Catholic</option>
                <option value="Christian">Christian</option>
                <option value="Hindu">Hindu</option>
                <option value="Jew">Jew</option>
                <option value="Muslim">Muslim</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="promise">
              <div className="oath">
                <p>HOW ENGAGED ARE YOU IN YOUR FAITH?</p>
              </div>
              <div className="oathoption">
                <div>
                  <input type="radio" name="oath" />
                  <p>undefined</p>
                </div>
                <div>
                  <input type="radio" name="oath" />
                  <p>Non-practicing</p>
                </div>
                <div>
                  <input type="radio" name="oath" />
                  <p>Disillusioned</p>
                </div>
                <div>
                  <input type="radio" name="oath" />
                  <p>in the middle</p>
                </div>
                <div>
                  <input type="radio" name="oath" />
                  <p>Enthusiastic</p>
                </div>
                <div>
                  <input type="radio" name="oath" />
                  <p>Actively involved</p>
                </div>
              </div>
            </div>
          </div>
          <div className="registerbutton">
            <button>JOIN NEWLIFE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
