import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductDetails";
import { NextResponse } from "next/server";

 export async function POST(req){
    const {name,age,category}=req.json();
    await connectMongoDB()
    await Product.create({name,age,category})
    return NextResponse.json({message:"product is created.."},{status:201})

}

export async function GET(){
    await connectMongoDB();
    const products=await Product.find()
    return NextResponse.json({products})
}

export async function DELETE(req){
    const id=req.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Product.findByIdAndDelete(id)
    return NextResponse.json({message:"product delted.."},{status:200})
}