const React = require('react');
const Def = require('../default');

function Show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    );

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😄'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            );
        });
    }

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
                            {comments}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={data.place.pic} alt={data.place.name} className="img-fluid" />
                    </div>
                    <div>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                            Edit
                        </a>  
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>     
                    </div>
                </div>
                <h2>Add a Comment</h2>
                <form action="/submit_comment" method="POST">
                    <div className="form-group">
                        <label htmlFor="author">Author:</label>
                        <input type="text" className="form-control" id="author" name="author" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label>
                        <textarea className="form-control" id="content" name="content"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="star_rating">Star Rating:</label>
                        <input type="number" className="form-control" id="star_rating" name="star_rating" step="0.5" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="rant" name="rant" />
                        <label className="form-check-label" htmlFor="rant">Rant</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        </Def>
    );
}

module.exports = Show;
