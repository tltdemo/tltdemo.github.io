export interface Customer {
    name: string;
    addresses: Address[];
    phones: Phone[];
}

export interface Address {
    street: string;
    postcode: string;
}

export interface Phone {
  phone: string;
  phoneType: string;
}