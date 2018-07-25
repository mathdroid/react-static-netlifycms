import styled from "react-emotion";

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  width: 100%;
  margin-bottom: 2rem;
  transition: height 0.2s;
  min-height: 4rem;

  & > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  & img {
    display: block;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    height: auto;
  }
`;

export default Outer;
