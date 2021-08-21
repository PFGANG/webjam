import React, { useState } from "react";
import { Button, Row, Col, Space, Anchor, Drawer } from "antd";
import { TwitterOutlined, MenuOutlined } from '@ant-design/icons';
import imagen from '../../img/TWITTER.svg'
import logo from '../../img/PFGANG.svg'

const { Link } = Anchor;

export default function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="header">
        <Row align="middle" justify="space-between">
          <img src={logo} style={{ width: 50 }} alt="" />
          <Anchor className="anchor">
            <Link href="#home" title="Home"/>
            <Link href="#Tema4" title="Tema4"/>
            <Link href="#elecciones" title="Elecciones"/>
            <Link href="#candidatos" title="Candidatos"/>
          </Anchor>
          <div className="menu">
            <Button onClick={showDrawer} icon={<MenuOutlined />} />
          </div>
        </Row>
      </div>
      <div id="home" className="wave-container">
        <Row justify="center" style={{marginLeft: "15px", marginRight: "15px"}}>
          <Space size="small" direction="vertical">
            <h1 className="title">Politician {<TwitterOutlined />} Tweets</h1>
            <p className="description">Conoce lo que twittean tus políticos favoritos (u odiados)</p>
          </Space>
        </Row>
        <img src={imagen} className="imgHeader" alt="" />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="0.5" d="M0,256L26.7,256C53.3,256,107,256,160,218.7C213.3,181,267,107,320,112C373.3,117,427,203,480,208C533.3,213,587,139,640,138.7C693.3,139,747,213,800,218.7C853.3,224,907,160,960,122.7C1013.3,85,1067,75,1120,80C1173.3,85,1227,107,1280,138.7C1333.3,171,1387,213,1413,234.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>

          <path fill="#fff" fill-opacity="1" d="M0,64L30,58.7C60,53,120,43,180,80C240,117,300,203,360,234.7C420,267,480,245,540,224C600,203,660,181,720,154.7C780,128,840,96,900,106.7C960,117,1020,171,1080,197.3C1140,224,1200,224,1260,240C1320,256,1380,288,1410,304L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>

      </div>

      <Drawer
        title="Politician Tweets"
        placement="top"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Col gutter={[0, 20]}>
          <Row>
            <Button className="underline" type="link" href="#home">
              Home
            </Button>
          </Row>
          <Row>
            <Button className="underline" type="link" href="#Tema2">
              Tema 2
            </Button>
          </Row>
          <Row>
            <Button className="underline" type="link" href="#elecciones">
              Elecciones
            </Button>
          </Row>
          <Row>
            <Button className="underline" type="link" href="#candidatos">
              Candidatos
            </Button>
          </Row>
        </Col>
      </Drawer>
    </div>
  );
}
