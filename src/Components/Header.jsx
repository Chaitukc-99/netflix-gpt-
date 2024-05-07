import React from 'react'

const Header = () => {
    return (
        <div>
            <img className='absolute'
                src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="movies logo" />
            <div className='my-10 absolute'>
                <img className='bg-black w-60 px-10 py-10 h-auto relative bg-opacity-15'
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" />
            </div>
        </div>
    )
}

export default Header