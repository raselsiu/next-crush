'use client'


import React from 'react'

export default function Button() {
    return (
        <div>
            <div className='mt-5'>
                <button className='bg-purple-600 rounded-sm p-2 text-white' onClick={() => console.log('clicked')}>Click Here</button>
            </div>
        </div>
    )
}
