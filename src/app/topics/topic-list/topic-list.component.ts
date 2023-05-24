import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  usuario: User;

  ngOnInit(): void {
    this.loginService.getInfo().subscribe(info => {
      this.usuario = info;
      console.log(this.usuario.firstname)
    })
  }

  user = 'pedro sanchez'
  dataSource = [
    {title: 'rate demo sprint', owner: 'marga nacher', date: '20/04/2023',
    closed:false},
    {title: 'A of consum sprint', owner: 'marga nacher', date: '21/04/2023',
    closed:true},
    {title: 'cuando vamos a la oficina', owner: 'pedro sanchez', date: '22/04/2023',
    closed:true}
  ];

  displayedColumns: string[] = ['title', 'status', 'owner', 'date','closed'];

}
