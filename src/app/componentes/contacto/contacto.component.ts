import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Contacto } from 'src/app/entity/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent implements OnInit{

  

  public name = "";
  public email = "";
  public lastname = "";
  public subject = "";
  contacto : Contacto = {"name" : "", "email" : "", "lastname" : "", "subject" : ""};
    
  
  
  constructor(private cookies : CookieService){}

  ngOnInit (): void{
    this.buscarCookies();
  }

  guardarCookies(){
    console.log("Las Cookies han sido guardadas");
    console.log(this.contacto);
    
    this.cookies.set("contacto",JSON.stringify(this.contacto));
  }

  buscarCookies(){
    console.log("Cookies guardadas anteriormente");
    this.contacto = JSON.parse(this.cookies.get("contacto"));
    console.log(this.contacto);
    
    this.cookies.set("contacto",JSON.stringify(this.contacto));
  }
}
