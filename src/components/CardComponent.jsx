
function Card({
    title,
    image = "https://authenticamalficoast.it/story/il-tempo-silente-di-atrani/",
    content,
    tags,
}) {
    return (
        <>
            <div className="card-container">
                <div className="card" style={{ width: "25rem" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {content}
                        </p>

                        <span>{tags.map((element) => {
                            if (element === "html") {
                                return (<span className="green-color" >#{element}</span>)
                            } if (element === "css") {
                                return (<span className="pink-color">#{element}</span>)
                            }
                            if (element === "js") {
                                return (<span className="yellow-color">#{element}</span>)
                            }
                            if (element === "php") {
                                return (<span className="red-color">#{element}</span>)
                            }
                        })}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;