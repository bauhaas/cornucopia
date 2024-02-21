/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerGetUser({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
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
}
