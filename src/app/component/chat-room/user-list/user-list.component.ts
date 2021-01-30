import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ChatService } from 'src/app/services/chat.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  constructor(private chatService: ChatService, private tokenStorageService: TokenStorageService) {
    // this.users = ["111", "222", "333", "444", "555", "666"]
    let curUser = this.tokenStorageService.getParticipantId();
    this.users = [];
    if (curUser == "admin") {
      this.users = ["admin"]
    } else {
      this.chatService.getNameList().subscribe(res => {
        res.forEach(element => {
          if (element != "admin") this.users.push(element)
        });
      })
    }
  }

  ngOnInit(): void {
  }
}
