'use clinet'
import React from 'react'
import { Carousel } from 'antd';
type Props = {}

const Banners = (props: Props) => {
    const contentStyle: React.CSSProperties = {
        height: '250px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Carousel autoplay speed={2} className='w-[100%] max-h-[250px] h-[250px]' >
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}
export default Banners