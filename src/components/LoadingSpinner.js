import { useRecoilValue } from 'recoil';
import { loadingStateAtom } from '../data/atoms';
import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

export default function LoadingSpinner() {
  const isLoading = useRecoilValue(loadingStateAtom);

  return (
    <>
      {isLoading ? (
        <Background>
          <Wrapper>
            <CircularProgress color='success' />
          </Wrapper>
        </Background>
      ) : null}
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
