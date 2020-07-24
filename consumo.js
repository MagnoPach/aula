const consumo = [
    {
        km: 500,
        litros: 35.0,
    },
    {
        km: 2254,
        litros: 124.4,
    },
    {
        km: 4554,
        litros: 464.6,
    }
]

const media = consumo[0].km / consumo[0].litros
console.log(`${media.toFixed(3)} km / l`)