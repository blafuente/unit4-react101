// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT

function Card(props){
    console.log(props);
    const name = props.name;
    // const title = "React From the Beginning";
    const title = props.title;
    const image = props.image;
    const saleOn = true;

    return (
        // <div className="row">
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src={image} />
                    </div>
                    <div className="card-content">
                        <p>{title}</p>
                        <p>{name}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">${saleOn  ? 9.99 : 59.99}</a>
                    </div>
                </div>
            </div>    
        // </div>
    )   
}


