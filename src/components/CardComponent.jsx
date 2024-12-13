
function Card() {
    return (
        <>
            <div className="card-container">
                <div className="card" style={{ width: "25rem" }}>
                    <img src="/img/shrek.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-outline-warning">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;