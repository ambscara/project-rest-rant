const React = require('react');
const Def = require('../default');

function show (data) {
    return (
        <Def>
            <main className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                        <h1>{data.place.name}</h1>
                        <p>City: {data.place.city}</p>
                        <p>State: {data.place.state}</p>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <ul>
                            {data.place.cuisines.map((cuisine, index) => (
                                <li key={index}>{cuisine}</li>
                            ))}
                        </ul>
                        <div>
                            <h3>Rating:</h3>
                            <p>Currently unrated</p>
                        </div>
                        <div>
                            <h3>Comments:</h3>
                            <p>No comments yet!</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={data.place.pic} alt={data.place.name} className="img-fluid" />
                    </div>
                    <div>
                    <a href={'/places/${data.id}/edit'} className="btn btn-warning"> 
                        Edit
                    </a>  
                    <form method="POST" action={'/places/${data.id}}?_method=DELETE'}> 
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                    </form>     

                   </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;
