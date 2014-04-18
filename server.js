var express = require('express')
  , port    = process.env.port || 8888
  , app     = express();

/**
  * Serve static html files
  *
  * @method get
  * @route /*
  *
  */

app.get('/*', function(req, res) {
  var url = req.url.split('?')[0] //strip query params
    , host = req.headers.host.replace(/[^a-z.]/g, '')
    , page
    , file;

  if(url === '/') {
    page = '/index.html';
  } else {
    page = url.replace(/[^a-z0-9-_.\/]/g, '') //remove special chars
              .replace(/\/$/, ""); // remove trailing slash
  }

  if(url.indexOf('.') == -1 && url !== '/') {
    page = page + '.html';
  }

  file = __dirname + '/public' + page;

  res.setHeader('Cache-Control', 'public, max-age=31557600000');
  res.sendfile(file);
});

app.listen(port, function() {
  console.log("# listening on " + port);
});

app.use(function(err, req, res, next) {
  var host = req.headers.host.replace(/[^a-z.]/g, '')
    , file = __dirname + '/public/404.html';

  res.sendfile(file);
});


// To execute this as a background process just run this in your terminal: "nohup node server.js &"
// To kill run: "killall -9 node"
