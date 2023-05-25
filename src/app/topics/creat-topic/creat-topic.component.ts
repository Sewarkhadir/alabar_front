import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creat-topic',
  templateUrl: './creat-topic.component.html',
  styleUrls: ['./creat-topic.component.scss']
})
export class CreatTopicComponent {
  types = [
    {id:1, title: 'type1 text single', choiceType:'single', contentType:'text'},
    {id:2, title: 'type2 image singl', choiceType:'single', contentType:'image'},
    {id:3, title: 'type3 users multiple', choiceType:'multiple', contentType:'users'},
    {id:4, title: 'type4 rating multiple', choiceType:'multiple', contentType:'rating'},
  ];
  answersText: string[] = [];
  currentAns : string = '';
  public topicForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();

  }

  initForm(){
    this.topicForm = this.fb.group({
    title: [''],
    type: [''],
    contentType: ['']
  })
  }

  addAnswer(){
    console.log(this.currentAns);
    this.answersText.push(this.currentAns);
    this.currentAns='';
    console.log(this.answersText);
  }
}
