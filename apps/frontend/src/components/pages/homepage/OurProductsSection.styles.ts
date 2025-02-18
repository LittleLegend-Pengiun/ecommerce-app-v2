import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const NavIcons = styled.div`
  font-size: 18px;
  cursor: pointer;
  display: flex;
  gap: 10px;
`;

export { SectionWrapper, HeaderWrapper, Title, NavIcons };
