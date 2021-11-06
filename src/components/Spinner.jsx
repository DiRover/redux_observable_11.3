
function Spinner() {
    return (
        <div className="d-flex justify-content-center" style={{"marginTop": "30px"}}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
};

export default Spinner;