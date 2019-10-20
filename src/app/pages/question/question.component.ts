import { Component, OnInit } from '@angular/core';
import { QuestionModel } from 'src/models/question.model';
import { QuestionService } from 'src/app/services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public model: QuestionModel = new QuestionModel();
  constructor(private questionService: QuestionService, private snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  public async sendQuestion(): Promise<void> {
    let result = await this.questionService.sendQuestion(this.model);
    
    if (result) {
      this.openSnackBar('Mail has been sent! Thank you', '');
    }
    else {
      this.openSnackBar('Error occured. Mail has not been sent', '');
    }

    this.model = new QuestionModel();
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
