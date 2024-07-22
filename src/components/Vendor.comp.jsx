import { useNavigate } from "react-router-dom";

const Vendor = () => {

    const navigate = useNavigate();

    handleVendorGetStarted = () => {
        navigate("/vendor");
    };

    return (
        <div className="vendor">
            <h1 className="title">
                Need Meat for your Restaurant?
            </h1>
            <p className="subtitle">
                We've got you covered
            </p>
            <button onClick={handleVendorGetStarted}>Get Started!</button>
        </div>
    );
}

export default Vendor;