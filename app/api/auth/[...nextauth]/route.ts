// File: app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import { authOptions } from './authOptions';
import { NextRequest, NextResponse } from 'next/server';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
