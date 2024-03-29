import Link from "next/link";

const Home = () => (
    <>
    <div>
        <h1>SSR Magician</h1>
    </div>
    <div>
        <Link href="/about">
            <button style={{fontSize: '25px', color: "orange"}}>About page</button>
        </Link>
        {/* <a href="/about">About page</a> */}
    </div>
    <div>
        <h1>Robots</h1>
        <Link href="/robots">
            <button>Robots</button>
        </Link>
    </div>
    </>
)

export default Home;