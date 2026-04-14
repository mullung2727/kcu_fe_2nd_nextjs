"use client"

import { getAllTypeNames, PokemonTypeKey } from "@/config/pokemonTypes";
import { useState } from "react";
import TypeBadge from "./TypeBadge";
import { useRouter, useSearchParams } from "next/navigation";

export default function TypeFilter() {
  // const [selectedTypes, setSelectedTypes] = useState<PokemonTypeKey[]>([])
  const router = useRouter();
  const searchParams = useSearchParams();

  const typeParam = searchParams.get('type')
  const selectedTypes = typeParam ? typeParam.split(',') : []
  
  const handleClick = (type:PokemonTypeKey) => {
    const params = new URLSearchParams(searchParams.toString())

    let newSelectedTypes: string[];
    if(selectedTypes.includes(type)) {
      newSelectedTypes = selectedTypes.filter(t=>t!==type)
      // setSelectedTypes(prev=>prev.filter(t=>t!==type)) // 삭제
    } else {
      newSelectedTypes = [...selectedTypes, type]
      // setSelectedTypes(prev=>[...prev, type]) // 추가
    }
    if (newSelectedTypes.length === 0) {
      params.delete('type')
    } else {
      params.set('type', newSelectedTypes.join(',')) // ['fire','water'] -> 'fire,water'
    }
    params.set('page', '1')
    router.push(`/?${params.toString()}`)
  }

  

  return (
    <div className="m-4 p-4 border-2 rounded-2xl">
      <div className="flex items-start gap-3">
        <h3 className="font-semibold">타입</h3>
        <div className="flex flex-wrap gap-2.5">
          {getAllTypeNames().map( (type:PokemonTypeKey) => {
            return <TypeBadge 
              key={type}
              typeName={type}
              isSelected={selectedTypes.includes(type)}
              onClick={()=>handleClick(type)}
            />
          })}
        </div>
      </div>

    </div>
  )
}