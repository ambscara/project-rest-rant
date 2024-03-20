const React = require('react')
const Def = require('../default')

function new_form (data) {
  let message = 'Sorry. you are on your own'
  if (data.message) { 
      message = (
          <h4 classname="alert-danger">
              { data.message}
          </h4>
      )
  }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {'Sorry. you are on your own'}
             <form method="POST" action="/places">
                 <div className="form-group">
                  <label htmlFor="name">Place Name</label>
                  <input className="form-control" id="name" name="name" required />
                 </div>
                 <div className="form-group">
                   <label htmlFor="pic">Place Picture</label>
                   <input className="form-control" id="pic" name="pic" />
                 </div>
                 <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input className="form-control" id="city" name="city" />
                 </div>
                 <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input className="form-control" id="state" name="state" />
                </div>
                <div className="form-group">
                  <label htmlFor="cuisines">Cuisines</label>
                  <input className="form-control" id="cuisines" name="cuisines" required />
                </div>
                  <input className="btn btn-primary" type="submit" value="Add Place" />
                  <div className="form-group">
                    <label for="founded">Founded Year</label>
                   <input 
                   type="number"
                   className="form-control" 
                   id="founded"
                   name="founded"
                   value={new Date () .getFullYear()} />
                </div>


        
            </form>
            </main>
        </Def>
    )
}

module.exports = new_form