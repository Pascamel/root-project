angular.module('scApp').service('Session', function ($facebook, USER_ROLES) {

    this.create = function (user) {
        //console.log(0, user);
        if (user.status == "connected" && true) {
            this.facebookId = user.authResponse.userID;
            this.userRole = USER_ROLES.user;
            var _this = this;
            //$facebook.cachedApi('/me')
            $facebook.api("/me").then(function(response) {
                    _this.userName = response.name;
                },
                function() {
                    this.destroy();
                });
            return;
        }
        if (user.status == "not_authorized") {
            this.destroy();
            return;
        }
    };

    this.destroy = function () {
        this.facebookId = null;
        this.userName = null;
        this.userRole = null;
    };
});