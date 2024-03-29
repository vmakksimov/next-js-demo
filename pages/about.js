import Link from "next/link"
import Image from "../components/image";
const About = () => {
    return (
        <div>
            <h1>About page</h1>
            <Image/>
            <Link href="/">
                <button style={{color: "red", fontSize: '15px'}}>Home Page</button>
            </Link>
        </div>
    )
}

export default About;