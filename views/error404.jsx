const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
              <img src="public/images/angrycat.jpg" alt="Angry Cat"/>
              </div>
              <div>
                Photo by <a href="AUTHOR_LINK">Cyrus Chew</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
module.exports = error404
