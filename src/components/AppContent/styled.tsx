import styled from 'styled-components';

/* istanbul ignore next */
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

/* istanbul ignore next */
export const PageView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  min-height: 90vh;
  border-radius: 8px;
  border-style: solid;
  border-color: blue;

  width: 360px;
  max-width: 1284px;

  @media (min-width: 360px) {
    width: 100%;
  }
`;

/* istanbul ignore next */
export const FirstRow = styled.div`
  width: 100%;
  height: 88px;

  @media (min-width: 1284px) {
    width: 1236px;
  }
`;

/* istanbul ignore next */
export const SecondRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1284px) {
    flex-direction: row;
  }
`;
