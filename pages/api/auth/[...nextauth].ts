import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from '@/libs/prismadb';
import {compare}
import { sign } from "crypto";
import { signIn } from "next-auth/react";
import { PrismaAdapter } from "@next-auth/prisma-adapter";


export const authOptions:AuthOptions = {
    providers:[

        Credentials({
            id:'credentials',
            name:'Credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'text'
                },
                password:{
                    label:'password',
                    type:'password'
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Email and password required')
                }

                const user = await prismadb.user.findUnique({
                    where{
                        email:credentials.email
                    }
                });
                if(!user || !user.hashedPassword){
                    throw new Error('Email  does not exist')
                }

                const isCorrectPassword = await compare(credentials.password,user.hashedPassword)

                if(!isCorrectPassword) {
                    throw new Error('incorrect pasword')
                }
                return user;
            }
        })
    ],pages:{
        signIn:'/auth'
    },
    debug.process.env.NODE_ENV==='development',
    adapter:PrismaAdapter(prismadb),
    session:{
        stragety:'jwt'
    },
    jwt:{
        secret:process.env.NEXTAUTH_JWT_SECRET
    }
}