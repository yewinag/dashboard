import { device } from '@/theme/themeConfig';
import styled from 'styled-components';

export const StyledAuth = styled.section`
  padding: 30px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 6px 8px rgba(51, 51, 51, 0.08),
    0px 8px 30px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    h4 {
      font-weight: 700;
      font-size: 48px;
      line-height: 65px;
      text-align: center;
      letter-spacing: 0.06em;
      color: #000000;
      margin-bottom: 34px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #555555;
    }
  }
  form {
    max-width: 460px;
    margin: auto;
  }
  @media ${device.tablet} {
    header {
      margin-bottom: 0;
      h4 {
        font-weight: 700;
        font-size: 30px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 0.06em;
        color: #000000;
        margin-bottom: 0;
      }
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #555555;
      }
    }
    form {
      max-width: 100%;
      margin: auto;
    }
  }
`;
