import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(){ }

  // Log the error to the console
  log = (error:string): void => {
    console.error(error)
  }

  prependLog = (comment: string, error: string): void => {
    this.log(comment+' : '+error);
  }

  logWithTimestamp = (error:string) => {
    let date = new Date();
    console.log(date + ' : '+error)
  }


}
