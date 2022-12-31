import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const [UserName, setUserName] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Tecnologies, setTecnologies] = useState("");

    const Dropdown = (event) => {
        setTecnologies(event.target.value)
    }
    const NextPage = useNavigate()
    const Show = () => {
        if (UserName.trim() === "") {
            alert("username can't be empty")
        }
        else if (UserName.length < 5) {
            alert("Username length should be minimum 5")
        }
        else if (UserName.length > 15) {
            alert("Username length should be maximum 15")
        }
        else if(EmailId.trim()===""){
            alert("email id can't be empty")
        }
        else if(!EmailId.includes("@",".")){
            alert("Invalid email")
        }
        else if(Password.trim()===""){
            alert("password can't be empty")
        }
        else if(ConfirmPassword.trim()===""){
            alert("Verify password can't be empty")
        }
        else if(Password!==ConfirmPassword){
            alert("value of password and verify password are not match")
        }
        else{
            NextPage('/dashbord');
        }
    }

    return (
        <div className="secondmaindiv">
            <form>
                <label>UserName<span>*</span>
                    <input
                        type="text"
                        value={UserName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>

                <label>Email<span>*</span>
                    <input
                        type="email"
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </label>

                <label>Password<span>*</span>
                    <input
                        type="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label>Confirm password<span>*</span>
                    <input
                        type="password"
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

                <label>Tecnologies<span>*</span>
                    <br />
                    <select value={Tecnologies} onChange={Dropdown}>
                        <option value="Javascript">Javascript</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="Scala">Scala</option>
                        <option value="Spark">Spark</option>
                    </select>
                </label>

                <button onClick={() => Show()}>Submit</button>

            </form>
        </div>
    );
}
export default Home;