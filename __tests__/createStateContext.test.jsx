'use strict';

const { act, renderHook } = require('@testing-library/react-hooks');
const React = require('react');
const { createStateContext } = require('..');

test('@drpiou/react-state:createStateContext', () => {
  const state = {
    firstname: 'A',
    lastname: 'B',
    name: '',
    age: 30,
  };

  const sagas = [
    {
      keys: ['firstname', 'lastname', 'name'],
      saga: (state) => {
        return { name: [state.firstname, state.lastname].join(' ') };
      },
    },
  ];

  const [useGlobalState, GlobalStateProvider] = createStateContext(state, {
    sagas,
  });

  const wrapper = ({ children }) => <GlobalStateProvider>{children}</GlobalStateProvider>;

  const { result } = renderHook(() => useGlobalState(Object.keys(state)), { wrapper });

  expect(typeof result.current).toBe('object');
  expect(typeof result.current.firstname).toBe('string');
  expect(typeof result.current.lastname).toBe('string');
  expect(typeof result.current.name).toBe('string');
  expect(typeof result.current.age).toBe('number');

  expect(result.current.firstname).toBe('A');
  expect(result.current.lastname).toBe('B');
  expect(result.current.name).toBe('A B');
  expect(result.current.age).toBe(30);

  act(() => {
    result.current.setState({ firstname: 'C' });
  });

  expect(result.current.firstname).toBe('C');
  expect(result.current.name).toBe('C B');
});
