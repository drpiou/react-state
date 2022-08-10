import React from 'react';
import './App.css';
import { GlobalStateProvider, useGlobalState } from './context';

const App = (): JSX.Element => {
  return (
    <GlobalStateProvider onChange={console.log} onRef={console.log}>
      <Thing />
    </GlobalStateProvider>
  );
};

const Thing = (): JSX.Element => {
  const { user, isLoggedIn, setState } = useGlobalState(['user', 'isLoggedIn']);

  const handleClick1 = (): void => {
    setState({ user: { firstname: String(Date.now()) } });
  };

  const handleClick2 = (): void => {
    setState({ isLoggedIn: !isLoggedIn });
  };

  return (
    <>
      <div className={'card'}>
        <button onClick={handleClick1}>{user.name}</button>
      </div>
      <div className={'card'}>
        <button onClick={handleClick2}>{String(isLoggedIn)}</button>
      </div>
    </>
  );
};

export default App;
