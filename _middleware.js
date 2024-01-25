import { NextResponse } from 'next/server'

export function middleware(req) {
 return new NextResponse().withHeader('Access-Control-Allow-Origin', '*')
}