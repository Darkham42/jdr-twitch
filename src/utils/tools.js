export const storageAvailable = (type) => {
    try {
      const storage = window[type];
      const x = "__storage_test__";
  
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  export const getItem = (item) => {
    return JSON.parse(window.localStorage.getItem(item)) || null;
  };
  
  export const setHistory = (name, item) => {
    window.localStorage.setItem(name, JSON.stringify(item));
  };
  
  export const createCharacter = (
    type,
    setStoredAdventure,
    setStoredBackpack,
    setStoredCharacter,
    setStoredInitialCharacter
  ) => {
    const adventure = {
      canInvokeLibra: true,
      gold: 20,
    };
  
    const backpack = {
      food: 2,
      boots: 1,
      key: 2,
      teeths: 10,
      test: 1,
    };
  
    const character = {
      stamina: 19,
      skills: 8,
      luck: 12,
    };
  
    setStoredAdventure(adventure);
    setStoredBackpack(backpack);
    setStoredCharacter(character);
    setStoredInitialCharacter(character);
  
    setHistory("initial", character);
    setHistory("adventure", adventure);
    setHistory("backpack", backpack);
    setHistory("character", character);
  };
  