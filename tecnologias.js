
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ]

 for (let i = 0; i < usuarios.length; i++) {
     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
  }



 // for (let usuario of usuarios) {
   // console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)

   function checaSeUsuarioUsaCSS(usuario) {
        for (let tecnologias of usuario.tecnologias) {
            if (tecnologias == 'CSS') return true
        }

        return false
   }


   for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }

























