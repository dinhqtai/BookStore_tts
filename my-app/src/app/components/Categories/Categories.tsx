import React from 'react'
import Image from 'next/image'
type Props = {}

const Categories = (props: Props) => {
    return (
        <div className="my-[20px]">
            <div className="mb-[20px]">Danh mục</div>
            <div>
                <div>
                    <Image src={``} alt="" />
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Categories