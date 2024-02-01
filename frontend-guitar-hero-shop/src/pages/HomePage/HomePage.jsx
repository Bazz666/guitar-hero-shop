import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col lg={6}>
                    <h1 className="text-center mb-4">Bienvenido a Guitar Hero Shop</h1>
                    <p className="text-center mb-4">
                        Descubre la mejor selección de guitarras para rockeros y metaleros. En Guitar Hero Shop,
                        nos apasiona brindarte las mejores opciones para expresar tu música a través de nuestras
                        exclusivas guitarras.
                    </p>
                    <Button variant="primary" className="d-block mx-auto mb-4">
                        Ver Productos
                    </Button>
                </Col>
                <Col>
                    {/* Aquí puedes poner la URL de una imagen de tu tienda */}
                    <Image src="https://img.freepik.com/fotos-premium/fila-guitarras-acusticas-electricas-diferentes-colores-tienda-instrumentos-musicales_210545-1067.jpg" alt="Tienda de Guitarras" fluid 
            rounded/>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
