import { Typography } from 'antd';
import { useState } from 'react';

const { Title } = Typography;


const ParallaxContent = () => {
    const [value, setValue] = useState(true);

    const inlineStyle = {
        textAlign: 'center',
        left: '50%',
        top: '50%',
        position: 'absolute',
        padding: '20px',
        background: value ? 'white' : 'black',
        transform: 'translate(-50%, -50%)'
    }

    const imageStyle = {
        padding: '5px',
        fontWeight: 800,
        color: value ? 'white' : 'black',
        fontSize: '120px',
        backgroundColor: value ? 'black' : 'white',
        backgroundSize: '200%',
        backgroundClip: 'text',
        position: 'relative',
        textAlign: 'center',
        lineHeight: '90px',
        letterSpacing: '-8px'
    }

    const boxStyle = {
        backgroundColor: value ? 'white' : 'black',
        fontFamily: 'Big Shoulders Inline Text',
        color: value ? 'black' : 'white'
    }

    return (
        // <Parallax bgImage={bg} strength={500}>
        // </Parallax>
        <div>
            <div style={{ height: 700, backgroundColor: 'black' }}>
                <div onMouseEnter={() => setValue(false)} onMouseLeave={() => setValue(true)} style={inlineStyle}>
                    <div style={imageStyle}>TOP 5</div>
                    <div style={boxStyle}>ciudades del mundo</div>
                </div>
            </div>

        </div>

    )
}

export default ParallaxContent;