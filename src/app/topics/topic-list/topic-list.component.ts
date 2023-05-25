import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  user = 'pedro sanchez';
  dataSource: any[] = [];

  displayedColumns: string[] = ['title', 'status', 'owner', 'date','closed'];
  constructor(private topicService: TopicService) {}
  ngOnInit() {
    this.topicService.getTopicList().subscribe(data => {
      this.dataSource = data;
    });
  }

}
