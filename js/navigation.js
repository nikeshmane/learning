var adminURL = "";
if (isproduction) {
  adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Home",
    classis: "active",
    anchor: "home",
    subnav: []
    
  }, {
    name: "Wallpapers",
    classis: "active",
    anchor: "wallpapers",
    subnav: []
  }, {
    name: "Gallary",
    classis: "active",
    anchor: "gallary",
    subnav: []
  }, {
    name: "Learn",
    classis: "active",
    anchor: "learn",
    subnav: []
  }, {
    name: "FAQ",
    classis: "active",
    anchor: "FAQ",
    subnav: []
  },{
    name: "Register",
    classis: "active",
    anchor: "Register",
    subnav: []
  },];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
