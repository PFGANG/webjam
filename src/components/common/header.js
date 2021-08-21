import React, { useState } from "react";
import { Button, Row, Col, Space } from "antd";

export default function AppHeader() {
  return (
    <div>
      <div className="wave-container">
        <h1>Hello, world!</h1>
        <p>Check out my awesome waves!</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,64L30,58.7C60,53,120,43,180,80C240,117,300,203,360,234.7C420,267,480,245,540,224C600,203,660,181,720,154.7C780,128,840,96,900,106.7C960,117,1020,171,1080,197.3C1140,224,1200,224,1260,240C1320,256,1380,288,1410,304L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}