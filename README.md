# simple wrapper for jade mail ant mailgun

```
var auth = {
  auth: {
    api_key: 'key-fqsddqsdq',
    domain: 'domain'
  }
}

var Gun = require("gunsmail")
var gun = new gun(auth)
var opt = {
  from:"",
  to:"",
  subject:"";
  html:"<html>string<string>"
}
gun.sendmail(e, 'contact@bitcard.fr', 'pg.bareges@gmail.com', function(e, r){console.log(e); console.log(err)}) 
```
