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
import { Timestamp } from './timestamp';


export interface CourseRegistration {
    courseId?: string;
    created?: Timestamp;
    modified?: Timestamp;
    notes?: string;
    status?: string;
    studentId?: string;
    teacherId?: string;
}

