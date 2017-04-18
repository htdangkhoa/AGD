var uuid = require("uuid");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
	"ID": {
		type: String,
		default: uuid.v4()
	},
	"Name": {
		type: String
	},
	"Website": {
		type: String,
		default: ""
	},
	"EmailAddress": {
		type: String
	},
	"NonPrimaryE-mails": {
		type: String,
		default: ""
	},
	"OfficePhone": {
		type: String
	},
	"AlternatePhone": {
		type: String,
		default: ""
	},
	"Fax": {
		type: String,
		default: ""
	},
	"BillingStreet": {
		type: String,
		default: ""
	},
	"BillingCity": {
		type: String,
		default: ""
	},
	"BillingState": {
		type: String,
		default: "CA"
	},
	"BillingPostalCode": {
		type: String,
		default: ""
	},
	"BillingCountry": {
		type: String,
		default: "USA"
	},
	"ShippingStreet": {
		type: String,
		default: ""
	},
	"ShippingCity": {
		type: String,
		default: ""
	},
	"ShippingState": {
		type: String,
		default: "CA"
	},
	"ShippingPostalCode": {
		type: String,
		default: ""
	},
	"ShippingCountry": {
		type: String,
		default: "USA"
	},
	"Description": {
		type: String,
		default: ""
	},
	"Type": {
		type: String,
		default: "Customer"
	},
	"Industry": {
		type: String,
		default: ""
	},
	"AnnualRevenue": {
		type: String,
		default: ""
	},
	"Employees": {
		type: String,
		default: ""
	},
	"SICCode": {
		type: String,
		default: ""
	},
	"TickerSymbol": {
		type: String,
		default: ""
	},
	"ParentAccountID": {
		type: String,
		default: ""
	},
	"Ownership": {
		type: String,
		default: ""
	},
	"CampaignID": {
		type: String,
		default: ""
	},
	"Rating": {
		type: String,
		default: ""
	},
	"AssignedUserName": {
		type: String,
		default: ""
	},
	"AssignedTo": {
		type: String,
		default: ""
	},
	"DateCreated": {
		type: String,
		default: new Date()
	},
	"DateModified": {
		type: String,
		default: new Date()
	},
	"ModifiedBy": {
		type: Number,
		default: 1
	},
	"CreatedBy": {
		type: Number,
		default: 1
	},
	"Deleted": {
		type: Number,
		default: 0
	}
	
});

module.exports = mongoose.model("user", User);