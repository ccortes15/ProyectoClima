import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const TokioCity = ({ isSwitch }) => {
    return (
        <div>
            <Typography >
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                Tokio oficialmente Metrópolis de Tokio, es la capital de facto6 de Japón, localizada en el centro este de la isla de Honshu, concretamente en la región de Kantō.
                 En conjunto forma una de las 47 prefecturas de Japón. Es el centro de la política, economía, educación, comunicación y cultura del país. Cuenta también con la mayor 
                 concentración de sedes corporativas, instituciones financieras, universidades y colegios, museos, teatros, establecimientos comerciales y de entretenimiento de todo Japón.
                </Paragraph>
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                Con una población que supera los 37 millones de habitantes, se subdivide en 23 barrios, 26 ciudades, un distrito subdividido en tres pueblos y una villa,
                 y cuatro subprefecturas subdivididas en dos pueblos y siete villas, que representan a varias pequeñas islas al sur de Honshu que se extienden más allá de 1800 km de Shinjuku,
                  capital de la metrópoli y sede de la gobernación. El centro de Tokio, con sus 23 barrios, ocupa un tercio de la metrópoli, con una población cercana a los 13,23 millones
                   de habitantes; esta área es lo que se conoce internacionalmente como la ciudad de Tokio. En su área metropolitana viven más de 37 millones de habitantes, lo que la
                    convierte en la mayor aglomeración urbana del mundo. En 2015 fue elegida como la ciudad más segura del mundo por el periódico The Economist.
                </Paragraph>
                <Paragraph style={{ color: isSwitch ? 'black' : '#fff' }}>
                A pesar de que Tokyo es la romanización más común del nombre en japonés, el nombre de la ciudad es Tokio en español y otros idiomas. En inglés y otros idiomas se escribe
                 Tokyo, aunque antiguamente también se escribía Tokio. En el pasado, la ciudad se denominaba como Tokei, Edo o Yedo. El gentilicio de Tokio es tokiota.
                </Paragraph>
            </Typography>
            <Title level={4} style={{ color: isSwitch ? 'black' : '#fff' }}>Galería</Title>
            <Card bordered={false} style={{ background: isSwitch ? '#fff' : 'black' }}>
                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/tokio.jpg" />} />
                </Card.Grid>
                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/tokio2.jpg" />} />
                </Card.Grid>

                <Card.Grid style={{ width: '33%' }}>
                    <Card cover={<img alt="example" src="/tokio3.jpg" />} />
                </Card.Grid>
            </Card>

        </div>

    )
}

export default TokioCity;