import { Parallax } from 'react-parallax';

const image = 'https://pixabay.com/get/52e9d0414a4fad00f5d89960c62e377b1539dbec5654_1920.jpg';

export default function Home() {
  const inlineStyle = {
    background: 'white',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div>
      <Parallax bgImage={image} strength={100}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            Inside parallax
          </div>
        </div>
      </Parallax>
    </div>
  )
}
