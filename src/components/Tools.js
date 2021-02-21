import React, { useState } from "react";
import { Fab } from "./styled/UIButtons";
import { UITools, UIToolsTitle, UIToolMoreLess, UIToolInput, UITable } from "./styled/UITools";
import { UIToolButton } from "./styled/UIButtons";

const Tools = ({
  adventure,
  backpack,
  character,
  initial,
  setStoredAdventure,
  setStoredBackpack,
  setStoredCharacter,
}) => {
  const [displayTools, setDisplayTools] = useState(true);
  const [editBackpack, setEditBackpack] = useState(null);
  const [unit, setUnit] = useState(null);
  const [newItem, setNewItem] = useState(null);
  const [newItemUnit, setNewItemUnit] = useState(null);

  const changeAdventure = (attribut, type = "-") => {
    const newAdventure = { ...adventure };

    if (attribut === "canInvokeLibra") {
      if (adventure.canInvokeLibra) {
        newAdventure[attribut] = !newAdventure[attribut];
        setStoredAdventure(newAdventure);
      } else {
        console.warn("ne peut être invoqué plusieurs fois");
      }
    } else {
      if (type === "+") {
        newAdventure[attribut] += 1;
      } else {
        newAdventure[attribut] -= 1;
      }

      if (newAdventure[attribut] < 0) {
        console.warn("ne peut pas être en dessous");
      } else {
        setStoredAdventure(newAdventure);
      }
    }
  };

  const changeCharacter = (attribut, type = "-") => {
    const newCharacter = { ...character };

    if (type === "+") {
      newCharacter[attribut] += 1;
    } else {
      newCharacter[attribut] -= 1;
    }

    if (newCharacter[attribut] < 0) {
      console.warn("ne peut pas être en dessous");
    } else if (initial[attribut] >= newCharacter[attribut]) {
      setStoredCharacter(newCharacter);
    } else {
      console.warn("ne peut être au dessus");
    }
  };

  const addNewItem = () => {
    if (newItem && newItemUnit && newItemUnit > 0 && !backpack[newItem]) {
      const newBackpack = { ...backpack };

      newBackpack[newItem] = parseInt(newItemUnit);
      setStoredBackpack(newBackpack);
    }

    setNewItem(null);
    setNewItemUnit(null);
  };

  const saveEditBackpack = () => {
    const newBackpack = { ...backpack };

    if (unit > 0) {
      newBackpack[editBackpack] = parseInt(unit);
    } else {
      delete newBackpack[editBackpack];
    }

    setStoredBackpack(newBackpack);
    setEditBackpack(null);
    setUnit(null);
  };

  return (
    <>
      {displayTools && (
        <UITools>
          <UIToolsTitle>Control Panel</UIToolsTitle>
          {Object.keys(character).map((attribut) => {
            return (
              <UIToolMoreLess key={attribut}>
                <UIToolButton circle onClick={() => changeCharacter(attribut, "-")}>
                  -
                </UIToolButton>
                {attribut}
                <UIToolButton circle onClick={() => changeCharacter(attribut, "+")}>
                  +
                </UIToolButton>
              </UIToolMoreLess>
            );
          })}
          {Object.keys(adventure).map((type) => {
            if (typeof adventure[type] === "number") {
              return (
                <UIToolMoreLess key={type}>
                  <UIToolButton circle onClick={() => changeAdventure(type, "-")}>
                    -
                  </UIToolButton>
                  {type}
                  <UIToolButton circle onClick={() => changeAdventure(type, "+")}>
                    +
                  </UIToolButton>
                </UIToolMoreLess>
              );
            } else {
              return null;
            }
          })}
          <UIToolsTitle>inventory</UIToolsTitle>
          <UITable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(backpack).map((item) => {
                return (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>
                      {editBackpack === item ? (
                        <UIToolInput type="number" value={unit} onChange={(event) => setUnit(event.target.value)} />
                      ) : (
                        backpack[item]
                      )}
                    </td>
                    <td>
                      {editBackpack === item ? (
                        <>
                          <UIToolButton circle key={`save-${item}`} onClick={() => saveEditBackpack()}>
                            ✓
                          </UIToolButton>
                          <UIToolButton circle key={`cancel-${item}`} onClick={() => setEditBackpack(null)}>
                            ⤫
                          </UIToolButton>
                        </>
                      ) : (
                        <UIToolButton
                          circle
                          key={`edit-${item}`}
                          onClick={() => {
                            setUnit(backpack[item]);
                            setEditBackpack(item);
                          }}
                        >
                          ✎
                        </UIToolButton>
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <UIToolInput value={newItem ? newItem : ""} onChange={(event) => setNewItem(event.target.value)} />
                </td>
                <td>
                  <UIToolInput
                    type="number"
                    value={newItemUnit ? newItemUnit : ""}
                    onChange={(event) => setNewItemUnit(event.target.value)}
                  />
                </td>
                <td>
                  <UIToolButton
                    circle
                    key={`add-item`}
                    onClick={() => {
                      addNewItem();
                    }}
                  >
                    +
                  </UIToolButton>
                </td>
              </tr>
            </tbody>
          </UITable>
          <UIToolsTitle>Battle</UIToolsTitle>
          <div>TODO</div>
          <UIToolsTitle>ROLL</UIToolsTitle>
          <div>TODO</div>
          <UIToolsTitle>Others</UIToolsTitle>
          {Object.keys(adventure).map((type) => {
            if (typeof adventure[type] === "boolean") {
              return (
                <UIToolButton
                  key={type}
                  disabled={!adventure[type]}
                  content={type}
                  onClick={() => changeAdventure(type)}
                />
              );
            } else {
              return null;
            }
          })}
        </UITools>
      )}
      <Fab onClick={() => setDisplayTools(!displayTools)}>+</Fab>
    </>
  );
};

export default Tools;
