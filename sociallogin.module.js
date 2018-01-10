/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService, AuthServiceConfig } from "./auth.service";
/**
 * @param {?} config
 * @return {?}
 */
export function configFactory(config) {
    return config;
}
var SocialLoginModule = /** @class */ (function () {
    function SocialLoginModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    SocialLoginModule.initialize = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: SocialLoginModule,
            providers: [
                AuthService,
                {
                    provide: AuthServiceConfig,
                    useValue: config
                }
            ]
        };
    };
    SocialLoginModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        AuthService
                    ]
                },] },
    ];
    /** @nocollapse */
    SocialLoginModule.ctorParameters = function () { return []; };
    return SocialLoginModule;
}());
export { SocialLoginModule };
function SocialLoginModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SocialLoginModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SocialLoginModule.ctorParameters;
}
