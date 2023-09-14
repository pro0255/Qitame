import { Context, ContextType, useContext } from 'react'

export const createUseEnsuredContext = <T extends Context<any>>(
  context: T,
  displayName: string
) => {
  return () => {
    const contextValue = useContext<ContextType<typeof context>>(context);
    if (!contextValue) {
      throw new Error(`No context with name=${displayName} found up the tree`);
    }
    return contextValue;
  };
};
