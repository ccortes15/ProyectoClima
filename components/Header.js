import { Parallax } from 'react-parallax';
import Navbar from './Navbar';
import { useState } from 'react';

const londonImage = '/londres.jpg';
const madridImage = '/madrid.jpg';
const amsterdamImage = '/amsterdam.jpg';

const Header = () => {
    const [bg, setBg] = useState(madridImage);

    const changeImage = (value) => {
        switch (value) {
            case 'london':
                setBg(londonImage);
                break;
            case 'madrid':
                setBg(madridImage);
                break;
            case 'amsterdam':
                setBg(amsterdamImage);
                break;
        }
    }

    return (
        <Parallax bgImage={bg} strength={500}>
            <div style={{ height: 700 }}>
                <Navbar changeImage={changeImage} />
            </div>
        </Parallax>
    )
}

export default Header;