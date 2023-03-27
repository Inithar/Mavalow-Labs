import styled, { css } from 'styled-components';
import device from '../../../styles/breakpoints';

export const Section = styled.section`
  margin-top: 10rem;

  ${device.large} {
    margin-top: 15rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 4rem;

  ${device.small} {
    align-items: center;
  }

  ${device.large} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const TextBox = styled.div`
  max-width: 63rem;
`;

export const Heading = styled.h3`
  font-size: clamp(2rem, 1.6rem + 0.7vw, 2.8rem);
  line-height: 1.57;
  font-weight: 800;
`;

export const OptionBox = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 5.2rem;
  }
`;

export const Form = styled.form`
  width: clamp(30rem, 100%, 65rem);
`;

export const FormBox = styled.div`
  display: grid;
  gap: 2rem;

  ${device.small} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;

    & > :last-child {
      grid-column: 1/3;
    }
  }
`;

const inputStyles = css`
  padding: 1.6rem;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: white;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.brightGray};
  outline: none;

  &:focus {
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, ${({ theme }) => theme.colors.gamboge}, ${({ theme }) => theme.colors.internationalOrange});
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  height: 15rem;

  ${device.large} {
    height: 18rem;
  }
`;
