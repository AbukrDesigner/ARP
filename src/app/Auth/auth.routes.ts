import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { MainAuth } from "../shared/layouts/main-auth/main-auth";
import { Login } from "./components/login/login";
import { Reset } from "./components/reset/reset";
import { Forget } from "./components/forget/forget";
import { Resister } from "./components/resister/resister";
import { isNgContainer } from "@angular/compiler";

export const AUTH_ROUTES : Routes =[
    {
        path: '',
        component: MainAuth,
        children: [
            {
                path: '',
                component: Login,
                data: {
                    title: 'Login',
                    description: 'Login to your account',
                    links: [
                        { label: 'Register', route: '/auth/reset' },
                        { label: 'Forgot Password', route: '/auth/forget' }
                    ]
                }
            },
            {
                path:'reset',
                component: Reset,
                data:{
                    title: 'Reset',
                    description: 'Reset your password',
                    icon: 'reset',
                    url: '/auth/reset'
                }
            },
            {
                path:'forget',
                component: Forget,
                data:{
                    title:'Forget',
                    description:'Forget your password',
                    icon:'forget',
                    url:'/auth/forget'
                }
            },
            {
                path:'resister',
                component: Resister,
                data:{
                    title:'Inscription',
                    description:'S\'inscrire',
                    icon:'resister',
                    url:'/auth/resister'
                }
            }
            
        ]
    }
]