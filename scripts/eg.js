var request = require('request')
var JSONStream = require('JSONStream')
var csvWriter = require('csv-write-stream')
var fs = require('fs')
var through = require('through0')
var filter = require('stream-filter')
var featureTransform = require('geojson-feature-transform')
var limit = require('limit-stream')

request('http://bikechattanooga.com/stations/json/')
  .pipe(JSONStream.parse('stationBeanList.*'))
  .pipe(limit(1))
  .pipe(filter(function (x) { return !x.testStation }))
  // .pipe(through(function (x) {
  //   return {
  //     id: x.id,
  //     stationName: x.stationName,
  //     totalDocks: x.totalDocks,
  //     latitude: x.latitude,
  //     longitude: x.longitude,
  //     landMark: x.landMark
  //   }
  // }))
  .pipe(through(featureTransform({x: 'longitude', y: 'latitude'})))
  .on('data', function (x) { console.log(JSON.stringify(x, null, 2))})