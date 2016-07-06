var fs = require("fs")
var jade = require("jade")
var path = require('path')
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

var juice = require("juice")

function MailGun (config){

this.nodemailerMailgun = nodemailer.createTransport(mg(config));

}
MailGun.prototype.sendmail = function (options, cb ){
  
  this.nodemailerMailgun.sendMail({
    from: options.from,//'contact@bitcard.fr',
    to: options.to, // An array if you have multiple recipients.
    subject: options.subject,
    html:options.content
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
      cb(err, null)
    }
    else {
      console.log('Response: ' + JSON.stringify(info));
      cb(null, info)
    }
  });
}

MailGun.prototype.buildTemplate = function(templatePath, context, cb){

  juice.juiceResources(jade.renderFile(templatePath,context), {}, function(err,html){
    if(err){
      console.log(err)

    }else{
     cb(null, html)
  
   }
  })
}


module.exports = MailGun  


