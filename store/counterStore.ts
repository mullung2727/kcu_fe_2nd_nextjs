import {create} from "zustand";

interface CounterStore {
  count: number;
  inc: ()=>void;
  dec: ()=>void;
  reset: ()=>void;
}

export const useCountStore = create<CounterStore>( (set)=>{
  return {
    count: 0,
    inc: () => set( (state) => ({count:state.count + 1}) ),
    dec: () => set( (state) => ({count:state.count - 1}) ),
    reset: () => set( (state) => ({count:0}) ),
  }
}  )