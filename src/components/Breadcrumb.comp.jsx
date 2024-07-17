const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb">
            <span>
                Inventory 
                {props.category && ` / ${props.category}`}
                {props.subcategory && ` / ${props.subcategory}`}
            </span>
        </div>
    );
}

export default Breadcrumb;