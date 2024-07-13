import traeger from "../assets/traegerLogo.svg";

const ImageGrid = (images) => {

    const generateGridChildren = () => {
        
    }

    return (
        <div className="imageGridContainer">
            <div className="imageGridChild">
                <img
                src={traeger}/>
            </div>
            <div className="imageGridChild">
                <img
                src={traeger}/>
            </div>
            <div className="imageGridChild">
                <img
                src={traeger}/>
            </div>
            <div className="imageGridChild">
                <img
                src={traeger}/>
            </div>
            <div className="imageGridChild">
                <img
                src={traeger}/>
            </div>
            <div className="imageGridChild">
                <img
                src={traeger}/>
            </div>
        </div>
    );
}

export default ImageGrid;