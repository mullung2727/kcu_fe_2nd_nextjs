import { useState } from "react"

function identity<T>(value:T): T{
  return value
}

identity<number>(10)
identity("hi")

function getFirst<T>(arr:T[]): T {
  return arr[0]
}

getFirst<number>([1,3,5,])
getFirst(['a', 'b', 'c'])


interface PokemonContainer<T extends string> {
  pokemonName: T
}

const firePokemon: PokemonContainer<"파이리"> = {
  pokemonName: "파이리"
}
// const numberPokemon: PokemonContainer<number> = {
//   pokemonName: 10
// }

interface Pokemon<T, U> {
  id: T,
  name: U
}

const poke1: Pokemon<number, string> = {id:25, name: '피카츄'}
const poke2: Pokemon<string, string> = {id:'25', name: '피카츄'}

function Test() {
  const [ count, setCount] = useState<number>(0)
  const [ user, setUser] = useState<{name:string; age:number}>({
    name: "Tom",
    age: 10
  })
  const [ name, setName] = useState("피카츄")
  const [list, setList] = useState<string[]>([]) // any[]
  const [pokemon, setPokemon] = useState<string|null>(null)
//   - *포켓몬 목록을 저장하는 state 만들기 - `[pokemonList, setPokemonList]`*
// - *초기값: ["피카츄", "라이츄", "파이리"]*
  const [pokemonList, setPokemonList] = useState<string[]>(['피카츄', "라이츄", "파이리"])
}