'use strict';

app.factory('userData', function($resource, baseServiceUrl, authentication, notify) {

	function registerUser(user) {
        var resource = $resource(baseServiceUrl +'/user/register')
        .save(user);
        resource.$promise
        .then(function(data) {
        	authentication.saveUser(data);
        	authentication.getHeaders();
        	var username = authentication.getUser(data);
            console.log(authentication.getUser());
            console.log(username);
        	notify.showInfo("Rgistration successful!");
        });

        return resource;
    }

    function loginUser(user) {
    	var resource = $resource(baseServiceUrl +'/user/login')
        .save(user);
        resource.$promise
        .then(function(data) {
        	authentication.saveUser(data);
        	notify.showInfo("Login Successful!");
        });

        return resource;
    }

    // function logoutUser() {
    // 	return $resource(baseServiceUrl +'/user/logout')
    //     .save(user)
    //     .$promise
    //     .then(function(data) {
    //     	authentication.removeUser();
    //     	notify.showInfo("Logout successful!");
    //     }, function(error) {
    //     	notify.showError("The request is invalid: ", error);
    //     });
    // }

   return {
    login: loginUser,
    register: registerUser
   }
});