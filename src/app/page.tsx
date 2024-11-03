'use client';

import { Button } from 'antd';
import { useRef } from 'react';
import styled from 'styled-components';

function Home() {
  const buttonRef = useRef(null);
  return (
    <div>
      <main>
        Masin
        <StyledButton ref={buttonRef} type="primary">
          APK
        </StyledButton>
      </main>
    </div>
  );
}
const StyledButton = styled(Button)``;

export default Home;
