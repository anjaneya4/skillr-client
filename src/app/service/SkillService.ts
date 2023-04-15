import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../data/Skill';

@Injectable({
    providedIn: 'root'
})
export class SkillService {
    private ALL_URL = 'http://localhost:8080/skill/all';
    private ADD_URL = 'http://localhost:8080/skill/add';

    constructor(private http: HttpClient) { }

    all() {
        return this.http.get(this.ALL_URL);
    }

    add(skillName: String) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = skillName;
        return this.http.post(this.ADD_URL, body, { headers: headers });
    }
}