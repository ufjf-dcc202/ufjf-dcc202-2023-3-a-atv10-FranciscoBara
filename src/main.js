import { getMaria, getJoao, deJoaoParaMaria, setJoao, setMaria } from "./joaoEMaria";


console.log("main");
setMaria(4);
setJoao(2);



let maria = getMaria();
let joao = getJoao();
console.log(maria, joao);


deJoaoParaMaria();


maria = getMaria();
joao = getJoao();
console.log(maria, joao);