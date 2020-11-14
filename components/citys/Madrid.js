import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const gridStyle = {
    width: '33%',
    textAlign: 'center',
};

const MadridCity = ({isSwitch}) => {
    return (
        <div>
            <Typography >
                <Paragraph style={{color: isSwitch ? 'black' : '#fff'}}>
                    Madrid es un municipio y una ciudad de España. La localidad, con categoría histórica de villa, es la capital del Estado y de la Comunidad de Madrid.
                     Dentro del término municipal de Madrid, el más poblado de España, viven 3 266 126 personas empadronadas, según el INE de 2019. El área metropolitana 
                     asociada tiene una población de 6 507 184 habitantes, por lo que es la segunda de la Unión Europea, según la fuente, tras la de París, y en algunas fuentes
                      detrás también de la Región del Ruhr, así como la segunda ciudad más poblada de la Unión Europea, solo por detrás de Berlín.
                </Paragraph>
                <Paragraph style={{color: isSwitch ? 'black' : '#fff'}}>
                    La ciudad cuenta con un PIB nominal de 230 018 millones de euros y un PIB per cápita nominal de 34 916 € (40 720 US$), siendo la 1.ª área
                     metropolitana española en actividad económica; y la décima de Europa tras Londres, París, Rin-Ruhr, Ámsterdam, Milán, Bruselas, Moscú, Fráncfort del
                      Meno y Múnich. Madrid es también la ciudad española con más pernoctaciones hoteleras.
                </Paragraph>
                <Paragraph style={{color: isSwitch ? 'black' : '#fff'}}>
                    En calidad de capital de España, Madrid alberga las sedes del Gobierno de España y sus Ministerios, de las Cortes Generales (Congreso y Senado), del
                     Tribunal Supremo y del Tribunal Constitucional, así como la residencia oficial de los reyes de España y del presidente del Gobierno. En el plano económico,
                      es la cuarta ciudad más rica de Europa, tras Londres, París y Moscú. Para 2009, el 50,1 % de los ingresos de las 5000 principales empresas españolas son
                       generados por sociedades con sede social en Madrid, que suponen un 31,8 % de ellas. Es sede del 4.ª mayor mercado de valores de Europa,​ y 2.ª en
                        el ámbito iberoamericano (Latibex) y de varias de las más grandes corporaciones del mundo. Es la 8.ª ciudad del mundo con mayor presencia de
                         multinacionales, tras Pekín y Milán y por delante de Dubái, París y Nueva York.
                </Paragraph>
            </Typography>
            <Title level={4} style={{color: isSwitch ? 'black' : '#fff'}}>Galería</Title>
            <Card bordered={false} style={{background: isSwitch ? '#fff' : 'black'}}>
                <Card.Grid style={gridStyle}>
                    <Card cover={<img alt="example" src="/madrid.jpg" />} />
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Card cover={<img alt="example" src="/madrid2.jpg" />} />
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Card cover={<img alt="example" src="/madrid3.jpg" />} />
                </Card.Grid>
            </Card>

        </div>

    )
}

export default MadridCity;