import React from 'react'
import Banners from '../components/Banners/Banners'
import Categories from '../components/Categories/Categories'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div className="w-[1280px] mx-auto">
            <div className="mt-[40px]">
                <Banners />
                <Categories     />
            </div>
        </div>
    )
}

export default HomePage