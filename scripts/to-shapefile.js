var geojson2shape = require('geojson2shape')
geojson2shape('data.json', 'data.shp', function(err){
  if(err) throw err
})