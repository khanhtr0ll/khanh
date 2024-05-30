interface BusinessPartner{
    name: String;
    credit: number;
}
interface Identiy{
    id: number;
    name: String;
}
interface contact{
    email: String;
    phone: String;
}
type Employee = BusinessPartner & Identiy & contact
type Customer = BusinessPartner & contact
const e: Employee = {
    name: '10',
    id: 1,
    email: 'sadsad',
    phone: '113',
    credit: 1,
}
