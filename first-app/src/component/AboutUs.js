import { useNavigate } from "react-router-dom";

const AboutUs = () => {

        const navigate = useNavigate();
        const clickHandler =()=>{
            navigate("/");
        }
        return (
            <div>
                <h1>About us</h1>
                <button onClick = {clickHandler}>Go Home</button>
            </div>
        );
}

export default AboutUs;
