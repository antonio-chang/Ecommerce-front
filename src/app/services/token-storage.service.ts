import { Injectable } from '@angular/core';

const PARTICIPANTID_KEY = 'AuthParticipant';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }

  public getParticipantId(): string {
    return localStorage.getItem(PARTICIPANTID_KEY);
  }
}
