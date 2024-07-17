import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    return (
			<div className="breadcrumb">
				<span>
					{<Link to={"/inventory"}>Inventory</Link>}
					{props.category && (
                        <>
                            {" / "}
                            <Link to={`/inventory/${props.category}`}>{props.category}</Link>
                        </>
                    )}
                    {props.subcategory && (
                        <>
                            {" / "}
                            {props.subcategory}
                        </>
                    )}
				</span>
			</div>
		);
}

export default Breadcrumb;