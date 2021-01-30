import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { EventService } from 'src/app/services/event.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  chats: any;
  items: any;
  joinned: boolean = false;
  curUser = { name: '', talkto: '' };
  msgData = { talkto: '', name: '', message: '' };
  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;
  constructor(private chatService: ChatService, private tokenStorageService: TokenStorageService, private eventService: EventService) {
  }

  ngOnInit() {
    console.log("ngOnInit")
    // this.curUser.name = this.tokenStorageService.getParticipantId();
    this.curUser.name = "admin"
    this.eventService.event.on('talk', (talkTo: any) => {
      if(this.curUser.name === "admin"){
        this.curUser = { talkto: talkTo, name: "admin" };
        this.msgData = { talkto: talkTo, name: "admin", message: '' };
      } else{
        this.curUser = { talkto: "admin", name: this.curUser.name };
        this.msgData = { talkto: "admin", name: this.curUser.name, message: '' };
      }
      this.joinRoom();
    })
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      // this.getChat();
      // this.curUser = { talkto: user.talkto, name: user.name };
      // this.msgData = { talkto: user.talkto, name: user.name, message: '' }
      this.joinned = true;
      this.scrollToBottom();
    }

    this.chatService.listen('new-message').subscribe((data: any) => {
      //the first half condition is adding he-self message and second half is for receving others
      if (JSON.parse(localStorage.getItem("user")).name == data.message.name || (data.message.talkto === JSON.parse(localStorage.getItem("user")).name && data.message.name === JSON.parse(localStorage.getItem("user")).talkto)) {
        this.chats.push(data.message);
        this.msgData = { talkto: this.curUser.talkto, name: this.curUser.name, message: '' };
        this.scrollToBottom();
      }
      // if (data.message.talkto === JSON.parse(localStorage.getItem("user")).talkto || data.message.talkto === JSON.parse(localStorage.getItem("user")).name) {
      //   this.chats.push(data.message);
      //   this.msgData = { talkto: this.curUser.talkto, name: this.curUser.name, message: '' };
      //   this.scrollToBottom();
      // }
    })
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }


  getChat() {
    this.chatService.getChat().subscribe((res) => {
      this.items = res;
      this.chats = [];
      this.items.forEach(item => {
        console.log(item)
        if ((item.name == this.curUser.name || item.name == this.curUser.talkto) && (item.name == this.curUser.name && item.talkto == this.curUser.talkto) || (item.talkto == this.curUser.name && item.name == this.curUser.talkto)) {
          this.chats.push(item);
        }
      })
    }),
      error => {
        console.log(error);
      }
    // console.log(this.chats)
    // this.chats = [{name : "aa", updated_at : "2019-06-15T16:51:08.681Z", message : " testing"},
    //               {name : "admin", updated_at : "2019-06-15T16:51:08.681Z", message : " hello"}]

  }

  joinRoom() {
    console.log("come?")
    var date = new Date();
    console.log(this.curUser)
    localStorage.setItem("user", JSON.stringify(this.curUser));
    this.getChat();
    this.msgData = { talkto: this.curUser.talkto, name: this.curUser.name, message: '' };
    this.joinned = true;
    // this.socket.emit('save-message', { talkto: this.curUser.talkto, name: this.curUser.name, message: 'Join this room', updated_at: date });
  }

  sendMessage() {
    console.log(this.msgData)
    this.chatService.saveChat(this.msgData).subscribe(
      result => {
        this.chatService.emit('save-message', result);
      },
      error => {
        console.log(error);
      })
  }

  logout() {
    var date = new Date();
    var user = JSON.parse(localStorage.getItem("user"));
    // this.socket.emit('save-message', { talkto: user.talkto, name: user.name, message: 'Left this room', updated_at: date });
    localStorage.removeItem("user");
    this.joinned = false;
  }
}
