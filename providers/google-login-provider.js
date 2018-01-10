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
var GoogleLoginProvider = /** @class */ (function (_super) {
    __extends(GoogleLoginProvider, _super);
    function GoogleLoginProvider(clientId, opt) {
        if (opt === void 0) { opt = { client_id: clientId, scope: 'email' }; }
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.opt = opt;
        return _this;
    }
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(GoogleLoginProvider.PROVIDER_ID, "//apis.google.com/js/platform.js", function () {
                gapi.load('auth2', function () {
                    _this.auth2 = gapi.auth2.init(_this.opt);
                    _this.auth2.then(function () {
                        if (_this.auth2.isSignedIn.get()) {
                            var /** @type {?} */ user = new SocialUser();
                            var /** @type {?} */ profile = _this.auth2.currentUser.get().getBasicProfile();
                            var /** @type {?} */ token = _this.auth2.currentUser.get().getAuthResponse(true).access_token;
                            user.id = profile.getId();
                            user.name = profile.getName();
                            user.email = profile.getEmail();
                            user.photoUrl = profile.getImageUrl();
                            user.firstName = profile.getGivenName();
                            user.lastName = profile.getFamilyName();
                            user.authToken = token;
                            resolve(user);
                        }
                    });
                });
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signIn = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ promise = _this.auth2.signIn();
            promise.then(function () {
                var /** @type {?} */ user = new SocialUser();
                var /** @type {?} */ profile = _this.auth2.currentUser.get().getBasicProfile();
                var /** @type {?} */ token = _this.auth2.currentUser.get().getAuthResponse(true).access_token;
                user.id = profile.getId();
                user.name = profile.getName();
                user.email = profile.getEmail();
                user.photoUrl = profile.getImageUrl();
                user.authToken = token;
                resolve(user);
            });
        });
    };
    /**
     * @return {?}
     */
    GoogleLoginProvider.prototype.signOut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth2.signOut().then(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    GoogleLoginProvider.PROVIDER_ID = "GOOGLE";
    return GoogleLoginProvider;
}(BaseLoginProvider));
export { GoogleLoginProvider };
function GoogleLoginProvider_tsickle_Closure_declarations() {
    /** @type {?} */
    GoogleLoginProvider.PROVIDER_ID;
    /** @type {?} */
    GoogleLoginProvider.prototype.auth2;
    /** @type {?} */
    GoogleLoginProvider.prototype.clientId;
    /** @type {?} */
    GoogleLoginProvider.prototype.opt;
}
