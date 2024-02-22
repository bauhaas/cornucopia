/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Get a user by his id
     * @returns any OK
     * @throws ApiError
     */
    public static usersControllerGetUser({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        id: number;
        email: string;
        displayTop10: boolean;
        displayRecentlyWatched: boolean;
        displayWatchlist: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerGetByMail({
        mail,
    }: {
        mail: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/mail/{mail}',
            path: {
                'mail': mail,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerPostWatchedMovie({
        id,
        movieId,
    }: {
        id: number,
        movieId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/{id}/watched-movie',
            path: {
                'id': id,
            },
            query: {
                'movieId': movieId,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerGetWatchedMovies({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}/watched-movies',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a user settings
     * @returns void
     * @throws ApiError
     */
    public static usersControllerUpdateUserSettings({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: {
            /**
             * display top 10 movies category
             */
            displayTop10?: boolean;
            /**
             * display recently watched movies category
             */
            displayRecentlyWatched?: boolean;
            /**
             * display the movies watchlist category
             */
            displayWatchlist?: boolean;
        },
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/users/{id}/settings',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
