import Link from 'next/link'
import React from 'react'

export default function PageLayout({ children }) {
    return (
        <div>
           <div className='flex gap-5'>
           <Link href="/about/mission">Mission</Link>
           <Link href="/about/vision">Vision</Link>
           </div>
            {children}
        </div>
    )
}


