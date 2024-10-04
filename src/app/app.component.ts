import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   public data:any;
   public info: any;
   itemImageUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  constructor(private http: HttpClient){}
  title = 'Api';

  ngOnInit(): void {
    initFlowbite();
   this.fetchDetails();
  }
  public fetchDetails(){
     
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((res:any) =>{
      console.log(res);
      this.data =res;
    })

    this.http.get('https://fakestoreapi.com/products/1')
    .subscribe((res:any) =>{
      console.log(res);
      this.info =res;
    })
    
      
  }
}
