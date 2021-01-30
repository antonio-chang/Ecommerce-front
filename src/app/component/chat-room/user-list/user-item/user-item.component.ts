import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: any; 
  public mySet = new Set();
  constructor(public eventService:EventService,private chatService: ChatService) { 
    // this.mySet = chatService.retrieveSet();
  } 

  ngOnInit() {
  }

  emitTalk(){
    this.eventService.event.emit('talk', this.user)
  }
}
