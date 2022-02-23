class Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        let _nombre=nombre;
        let _edad=edad;
        let _img=img;
        let _comentarios=comentarios;
        let _sonido=sonido;

        this.getNombre=()=>_nombre;
        this.getEdad=()=>_edad;
        this.getImg=()=>_img;
        this.getComentarios=()=>_comentarios;
        this.setComentarios=(comentarios)=>_comentarios=comentarios;
        this.getSonido=()=>_sonido;
    };

    get nombreGet(){
        return this.getNombre()
    };

    get edadGet(){
        return this.getEdad()
    };

    get imgGet(){
        return this.getImg()
    };

    get comentariosGet(){
        return this.getComentarios()
    };

    set comentariosSet(comentarios){
        this.setComentarios(comentarios)
    };

    get sonidoGet(){
        return this.getSonido()
    };
}

class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    };

    rugir(){
        return this.getSonido()
    };
};

class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    };

    aullar(){
        return this.getSonido()
    };
};

class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    };

    gruñir(){
        return this.getSonido()
    };
};

class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    };

    sisear(){
        return this.getSonido()
    };
};

class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    };

    chillar(){
        return this.getSonido()
    };
};

export default {Leon,Lobo,Oso,Serpiente,Aguila}