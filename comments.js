// Create web server
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),
  };