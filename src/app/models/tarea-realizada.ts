export class TareaRealizada {
    constructor(
        public _id:string,
        public intendente:string,
        public tarea:string,
        public comentario:string,
        public fotos:Array<string>,
        public fecha:string,
        public queja:object
    ){}
}
