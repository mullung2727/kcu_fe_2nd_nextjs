// let firstName: "kim";
// firstName = "kim";
// firstName = 'Lee';

type Direction = 'left' | 'right' | 'up' | 'down';

function action(dir:Direction) {
  console.log(`moving ${dir}`)
}

action('left')
// action('jump')

const colors = {
  fire: 'red',
  water: 'blue',
  grass: 'green'
} as const;

// colors.fire = 'pink'

// * Record

type UserInfo = Record<string, string>
type UserInfo1 = {[key:string]:string}

const user01: UserInfo = {
  name: "kim",
  city: "seoul",
  age: '20'
}

type PokemonTypes = "fire" | "water" | "grass";
type PokemonColor = "red" | "blue" | "green";
type TypeColor = Record<PokemonTypes, PokemonColor>

const color:TypeColor = {
  fire: "red",
  water:"blue",
  grass:"green"
}