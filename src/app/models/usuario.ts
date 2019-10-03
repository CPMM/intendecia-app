export class Usuario {
    constructor(
        public _id:string,
        public nombre:string,
        public telefono:string,
        public correo:string,
        public usuario:string,
        public password:string,
        public role:string,
        public foto:string,
        public status:boolean
    ){}
}
