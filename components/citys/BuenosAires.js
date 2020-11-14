import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const BaCity = ({ isSwitch }) => {
    return (
        <div>
            <Typography >
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                    Buenos Aires, oficialmente Ciudad Autónoma de Buenos Aires (CABA) o Ciudad de Buenos Aires, es la capital y ciudad principal (más poblada y de mayor tamaño) de la 
                    República Argentina. Esta metrópolis es una ciudad autónoma que constituye uno de los 24 distritos, o jurisdicciones de primer orden, que conforman el país. 
                    Tiene sus propios poderes ejecutivo, legislativo y judicial. Está situada en la región centro-este del país, sobre la orilla sur del Río de la Plata, en la región
                     pampeana. La Ciudad de Buenos Aires fue cedida por la provincia de Buenos Aires para que fuera la capital federal del país; pero en virtud de la Constitución Nacional
                      es una ciudad autónoma.
                </Paragraph>
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                    Su tejido urbano se asemeja a un abanico que limita al sur, oeste y norte con la lindante Provincia de Buenos Aires y al este con el Río de la Plata. Oficialmente
                     la ciudad se encuentra dividida en 15 comunas que agrupan a 48 barrios. Desde 1880 hasta el presente se la llama también Capital Federal, aunque desde 1996 no
                      figura oficialmente con ese nombre ni en su Constitución propia ni en la Constitución Nacional.
                </Paragraph>
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                    La población estimada de la ciudad es de 3 075 646 habitantes​ y la del Aglomerado Gran Buenos Aires (conformado por la propia Ciudad Autónoma de Buenos Aires junto a
                     ciertos partidos-municipios de la lindera Provincia de Buenos Aires) es de 17 541 141 habitantes, siendo este último el segundo aglomerado de Hispanoamérica, el segundo de América del Sur y una de las 20 mayores ciudades del mundo.
                </Paragraph>
            </Typography>
            <Title level={4} style={{ color: isSwitch ? 'black' : '#fff' }}>Galería</Title>
            <Card bordered={false} style={{ background: isSwitch ? '#fff' : 'black' }}>
                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/ba.jpg" />} />
                </Card.Grid>
                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/ba1.jpg" />} />
                </Card.Grid>

                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/ba2.jpg" />} />
                </Card.Grid>
            </Card>

        </div>

    )
}

export default BaCity;