'use strict';
app.factory('authentication', function() {
    var key = 'user';

    function saveUserData(data) {
        localStorage.setItem(key, angular.toJson(data));
    }

    function getUserData() {
       return angular.fromJson(localStorage.getItem(key));
    }

    function getHeaders(argument) {
        var headers = {};
       var dataUser = getUserData();
        if(dataUser) {
            headers.Authorization = 'Bearer ' + getUserData().access_token;
        }

        return headers;
    }

    function removeUser() {
        localStorage.removeItem(key);
    }

    function isAdmin() {
        var isAdmin = getUserData().isAdmin;
        return isAdmin;
    }

    function isLoggedIn() {
        return !!getUserData();
    }

    function getCurrentUser() {
        var currentUser = '';
        var dataUser = getUserData();
        if (dataUser) {
            var currentUser = getUserData().username;
        };

         return currentUser;
    }
    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        removeUser: removeUser,
        isAdmin: isAdmin,
        isLoggedIn: isLoggedIn,
        getCurrentUser: getCurrentUser
    }

})

// app.factory('authService', 
//     function ($resource, baseServiceUrl) {
//         return {
//             login: function(userData, success, error) {
//                 // TODO
//             },

//             register: function(userData, success, error) {
//                 // TODO
//             },

//             logout: function() {
//                 // TODO
//             },

//             getCurrentUser : function() {
//                 // TODO
//             },s

//             isAnonymous : function() {
//                 // TODO
//             },

//             isLoggedIn : function() {
//                 // TODO
//             },

//             isNormalUser : function() {
//                 // TODO
//             },

//             isAdmin : function() {
//                 // TODO
//             },

//             getAuthHeaders : function() {
//                 // TODO
//             }
//         }
//     }
// );
