import React from "react";
import { Button, Row, Col, Space, Carousel, Card, Image, Select } from "antd";
import { TwitterOutlined } from '@ant-design/icons';
import boric from '../img/candidatos/boric.jpeg'
import sichel from '../img/candidatos/sichel.jpeg'
import carlos from '../img/candidatos/carlos maldonado.jpeg'
import narvaez from '../img/candidatos/Paula_Narváez.png'
import provoste from '../img/candidatos/provoste.jpeg'
import kast from '../img/candidatos/kast.jpeg'
const { Option } = Select;

export default function Candidates() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const { Meta } = Card;

  return (
    <div>
      <div id="elecciones" className="wave-container-3">
        <h1 className="title-elecciones">Candidatos Presidenciales</h1>
        <p className="description-elecciones">Conoce a los candidatos y las palabras que más utilizan en sus tweets!</p>

        <br/>
        <div className="carousel-1">
          <Carousel autoplay dotPosition="bottom" style={{height: 450}}>
            <div>
              <Row align="middle" justify="center">
                <Space>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<Image
                      width={240}
                      height={240}
                      src={boric}
                    />}
                  >
                    <Meta title="Gabriel Boric" description="@gabrielboric" />
                    <br/>
                    Frente Amplio
                  </Card>

                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<Image
                      width={240}
                      height={240}
                      src={carlos}
                    />}
                  >
                    <Meta title="Carlos Maldonado" description="@MaldonadoCurti" />
                    <br/>
                    Partido Radical
                  </Card>

                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<Image
                      width={240}
                      height={240}
                      src={narvaez}
                    />}
                  >
                    <Meta title="Paula Narváez" description="@paulanarvaezo" />
                    <br/>
                    PS, PPD y Nuevo Trato
                  </Card>
                </Space>
              </Row>
              
            </div>
            <div>
              <Row align="middle" justify="center">
                <Space>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<Image
                      width={240}
                      height={240}
                      src={kast}
                    />}
                  >
                    <Meta title="José Antonio Kast" description="@joseantoniokast" />
                    <br/>
                    Republicanos
                  </Card>

                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<Image
                      width={240}
                      height={240}
                      src={sichel}
                    />}
                  >
                    <Meta title="Sebastián Sichel" description="@sebastiansichel" />
                    <br/>
                    Independiente Chile Vamos
                  </Card>

                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<Image
                      width={240}
                      height={240}
                      src={provoste}
                    />}
                  >
                    <Meta title="Yasna Provoste" description="@ProvosteYasna" />
                    <br/>
                    Democracia Cristiana
                  </Card>
                </Space>
              </Row>
              <br/>
            </div>
          </Carousel>
        </div>

        <div className="carousel-2">
          <Carousel autoplay dotPosition="bottom" style={{height: 450}}>
            <div>
              <Row align="middle" justify="center">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<Image
                    width={240}
                    height={240}
                    src={boric}
                  />}
                >
                  <Meta title="Gabriel Boric" description="@gabrielboric" />
                  <br/>
                  Frente Amplio
                </Card>
              </Row>
              <br/>
            </div>
            <div>
              <Row align="middle" justify="center">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<Image
                    width={240}
                    height={240}
                    src={carlos}
                  />}
                >
                  <Meta title="Carlos Maldonado" description="@MaldonadoCurti" />
                  <br/>
                  Partido Radical
                </Card>
              </Row>
              <br/>
            </div>
            <div>
              <Row align="middle" justify="center">
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<Image
                      width={240}
                      height={240}
                      src={narvaez}
                    />}
                  >
                    <Meta title="Paula Narváez" description="@paulanarvaezo" />
                    <br/>
                    PS, PPD y Nuevo Trato
                  </Card>
              </Row>
              <br/>
            </div>
            <div>
              <Row align="middle" justify="center">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<Image
                    width={240}
                    height={240}
                    src={kast}
                  />}
                >
                  <Meta title="José Antonio Kast" description="@joseantoniokast" />
                  <br/>
                  Republicanos
                </Card>
              </Row>
              <br/>
            </div>
            <div>
              <Row align="middle" justify="center">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<Image
                    width={240}
                    height={240}
                    src={sichel}
                  />}
                >
                  <Meta title="Sebastián Sichel" description="@sebastiansichel" />
                  <br/>
                  Independiente Chile Vamos
                </Card>
              </Row>
              <br/>
            </div>
            <div>
              <Row align="middle" justify="center">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<Image
                    width={240}
                    height={240}
                    src={provoste}
                  />}
                >
                  <Meta title="Yasna Provoste" description="@ProvosteYasna" />
                  <br/>
                  Democracia Cristiana
                </Card>
              </Row>
              <br/>
            </div>
          </Carousel>
        </div>
        <br/>
        <Row justify="center" align="middle" style={{height: 200}}>
          <div className="que-diria">
            <Row justify="center">
              <Space align="center">
                <p className="description-elecciones">¿Qué diría </p>
                <Select defaultValue="boric" style={{ width: 250 }} bordered={false}>
                  <Option value="boric">Gabriel Boric</Option>
                  <Option value="carlos">Carlos Maldonado</Option>
                  <Option value="narvaez">Paula Narváez</Option>
                  <Option value="kast">José Antonio Kast</Option>
                  <Option value="sichel">Sebastián Sichel</Option>
                  <Option value="provoste">Yasna Provoste</Option>
                </Select>
              </Space>
            </Row>
          </div>
        </Row>
        <br/>
      </div>
      
    </div>
  );
}