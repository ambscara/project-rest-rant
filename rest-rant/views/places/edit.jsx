const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="GET" action={'/places/${data.place.id}?_method=PUT'}>
                <div className="row">
                 <div className="form-group">
                  <label htmlFor="name">Place Name</label>
                  <input className="form-control" id="name" name="name" value={data.place.name} required />
                 </div>
                 <div className="form-group">
                   <label htmlFor="pic">Place Picture</label>
                   <input className="form-control" id="pic" name="pic" value={data.place.name} />
                 </div>
                 <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input className="form-control" id="city" name="city" value={data.place.name} />
                 </div>
                 <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input className="form-control" id="state" name="state" value={data.place.name} />
                </div>
                <div className="form-group">
                  <label htmlFor="cuisines">Cuisines</label>
                  <input className="form-control" id="cuisines" name="cuisines" value={data.place.name} required />
                </div>
                  <input className="btn btn-primary" type="submit" value="Update Place" />
                  </div>
            </form>
            <div class="row mt-3">
      <div class="col-md-6">
        <button type="button" class="btn btn-primary"><i class="bi bi-pencil-fill me-2"></i>Edit</button>
        <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill me-2"></i>Delete</button>
      </div>
      <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input className="form-control" 
              id="founded" 
              name="founded" 
              value={data.place.founded} 
            />
        </div>
    </div>
          </main>
        </Def>
    )
}

module.exports = edit_form
