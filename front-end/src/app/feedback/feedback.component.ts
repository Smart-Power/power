import { Component, OnInit } from '@angular/core';
import { FeedbackService} from '../feedback.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router'
import { Feedback } from "../feedback"


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback:Feedback[]=[];

  constructor(private feedbackService : FeedbackService , public fb:FormBuilder , private route: ActivatedRoute) {
    this.feedbackForm=this.fb.group({
      name: [''],
      content: ['']
    })
   }
    
  ngOnInit(): void {
    this.getFeedback();
  }

  registerFeedback(): void{
   this.feedbackService.addFeedback(this.feedbackForm.value).subscribe(newFeedback=>{
    this.feedback.push(newFeedback)
   });
  }

  getFeedback(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.feedbackService.sendGetRequest().subscribe(feedback => this.feedback = feedback);
  }
}
