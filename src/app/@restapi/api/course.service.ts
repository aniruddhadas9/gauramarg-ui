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
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { Course } from '../model/course';
import { Message } from '../model/message';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * coursesByKeys
     * @param course course
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public coursesByKeysUsingPOST(course: Array<Course>, observe?: 'body', reportProgress?: boolean): Observable<Array<Course>>;
    public coursesByKeysUsingPOST(course: Array<Course>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Course>>>;
    public coursesByKeysUsingPOST(course: Array<Course>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Course>>>;
    public coursesByKeysUsingPOST(course: Array<Course>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (course === null || course === undefined) {
            throw new Error('Required parameter course was null or undefined when calling coursesByKeysUsingPOST.');
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

        return this.httpClient.post<Array<Course>>(`${this.configuration.basePath}/course/coursesByKeys`,
            course,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * delete
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE1(id: string, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public deleteUsingDELETE1(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public deleteUsingDELETE1(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public deleteUsingDELETE1(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE1.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
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


        return this.httpClient.delete<Message>(`${this.configuration.basePath}/course`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByLocation
     * @param location location
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByLocationUsingGET(location: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Course>>;
    public getByLocationUsingGET(location: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Course>>>;
    public getByLocationUsingGET(location: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Course>>>;
    public getByLocationUsingGET(location: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (location === null || location === undefined) {
            throw new Error('Required parameter location was null or undefined when calling getByLocationUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (location !== undefined && location !== null) {
            queryParameters = queryParameters.set('location', <any>location);
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


        return this.httpClient.get<Array<Course>>(`${this.configuration.basePath}/course/location`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByName
     * @param name name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByNameUsingGET(name: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Course>>;
    public getByNameUsingGET(name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Course>>>;
    public getByNameUsingGET(name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Course>>>;
    public getByNameUsingGET(name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getByNameUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
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


        return this.httpClient.get<Array<Course>>(`${this.configuration.basePath}/course/name`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByStartDate
     * @param startDate startDate
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByStartDateUsingGET(startDate: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Course>>;
    public getByStartDateUsingGET(startDate: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Course>>>;
    public getByStartDateUsingGET(startDate: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Course>>>;
    public getByStartDateUsingGET(startDate: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getByStartDateUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (startDate !== undefined && startDate !== null) {
            queryParameters = queryParameters.set('startDate', <any>startDate);
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


        return this.httpClient.get<Array<Course>>(`${this.configuration.basePath}/course/startDate`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByTeacherId
     * @param teacherId teacherId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByTeacherIdUsingGET1(teacherId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Course>>;
    public getByTeacherIdUsingGET1(teacherId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Course>>>;
    public getByTeacherIdUsingGET1(teacherId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Course>>>;
    public getByTeacherIdUsingGET1(teacherId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (teacherId === null || teacherId === undefined) {
            throw new Error('Required parameter teacherId was null or undefined when calling getByTeacherIdUsingGET1.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (teacherId !== undefined && teacherId !== null) {
            queryParameters = queryParameters.set('teacherId', <any>teacherId);
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


        return this.httpClient.get<Array<Course>>(`${this.configuration.basePath}/course/teacherId`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * get
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsingGET1(observe?: 'body', reportProgress?: boolean): Observable<Array<Course>>;
    public getUsingGET1(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Course>>>;
    public getUsingGET1(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Course>>>;
    public getUsingGET1(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<Course>>(`${this.configuration.basePath}/course`,
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
     * @param course course
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUsingPOST1(course: Course, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public postUsingPOST1(course: Course, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public postUsingPOST1(course: Course, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public postUsingPOST1(course: Course, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (course === null || course === undefined) {
            throw new Error('Required parameter course was null or undefined when calling postUsingPOST1.');
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

        return this.httpClient.post<Message>(`${this.configuration.basePath}/course`,
            course,
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
     * @param course course
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putUsingPUT1(course: Course, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public putUsingPUT1(course: Course, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public putUsingPUT1(course: Course, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public putUsingPUT1(course: Course, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (course === null || course === undefined) {
            throw new Error('Required parameter course was null or undefined when calling putUsingPUT1.');
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

        return this.httpClient.put<Message>(`${this.configuration.basePath}/course`,
            course,
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
     * @param course course
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingGET1(course: Course, observe?: 'body', reportProgress?: boolean): Observable<Message>;
    public updateUsingGET1(course: Course, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Message>>;
    public updateUsingGET1(course: Course, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Message>>;
    public updateUsingGET1(course: Course, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (course === null || course === undefined) {
            throw new Error('Required parameter course was null or undefined when calling updateUsingGET1.');
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

        return this.httpClient.get<Message>(`${this.configuration.basePath}/course/update`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
