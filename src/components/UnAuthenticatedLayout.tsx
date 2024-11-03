import styled from 'styled-components';

const UnauthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UnauthenticatedWrapper>
      <main>{children}</main>
    </UnauthenticatedWrapper>
  );
};

const UnauthenticatedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export default UnauthenticatedLayout;
