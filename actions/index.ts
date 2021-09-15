import { Iface } from "../Interfaces";

  export const showData=(value:Iface)=>{
    return{
      type:"showinput",
      payload:value
    }
  }