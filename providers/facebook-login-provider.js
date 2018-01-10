var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BaseLoginProvider } from "../entities/base-login-provider";
import { SocialUser } from "../entities/user";
import { LoginOpt } from "../auth.service";
var FacebookLoginProvider = /** @class */ (function (_super) {
    __extends(FacebookLoginProvider, _super);
    function FacebookLoginProvider(clientId, opt, locale) {
        if (opt === void 0) { opt = { scope: 'email,public_profile' }; }
        if (locale === void 0) { locale = 'en_US'; }
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.opt = opt;
        _this.locale = locale;
        return _this;
    }
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(FacebookLoginProvider.PROVIDER_ID, "//connect.facebook.net/" + _this.locale + "/sdk.js", function () {
                FB.init({
                    appId: _this.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.9'
                });
                // FB.AppEvents.logPageView(); #FIX for #18
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        var /** @type {?} */ authResponse_1 = response.authResponse;
                        FB.api('/me?fields=name,email,picture,first_name,last_name', function (response) {
                            var /** @type {?} */ user = new SocialUser();
                            user.id = response.id;
                            user.name = response.name;
                            user.email = response.email;
                            user.photoUrl = "https://graph.facebook.com/" + response.id + "/picture?type=normal";
                            user.firstName = response.first_name;
                            user.lastName = response.last_name;
                            user.authToken = authResponse_1.accessToken;
                            resolve(user);
                        });
                    }
                });
            });
        });
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signIn = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            FB.login(function (response) {
                if (response.authResponse) {
                    var /** @type {?} */ authResponse_2 = response.authResponse;
                    FB.api('/me?fields=name,email,picture,first_name,last_name', function (response) {
                        var /** @type {?} */ user = new SocialUser();
                        user.id = response.id;
                        user.name = response.name;
                        user.email = response.email;
                        user.photoUrl = "https://graph.facebook.com/" + response.id + "/picture?type=normal";
                        user.firstName = response.first_name;
                        user.lastName = response.last_name;
                        user.authToken = authResponse_2.accessToken;
                        resolve(user);
                    });
                }
            }, _this.opt);
        });
    };
    /**
     * @return {?}
     */
    FacebookLoginProvider.prototype.signOut = /**
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            FB.logout(function (response) {
                resolve();
            });
        });
    };
    FacebookLoginProvider.PROVIDER_ID = "FACEBOOK";
    return FacebookLoginProvider;
}(BaseLoginProvider));
export { FacebookLoginProvider };
function FacebookLoginProvider_tsickle_Closure_declarations() {
    /** @type {?} */
    FacebookLoginProvider.PROVIDER_ID;
    /** @type {?} */
    FacebookLoginProvider.prototype.clientId;
    /** @type {?} */
    FacebookLoginProvider.prototype.opt;
    /** @type {?} */
    FacebookLoginProvider.prototype.locale;
}
