var config = {}

config.databaseURL = 'mongodb://pserv:pserv1@ds241055.mlab.com:41055/purchase-service';
config.orderServiceURLtoUpdateWithPurchase = "http://3amigoso.azurewebsites.net/order/PurchasingUpdate/"; //"http://localhost:3004/PurchasingUpdate";
config.testDatabaseURL = "mongodb://pserv:pserv1@ds121726.mlab.com:21726/test-purchase-service";
config.AdminServicePurchaseURL = "https://peaceful-caverns-91545.herokuapp.com/purchasing/test";
config.stockServiceUpdaterURL= "http://3amigoss.azurewebsites.net/api/newproducts";

config.secret = 'jwtsecret'
module.exports = config;

