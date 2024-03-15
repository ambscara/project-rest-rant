const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/css/main.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <script>
               document.getElementById('copyright-year').innerText = 
                  new Date().getFullYear();
                </script>
            </body>
            <footer class="footer bg-dark">
    <div className="container">
      <p>Copyright <span id="copyright-year"></span>Amber Eakins</p>
    </div>
  </footer>
        </html>
    )
}

module.exports = Def
