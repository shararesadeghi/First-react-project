import { useNavigate, Link, Outlet} from "react-router-dom";

const AboutUs = () => {

        const navigate = useNavigate();
        const clickHandler =()=>{
            navigate("/");
        }
        return (
            <div>
                <h1>About us</h1>
                <button onClick = {clickHandler}>Go Home</button>
                <ul>
                    <li><Link to = "programmers">Programmers</Link></li>
                    <li><Link to = "drivers">Driversers</Link></li>
                    <Outlet/>
                </ul>
                
            </div>
        );
}

export default AboutUs;
