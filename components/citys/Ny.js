import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const gridStyle = {
    width: '33%',
    textAlign: 'center',
};

const NyCity = ({isSwitch}) => {
    return (
        <div>
            <Typography >
                <Paragraph style={{color: isSwitch ? 'black' : '#fff'}}>
                    Nueva York es la ciudad más poblada de los Estados Unidos de América y una de las más pobladas del mundo.
                </Paragraph>
                <Paragraph style={{color: isSwitch ? 'black' : '#fff'}}>
                    Desde finales del siglo XIX es uno de los centros de la economía mundial. Nueva York está considerada como una ciudad global, 
                    por sus influencias a nivel mundial en los medios de comunicación, en la política, en la educación, en la arquitectura, en el entretenimiento,
                    las artes y la moda. La influencia artística y cultural de la ciudad es de las más fuertes del mundo. En esta ciudad se encuentra la sede central
                    de la Organización de las Naciones Unidas. La gran relevancia de la ciudad a muchos niveles la convierte, junto a Moscú, Pekín, Londres,
                    Tokio y París en una de las ciudades con mayores estadísticas del planeta.9
                </Paragraph>
                <Paragraph style={{color: isSwitch ? 'black' : '#fff'}}>
                    La ciudad se compone de cinco boroughs: Bronx, Brooklyn, Manhattan, Queens y Staten Island (también conocidos como "distritos metropolitanos" para los
                     efectos de la ciudad, y cuya traducción y figura administrativa es equivalente a "municipio") cada uno de los cuales coincide con un condado:
                      Bronx, Kings, Nueva York, Queens, y Richmond. Con más de 24 millones de neoyorquinos en un área urbana de 830 kilómetros cuadrados (320 mi²),
                       Nueva York es la segunda ciudad con más densidad de población de los Estados Unidos, solo detrás de Union City, Nueva Jersey, localizada al otro
                        lado del río Hudson.
                </Paragraph>
            </Typography>
            <Title level={4} style={{color: isSwitch ? 'black' : '#fff'}}>Galería</Title>
            <Card bordered={false} style={{background: isSwitch ? '#fff' : 'black'}}>
                <Card.Grid style={gridStyle}>
                    <Card cover={<img alt="example" src="/NY.jpg" />} />
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Card cover={<img alt="example" src="/ny-night.jpg" />} />
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Card cover={<img alt="example" src="/usa.jpg" />} />
                </Card.Grid>
            </Card>

        </div>

    )
}

export default NyCity;