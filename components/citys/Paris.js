import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const ParisCity = ({ isSwitch }) => {
    return (
        <div>
            <Typography >
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                    París es la capital de Francia y su ciudad más poblada. Capital de la región de Isla de Francia (o "Región Parisina"), constituye el único departamento
                    unicomunal del país.
                </Paragraph>
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                    La ciudad de París, dentro de sus estrechos límites administrativos, tiene una población de 2 273 305 habitantes en 2015.​ Sin embargo, en el siglo XX, el área
                    metropolitana de París se expandió más allá de los límites del municipio de París, y es hoy en día, con una población de 12 405 426 habitantes en 2013, la segunda
                    área metropolitana del continente europeo (después de Londres) y la 28ª del mundo.
                </Paragraph>
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                    La región de París es junto con la de Londres, uno de los núcleos económicos más importantes de Europa.​ Con 607 000 millones de euros
                    (845 000 millones de dólares), produjo más de una cuarta parte del producto interior bruto (PIB) de Francia en 2011. La Défense es el principal
                    barrio de negocios de Europa, alberga la sede social de casi la mitad de las grandes empresas francesas, así como la sede de veinte de las cien más
                    grandes del mundo.
                </Paragraph>
            </Typography>
            <Title level={4} style={{ color: isSwitch ? 'black' : '#fff' }}>Galería</Title>
            <Card bordered={false} style={{ background: isSwitch ? '#fff' : 'black' }}>
                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/paris-night.jpg" />} />
                </Card.Grid>
                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/paris.jpg" />} />
                </Card.Grid>

                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/paris4.jpg" />} />
                </Card.Grid>
            </Card>

        </div>

    )
}

export default ParisCity;