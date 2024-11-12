import { Link } from "react-router-dom"

const Error = () => {
    return <section>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p><Link to="/">Back to home page</Link></p>
    </section>
}

export default Error