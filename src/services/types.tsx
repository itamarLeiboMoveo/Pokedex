type stats = {
    hp: number,
    attack: number,
    defense: number,
    special_atk: number,
    special_def: number,
    speed: number,
    total: number
}

type pokemon = {
    id: number,
    img: string,
    name: string,
    types: string[],
    description: string,
    stats: stats
}