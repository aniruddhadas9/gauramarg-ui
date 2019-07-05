/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Attendance } from '../model/attendance';
import { Message } from '../model/message';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * delete
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: string, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public deleteUsingDELETE(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public deleteUsingDELETE(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public deleteUsingDELETE(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<Message>(`${this.configuration.basePath}/attendance/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByCourseId
     *
     * @param courseId courseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByCourseIdUsingGET(courseId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Attendance>>;
    public getByCourseIdUsingGET(courseId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Attendance>>>;
    public getByCourseIdUsingGET(courseId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Attendance>>>;
    public getByCourseIdUsingGET(courseId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (courseId === null || courseId === undefined) {
            throw new Error('Required parameter courseId was null or undefined when calling getByCourseIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Attendance>>(`${this.configuration.basePath}/attendance/courseId/${encodeURIComponent(String(courseId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByStudentId
     *
     * @param studentId studentId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByStudentIdUsingGET(studentId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Attendance>>;
    public getByStudentIdUsingGET(studentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Attendance>>>;
    public getByStudentIdUsingGET(studentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Attendance>>>;
    public getByStudentIdUsingGET(studentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (studentId === null || studentId === undefined) {
            throw new Error('Required parameter studentId was null or undefined when calling getByStudentIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Attendance>>(`${this.configuration.basePath}/attendance/studentId/${encodeURIComponent(String(studentId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByTeacherId
     *
     * @param teacherId teacherId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByTeacherIdUsingGET(teacherId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Attendance>>;
    public getByTeacherIdUsingGET(teacherId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Attendance>>>;
    public getByTeacherIdUsingGET(teacherId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Attendance>>>;
    public getByTeacherIdUsingGET(teacherId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (teacherId === null || teacherId === undefined) {
            throw new Error('Required parameter teacherId was null or undefined when calling getByTeacherIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Attendance>>(`${this.configuration.basePath}/attendance/teacherId/${encodeURIComponent(String(teacherId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * get
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Attendance>>;
    public getUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Attendance>>>;
    public getUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Attendance>>>;
    public getUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Attendance>>(`${this.configuration.basePath}/attendance`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * post
     *
     * @param attendance attendance
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUsingPOST(attendance: Attendance, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public postUsingPOST(attendance: Attendance, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public postUsingPOST(attendance: Attendance, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public postUsingPOST(attendance: Attendance, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (attendance === null || attendance === undefined) {
            throw new Error('Required parameter attendance was null or undefined when calling postUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Message>(`${this.configuration.basePath}/attendance`,
            attendance,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * put
     *
     * @param attendance attendance
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putUsingPUT(attendance: Attendance, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public putUsingPUT(attendance: Attendance, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public putUsingPUT(attendance: Attendance, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public putUsingPUT(attendance: Attendance, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (attendance === null || attendance === undefined) {
            throw new Error('Required parameter attendance was null or undefined when calling putUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Message>(`${this.configuration.basePath}/attendance`,
            attendance,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * update
     *
     * @param attendance attendance
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingGET(attendance: Attendance, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public updateUsingGET(attendance: Attendance, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public updateUsingGET(attendance: Attendance, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public updateUsingGET(attendance: Attendance, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (attendance === null || attendance === undefined) {
            throw new Error('Required parameter attendance was null or undefined when calling updateUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.get<Message>(`${this.configuration.basePath}/attendance/update`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
