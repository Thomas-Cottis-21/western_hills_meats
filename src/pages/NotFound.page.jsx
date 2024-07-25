import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <section className="notFound">
            <Helmet>
                <title>Page Not Found!</title>
            </Helmet>
            <h1 className="light">Looks like this page got grilled...</h1>
            <p className="subtitle light">
                Click one of the links below or use the navigation bar above to return to our website!
            </p>
        </section>
    );
}

export default NotFound;