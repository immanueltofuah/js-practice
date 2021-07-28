class Human{
    constructor(name, age){
        this.name = name
        this.age = age

    }
    talk(){
        console.log(this.name + " speaks")
    }

    
}

class man extends Human{

}

const imma = new man("imma",29)
imma.talk()
