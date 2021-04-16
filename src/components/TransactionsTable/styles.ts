import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`

export const DeleteButton = styled.button`
  background: transparent;
  border: 0;

  span {
    color: var(--red);
    font-size: 1rem;
    font-weight: 500;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }

  &:focus{
    outline: none;
    background: transparent;
  }
`