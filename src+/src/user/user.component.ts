import { User } from  './user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector:'user',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
 
 
 
    user = new User();

constructor() {
   
    
}

save(userForm:NgForm)
{
console.log(userForm.form);
console.log('Saved data ' + JSON.stringify(userForm.value) )
    
}

}