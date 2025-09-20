import styled from "styled-components";

export const CoffeeCardContainer = styled.li`
  background-color: ${({ theme }) => theme["base-card"]};
  padding: 1.25rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  img {
    margin-top: -1.5rem; // Posição vertical um pouco mais alta para o visual.
    width: 7.5rem;
  }

  .CoffeeTagsContainer {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.75rem; // Espaçamento entre a imagem e as tags.
    margin-bottom: 1rem; // Espaçamento entre as tags e o título.

    label {
      padding: 0.25rem 0.5rem;
      background-color: ${({ theme }) => theme["yellow-light"]};
      color: ${({ theme }) => theme["yellow-dark"]};
      border-radius: 100px;
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-bottom: 0.5rem; // Espaçamento entre o título e a descrição.
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-label"]};
    line-height: 1.3;
    margin-bottom: 2rem; // Espaçamento entre a descrição e a seção de compra.
    flex-grow: 1; // Permite que o texto preencha o espaço, mantendo a altura do card.
  }
`;

export const CoffeeCardBuy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; // Ajusta o alinhamento para o layout de compra.

  .CoffeePrice {
    color: ${({ theme }) => theme["base-text"]};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    
    span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;

export const CoffeeCardCartButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["purple-dark"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  margin-left: 0.5rem; // Espaçamento entre o botão de quantidade e o carrinho.
  
  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`;