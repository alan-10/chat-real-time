import { createContext } from 'react';

interface AuthContext {
  toggleTheme():void;
}

const Context  = createContext<AuthContext>( { } as AuthContext);

export default Context;