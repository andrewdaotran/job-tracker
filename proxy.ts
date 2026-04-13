import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/auth/auth'

export default async function proxy(request: NextRequest) {
	const session = await getSession()
	const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard')
	const isSignInPage = request.nextUrl.pathname.startsWith('/sign-in')
	const isSignUpPage = request.nextUrl.pathname.startsWith('/sign-up')

	// If user is logged in and tries to go to sign in or sign up pages, redirect to dashboard
	if ((isSignInPage || isSignUpPage) && session?.user) {
		return NextResponse.redirect(new URL('/dashboard', request.url))
	}

	// If user is not logged in and tries to go to dashboard, redirect to sign in page
	if (isDashboardPage && !session?.user) {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}

	return NextResponse.next()
}
