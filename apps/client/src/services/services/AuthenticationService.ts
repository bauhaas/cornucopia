/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static authenticationControllerSignIn(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/login',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static authenticationControllerGithubLogin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authentication/github',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static authenticationControllerGithubLoginCallback(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authentication/github/callback',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static authenticationControllerLogin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/test',
        });
    }
}
