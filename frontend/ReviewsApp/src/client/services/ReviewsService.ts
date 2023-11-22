/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReviewsService {

    /**
     * Read Reviews
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readReviewsReviewsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reviews/',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Read Review
     * @param reviewId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readReviewReviewsReviewIdGet(
reviewId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reviews/{review_id}',
            path: {
                'review_id': reviewId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Note
     * @param reviewId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateNoteReviewsReviewIdPut(
reviewId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/reviews/{review_id}',
            path: {
                'review_id': reviewId,
            },
            errors: {
                403: `Operation forbidden`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
