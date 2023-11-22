/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignupInfo } from '../models/SignupInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Signup User
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static signupUserUsersSignupPost(
requestBody: SignupInfo,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read User Me
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readUserMeUsersMeGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Read User
     * @param username 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readUserUsersUsernameGet(
username: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
