const ImageGrid = ({images}) => {

    return (
        <div className="imageGridContainer">
            {images.map((image, index) => (
                <div key={index} className="imageGridChild">
                    <img src={image}/>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;