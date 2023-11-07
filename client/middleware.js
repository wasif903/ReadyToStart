// import { NextRequest, NextResponse } from 'next/server';

// const isAdminRoute = (pathname) => {
//     return pathname.startsWith('/api/admin');
// }

// const isUserRoute = (pathname) => {
//     return pathname.startsWith('/api/users');
// }

// export async function middleware(req) {
//     const role = req.headers.get("authorization");
//     const { pathname } = req.nextUrl;

//     if (isUserRoute(pathname) && !includes(["user", "admin"], role)) {
//         return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
//     }

//     if (isAdminRoute(pathname) && role !== "admin") {
//         return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
//     }

//     return NextResponse.next();
// }