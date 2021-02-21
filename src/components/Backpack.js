import React, { useState } from "react";
import { UIButton } from "./styled/UIButtons";
import { UIControlPanelInput, UIControlPanelTable } from "./styled/UIControlPanel";

const Backpack = ({ backpack, setStoredBackpack }) => {
  const [editBackpack, setEditBackpack] = useState(null);
  const [unit, setUnit] = useState(null);
  const [newItem, setNewItem] = useState(null);
  const [newItemUnit, setNewItemUnit] = useState(null);

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
    <UIControlPanelTable>
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
                  <UIControlPanelInput type="number" value={unit} onChange={(event) => setUnit(event.target.value)} />
                ) : (
                  backpack[item]
                )}
              </td>
              <td>
                {editBackpack === item ? (
                  <>
                    <UIButton circle key={`save-${item}`} onClick={() => saveEditBackpack()}>
                      ✓
                    </UIButton>
                    <UIButton circle key={`cancel-${item}`} onClick={() => setEditBackpack(null)}>
                      ⤫
                    </UIButton>
                  </>
                ) : (
                  <UIButton
                    circle
                    key={`edit-${item}`}
                    onClick={() => {
                      setUnit(backpack[item]);
                      setEditBackpack(item);
                    }}
                  >
                    ✎
                  </UIButton>
                )}
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <UIControlPanelInput value={newItem ? newItem : ""} onChange={(event) => setNewItem(event.target.value)} />
          </td>
          <td>
            <UIControlPanelInput
              type="number"
              value={newItemUnit ? newItemUnit : ""}
              onChange={(event) => setNewItemUnit(event.target.value)}
            />
          </td>
          <td>
            <UIButton
              circle
              key={`add-item`}
              onClick={() => {
                addNewItem();
              }}
            >
              +
            </UIButton>
          </td>
        </tr>
      </tbody>
    </UIControlPanelTable>
  );
};

export default Backpack;
