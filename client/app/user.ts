export class Address {

     street:String;
     suite:String;
     city:String;
     zipcode:String;
},

export class User {

     name:String;
     email:String;
     phone:String;
     address = new Address();

}
