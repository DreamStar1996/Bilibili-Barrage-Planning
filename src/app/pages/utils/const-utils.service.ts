import { Injectable } from '@angular/core';

const baseUrl = 'https://localhost:44397';

@Injectable({
    providedIn: 'root',
})
export class ConstUtilsService {
    constructor() { }

    getBaseURL(): string {
        return baseUrl
    }
}
