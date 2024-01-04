import { category } from "./category.model";

export interface product{
    id:Number;
    title:string;
    descripcion:string;
    price:number;
    images:string[];
    fechacreacion:string;
    category:category;
} 