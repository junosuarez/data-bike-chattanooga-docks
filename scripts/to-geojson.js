var fs = require('fs')
var csv = require('binary-csv')
var through = require('through0')
var featureTransform = require('geojson-feature-transform')
var wrap = require('wrap-stream')


fs.createReadStream('data.csv')
  .pipe(csv({json:true}))
  .pipe(through(featureTransform({x: 'longitude', y: 'latitude'})))
  .pipe(through(JSON.stringify))
  .pipe(join())
  .pipe(wrap('{"type":"FeatureCollection","features":[',']}'))
  .pipe(fs.createWriteStream('data.geojson'))

function join(delim) {
  delim = delim || ','
  var first = true
  return through(function (x) {
    if (first) { first = false; return x}
    return delim + x
  })
}