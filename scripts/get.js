var request = require('request')
var JSONStream = require('JSONStream')
var filter = require('stream-filter')
var through = require('through0')
var csvWriter = require('csv-write-stream')
var fs = require('fs')

request('http://bikechattanooga.com/stations/json/')
  .pipe(JSONStream.parse('stationBeanList.*'))
  .pipe(filter(function (x) { return !x.testStation }))
  .pipe(through(function (x) {
    return {
      id: x.id,
      stationName: x.stationName,
      totalDocks: x.totalDocks,
      latitude: x.latitude,
      longitude: x.longitude,
      landMark: x.landMark
    }
  }))
  .pipe(csvWriter())
  .pipe(fs.createWriteStream('data.csv'))