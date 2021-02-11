export class Employee {
 id: string;
 name: string;
 phone: string;
 address:
 {
 city: string,
 address_line1:string,
 address_line2:string,
 postal_code:string
 }

 constructor(id: string,
    name: string,
    phone: string,
  
    address:{
    city: string,
    address_line1:string,
    address_line2:string,
    postal_code:string
    }) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = {
            city:address.city,
            address_line1:address.address_line1,
            address_line2:address.address_line2,
            postal_code:address.postal_code
        } 
    }

}