class Animal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Gato extends Animal {
    raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;

    }
}

const meuGato = new Gato("miaumiau", 5, "siamês");

console.log(`Nome: ${meuGato.nome}`);
console.log(`Idade: ${meuGato.idade}`);
console.log(`Raça: ${meuGato.raca}`);