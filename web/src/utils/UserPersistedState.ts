import { useState, useEffect } from 'react';

function UserPersistedState(key: string, initialState: any){
  const [state, setState] = useState(() => {
    const historageValue = localStorage.getItem(key);

    if(historageValue){
      return JSON.parse(historageValue);
    }else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  },[key, state]);

  return [state, setState];
}

export default UserPersistedState;