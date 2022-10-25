import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  show(fc:any,p:any,grp:any){
    console.log(fc);
    console.log(p);
    console.log(grp)
  }

	 submit(form:any){
	    console.log(form);
	  
}
}
