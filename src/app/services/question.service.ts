import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionModel } from 'src/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }
  
    public async sendQuestion(model: QuestionModel): Promise<boolean> {
      return this.httpClient.post<boolean>("/api/question/send", model).toPromise();
    }
}
