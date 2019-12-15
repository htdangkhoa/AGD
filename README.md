# AGD

[![Greenkeeper badge](https://badges.greenkeeper.io/htdangkhoa/AGD.svg)](https://greenkeeper.io/)

## Introduce
AGD is a project to make it easier to create record in database. In this time, this project just support MongoDB.

## Requirement
  - [Node JS](https://nodejs.org/)
  - [MongoDB](https://www.mongodb.com/)
  
## Setup
1. Configure MongoDB host in ```config.js``` file.
  ```javascript
  module.exports = {
    "url": "mongodb://<host>:<port>/<database>"
  }
  ```
2. Configure your schema fields ```model/db.js``` file.
  ```javascript
  ...
  
  var User = new Schema({
    "ID": {
      type: String,
      default: uuid.v4()
    },
    "Name": {
      type: String
    },
    "Email": {
      type: String
    },
    ...
  });
  
  ...
  ```
 
## Running
```shell
$ node index.js <num>
```
`<num>`: Number of records you want to create.  

##### Example:
```shell
$ node index.js 10
```

## Advanced
```shell
mongoexport --csv --host <host>:<port> --db <database> --collection <collection> --fields <field1>,<field2>,<field3>,...  -o <filename>.csv
```
###### `***You can use this csv file to import to other database(MySQL, SQLServer, Postgress,...)***`
