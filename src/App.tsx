import React from 'react';
import './App.css';
import { GlobalStatePathProps, GlobalStateProvider, GlobalStateRef, useGlobalState, withGlobalState } from './contexts/state';
import { StateList } from './state';

const App = (): JSX.Element => {
  const handleChange = (state: StateList): void => {
    console.log('GlobalStateProvider@onChange: ', state);
  };

  const handleRef = (ref: GlobalStateRef): void => {
    console.log('GlobalStateProvider@onRef: ', ref);
  };

  return (
    <GlobalStateProvider onChange={handleChange} onRef={handleRef}>
      <Thing />
      <WithThing />
    </GlobalStateProvider>
  );
};

const Thing = (): JSX.Element => {
  const { state, setState } = useGlobalState();

  console.log('Thing: re-render');

  const handleClick1 = (): void => {
    setState({ user: { firstname: String(Date.now()) } });
  };

  const handleClick2 = (): void => {
    setState({ isLoggedIn: !state.isLoggedIn });
  };

  return (
    <>
      <div className={'card'}>
        <button onClick={handleClick1}>{state.user.name}</button>
      </div>
      <div className={'card'}>
        <button onClick={handleClick2}>{String(state.isLoggedIn)}</button>
      </div>
    </>
  );
};

const WithThing = withGlobalState({ isLoggedIn: 'isLoggedIn' })(
  (props: GlobalStatePathProps<{ isLoggedIn: 'isLoggedIn' }>): JSX.Element => {
    const { isLoggedIn, setState } = props;

    console.log('WithThing: re-render');

    const handleClick = (): void => {
      setState({ isLoggedIn: !isLoggedIn });
    };

    return (
      <div className={'card'}>
        <button onClick={handleClick}>{String(isLoggedIn)}</button>
      </div>
    );
  },
);

export default App;
