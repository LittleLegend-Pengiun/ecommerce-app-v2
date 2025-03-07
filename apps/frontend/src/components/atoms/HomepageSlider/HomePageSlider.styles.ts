import styled from 'styled-components';

export const SliderContainer = styled.div`
  max-width: 93.75rem; /* 1500px */
  margin: auto;
  border-radius: 0.75rem; /* 12px */
`;

// Styled Slide Content
export const Slide = styled.div`
  background: black;
  color: white;
  padding: 2.5rem; /* 40px */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem; /* 12px */
  width: max-content;
`;

// Left Side (Text + Icon)
export const TextContent = styled.div`
  max-width: 50%;

  h3 {
    font-size: 1.5rem; /* 24px */
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1rem; /* 16px */
    margin: 0.625rem 0; /* 10px 0 */
  }
`;

// Right Side (Image)
export const ImageContainer = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: flex-end;

  img {
    max-width: 15.625rem; /* 250px */
    height: auto;
  }
`;

// Styled Button
export const ShopButton = styled.a`
  display: inline-block;
  background: white;
  color: black;
  font-weight: bold;
  padding: 0.625rem 1.25rem; /* 10px 20px */
  border-radius: 0.5rem; /* 8px */
  margin-top: 0.625rem; /* 10px */
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #ddd;
  }
`;
