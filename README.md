# bike-chattanooga-docks
a `package.jsonld` datapackage for bike share locations in Chattanooga, TN, USA.


## formats
data is made available in csv and GeoJSON


## update frequency
as needed (no regular schedule)


## sources
The http://bikechattanooga.com website


## building the dataset
The scripts used to build the dataset are included in this package. Requires Node.js.
From the project root directory:
```console
$ npm install
$ npm start
```
This generates the `data.csv` and `data.geojson` files. Existing files will be overwritten.


## contributing
please report bugs, issues, or inaccuracies in the [github issues][]

*also* I'm looking for feedback on the format of this packaging. I am aligning around [ongoing work to define a linked data package standard](https://github.com/dataprotocols/dataprotocols/issues/110).

## license
by jden <jason@denizac.org>
scripts in `/scripts` directory licensed under [ISC][]
all other contents, and this package as a whole, licesed under [PDDL][]


[github issues]: https://github.com/jden/data-bike-chattanooga-docks/issues
[ISC]: http://opensource.org/licenses/ISC
[PDDL]: http://www.opendatacommons.org/licenses/pddl/1.0/