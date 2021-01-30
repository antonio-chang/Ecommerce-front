import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from "socket.io-client";
import { observable, Subscriber, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', observe: 'response' })
};

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private socket: SocketIOClient.Socket;
  private rootUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) {
    this.socket = io('https://chat-server-an.glitch.me');
  }

  getNameList() {
    return this.http.get<any>(this.rootUrl + "getNameList");
  }

  getChat() {
    return this.http.get(this.rootUrl + "getAll");
  }

  saveChat(data) {
    return this.http.post(this.rootUrl + "add", data, httpOptions);
  }

  listen(eventName: string) {
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data) => {
        Subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
