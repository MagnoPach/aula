const animais = [
    {
        filo: "vertebrado",
        classe: "mamifero",
        ordem: "onivoro"
    },
    {
        filo: "vertebrado",
        classe: "ave",
        ordem: "carnivoro"
    },
    {
        filo: "invertebrado",
        classe: "anelideo",
        ordem: "onivoro"
    },

]

if(animais[2].filo == "vertebrado") {
    if(animais[2].classe == "ave") {
        if(animais[2].ordem == "carnivoro") {
            console.log("aguia")
        } else {
            console.log("pomba")
        }
    } else {
        if(animais[2].ordem == "onivoro") {
            console.log("homem")
        } else {
            console.log("vaca")
        }
    } 
} else {
    if(animais[2].classe == "inseto") {
        if(animais[2].ordem == "hematofago") {
            console.log("pulga")
        } else {
            console.log("lagarta")
        }
    } else {
        if(animais[2].ordem == "hematofago") {
            console.log("sanguessuga")
        } else {
            console.log("minhoca")
        }
    }
}