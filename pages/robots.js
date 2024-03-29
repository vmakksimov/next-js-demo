import Link from "next/link";
import fetch from 'isomorphic-unfetch';


const Robots = (props) => {
    return (
        <>
            <div>
                <h1>Home</h1>
                <Link href="/">
                    <button>Home</button>
                </Link>
            </div>
            <div>
                <h1>Robots</h1>
                {props.robots.map(robot => (


                    <li key={robot.id}>
                        <Link href={`/robots/${robot.id}`}>
                            {robot.name}
                        </Link>

                    </li>

                ))}
            </div>
        </>
    )
}

Robots.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    return {
        robots: data
    }
}

export default Robots;