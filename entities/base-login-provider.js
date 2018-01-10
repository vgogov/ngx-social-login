/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LoginProvider } from "./login-provider";
import { SocialUser } from "./user";
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseLoginProvider = /** @class */ (function () {
    function BaseLoginProvider() {
    }
    /**
     * @param {?} id
     * @param {?} src
     * @param {?} onload
     * @return {?}
     */
    BaseLoginProvider.prototype.loadScript = /**
     * @param {?} id
     * @param {?} src
     * @param {?} onload
     * @return {?}
     */
    function (id, src, onload) {
        if (document.getElementById(id)) {
            return;
        }
        var /** @type {?} */ signInJS = document.createElement("script");
        signInJS.async = true;
        signInJS.src = src;
        signInJS.onload = onload;
        document.head.appendChild(signInJS);
    };
    return BaseLoginProvider;
}());
/**
 * @abstract
 */
export { BaseLoginProvider };
function BaseLoginProvider_tsickle_Closure_declarations() {
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.initialize = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signIn = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseLoginProvider.prototype.signOut = function () { };
}
