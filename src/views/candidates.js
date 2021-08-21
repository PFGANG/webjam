import React from "react";
import { Tag, Row, Col, Space, Carousel, Card, Image, Select } from "antd";
import { TwitterOutlined } from '@ant-design/icons';
import boric from '../img/candidatos/boric.jpeg'
import sichel from '../img/candidatos/sichel.jpeg'
import carlos from '../img/candidatos/carlos maldonado.jpeg'
import narvaez from '../img/candidatos/Paula_Narváez.png'
import provoste from '../img/candidatos/provoste.jpeg'
import kast from '../img/candidatos/kast.jpeg'
import data from '../data/candidates.json'

const { Option } = Select;



function randomTweet(username) {
  // https://gist.github.com/c0derabbit/9ad0c77f2713de58fa1c4c0e74199d33
  let arr = data.filter(i => i["account"] === username);
  return arr[Math.floor(Math.random() * arr.length)];

}

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
      <div id="candidatos" className="wave-container-3">
        <h1 className="title-elecciones">Candidatos Presidenciales</h1>
        <p className="description-elecciones">Conoce a los candidatos y las palabras que más utilizan en sus tweets!</p>

        <br/>
        <div className="carousel-1">
          <Carousel autoplay dotPosition="bottom" style={{height: 500}}>
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
                    <Row>
                      Frente Amplio
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">Chile</Tag>
                      <Tag color="#00ACEE">Nuestro</Tag>
                      <Tag color="#00ACEE">Seguimos</Tag>
                    </Row>
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
                    
                    <Row>
                      Partido Radical
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">Chile</Tag>
                      <Tag color="#00ACEE">@PRadicalcl</Tag>
                      <Tag color="#00ACEE">Política</Tag>
                    </Row>
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
                    
                    <Row>
                      PS, PPD y Nuevo Trato
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">Chile</Tag>
                      <Tag color="#00ACEE">nuestro</Tag>
                      <Tag color="#00ACEE">@paulanarvaezo</Tag>
                    </Row>
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
                    
                    <Row>
                      Republicanos
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">@EquipoKast</Tag>
                      <Tag color="#00ACEE">Republicano</Tag>
                      <Tag color="#00ACEE">Presidente</Tag>
                    </Row>
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
                    
                    <Row>
                      Independiente Chile Vamos
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">#SePuede</Tag>
                      <Tag color="#00ACEE">#SichelPresidente</Tag>
                      <Tag color="#00ACEE">más</Tag>
                    </Row>
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
                    
                    <Row>
                      Democracia Cristiana
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">Chile</Tag>
                      <Tag color="#00ACEE">#AhoraEsCuando</Tag>
                      <Tag color="#00ACEE">más</Tag>
                    </Row>
                  </Card>
                </Space>
              </Row>
              <br/>
            </div>
          </Carousel>
        </div>

        <div className="carousel-2">
          <Carousel autoplay dotPosition="bottom" style={{height: 500}}>
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
                  <Row>
                      Frente Amplio
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">Chile</Tag>
                      <Tag color="#00ACEE">Nuestro</Tag>
                      <Tag color="#00ACEE">Seguimos</Tag>
                    </Row>
                </Card>
              </Row>
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
                  <Row>
                    Partido Radical
                  </Row>
                  <Row gutter={[10, 8]}>
                    <Tag color="#00ACEE">Chile</Tag>
                    <Tag color="#00ACEE">@PRadicalcl</Tag>
                    <Tag color="#00ACEE">Política</Tag>
                  </Row>
                </Card>
              </Row>
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
                    <Row>
                      PS, PPD y Nuevo Trato
                    </Row>
                    <Row gutter={[10, 8]}>
                      <Tag color="#00ACEE">Chile</Tag>
                      <Tag color="#00ACEE">nuestro</Tag>
                      <Tag color="#00ACEE">@paulanarvaezo</Tag>
                    </Row>
                  </Card>
              </Row>
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
                  <Row>
                    Republicanos
                  </Row>
                  <Row gutter={[10, 8]}>
                    <Tag color="#00ACEE">@EquipoKast</Tag>
                    <Tag color="#00ACEE">Republicano</Tag>
                    <Tag color="#00ACEE">Presidente</Tag>
                  </Row>
                </Card>
              </Row>
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
                  <Row>
                    Independiente Chile Vamos
                  </Row>
                  <Row gutter={[10, 8]}>
                    <Tag color="#00ACEE">#SePuede</Tag>
                    <Tag color="#00ACEE">#SichelPresidente</Tag>
                    <Tag color="#00ACEE">más</Tag>
                  </Row>
                </Card>
              </Row>
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
                  <Row>
                    Democracia Cristiana
                  </Row>
                  <Row gutter={[10, 8]}>
                    <Tag color="#00ACEE">Chile</Tag>
                    <Tag color="#00ACEE">#AhoraEsCuando</Tag>
                    <Tag color="#00ACEE">más</Tag>
                  </Row>
                </Card>
              </Row>
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