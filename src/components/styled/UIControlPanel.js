import styled from "styled-components";

export const UIControlPanel = styled.div`
  font-family: "Nota Sans", sans-serif;
  position: absolute;
  background-color: #ece4a2;
  font-size: 20px;
  text-align: center;
  width: 250px;
  max-height: 75%;
  overflow-y: overlay;
  right: 50px;
  bottom: 130px;
  border-radius: 5px;
  padding: 20px;
`;

export const UIControlPanelTitle = styled.div`
  text-transform: uppercase;
  margin: 20px 0 20px 0;
  background-color: #b5a383;
  padding: 5px;
  border-radius: 5px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const UIControlPanelMoreLess = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const UIControlPanelInput = styled.input`
  background: none;
  display: block;
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  text-align: center;
`;

export const UIControlPanelTable = styled.table`
  border-collapse: collapse;
  border: 2px solid #b5a383;
  font-size: 0.8rem;
  width: 100%;
  white-space: nowrap;
  table-layout: fixed;

  th,
  tr,
  td {
    border: 1px solid #b5a383;
    padding: 2px 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  td {
    text-align: center;

    &:nth-of-type(3n) {
      display: flex;
      border: none;
      flex-direction: row;
      justify-content: center;

      div {
        margin: 0 0 0% 10%;

        &:first-of-type {
          margin: 0;
        }
      }
    }
  }
`;

export const UIControlPanelOptionsTitle = styled.div`
  margin-bottom: 10px;
  font-size: 0.7em;
  text-align: left;
`;
