import styled from "styled-components";

export const StyledWrapperImg = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;

  img {
    border-radius: 10px;
    display: block;
    width: 100%;
    
    &.active {
      border: 2px solid hsl(14, 86%, 42%);
    }
  }
`;
