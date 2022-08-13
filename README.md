# `@drpiou/react-state`

![Licence](https://img.shields.io/github/license/drpiou/react-state)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/react-state)
![Stage](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/react-state` package creates a global state context.

> - written in TypeScript.

<!--ts-->

- [Compatibility](#compatibility)
- [Installation](#installation)
- [Example](#example)
- [Documentation](#documentation)

<!--te-->

## Compatibility

- React (17.0.2+)
- React Native (0.64.0+)
- Expo (43+)

## Installation

```shell
yarn add @drpiou/react-state
```

## Example

### `state/index.ts`

```typescript
import { userState } from './user';

export type StateList = typeof state;

export type StateKey = keyof StateList;

export const state = {
  isLoggedIn: false,
  user: userState,
};
```

### `state/user.ts`

```typescript
export type User = {
  firstname: string;
  lastname: string;
  name: string;
  age: number;
};

export const userState: User = {
  firstname: 'A',
  lastname: 'B',
  name: '',
  age: 30,
};
```

### `state/sagas/index.ts`

```typescript
import { StateSaga } from '@drpiou/react-state';
import { StateList } from '../index';
import { setName } from './setName';

export const sagas: StateSaga<StateList>[] = [
  {
    keys: ['user.firstname', 'user.lastname'],
    saga: setName,
  },
];
```

### `state/sagas/setName/index.ts`

```typescript
import { StateSagaCallback } from '@drpiou/react-state';
import { StateList } from '../index';

export const setName: StateSagaCallback<StateList> = (state) => {
  return {
    user: { name: [state.user.firstname, state.user.lastname].join(' ') },
  };
};
```

### `contexts/state.ts`

```typescript
import { Path, PathValue } from '@drpiou/ts-utils';
import {
  createStateContext,
  StateRef,
  WithStateProps,
} from '@drpiou/react-state';
import { state, StateList } from '../state';
import { sagas } from '../state/sagas';

export type GlobalStateProps<P extends { [key: string]: unknown }> =
  WithStateProps<StateList, P>;

export type GlobalStatePathProps<P extends { [key: string]: Path<StateList> }> =
  WithStateProps<StateList, { [K in keyof P]: PathValue<StateList, P[K]> }>;

export type GlobalStateRef = StateRef<StateList>;

export const [useGlobalState, GlobalStateProvider, withGlobalState] =
  createStateContext(state, {
    sagas,
    log: true,
  });
```

### `App.tsx`

```typescript jsx
import MyComponent from './components/MyComponent';
import MyComponentWithState from './components/MyComponentWithState';
import { GlobalStateProvider } from './contexts/state';

const App = (): JSX.Element => {
  return (
    <GlobalStateProvider onChange={console.log} onRef={console.log}>
      <MyComponent />
      <MyComponentWithState />
    </GlobalStateProvider>
  );
};

export default App;
```

### `components/MyComponent/index.tsx`

```typescript jsx
import { useGlobalState } from '../../contexts/state';

const MyComponent = (): JSX.Element => {
  const { state, setState } = useGlobalState();

  console.log('MyComponent: re-render');

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

export default MyComponent;
```

### `components/MyComponentWithState/index.tsx`

```typescript jsx
import { GlobalStatePathProps, withGlobalState } from '../../contexts/theme';

const MyComponentWithState = withGlobalState({ isLoggedIn: 'isLoggedIn' })(
  (props: GlobalStatePathProps<{ isLoggedIn: 'isLoggedIn' }>): JSX.Element => {
    const { isLoggedIn, setState } = props;

    console.log('MyComponentWithState: re-render');

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

export default MyComponentWithState;
```

## Documentation

```typescript
import { DeepPartial, DeepRecord, Path } from '@drpiou/ts-utils';

export type createStateContext = <S extends DeepRecord<string, unknown>>(
  initialState: S,
  contextOptions?: StateContextOptions<S>,
) => [useState<S>, React.ComponentType<StateProviderProps<S>>, withState<S>];

export type useState<S> = () => StateRef<S>;

export type withState<T, Key> = <K extends { [key: string]: Path<S> }>(
  keys: K,
) => <C extends React.ComponentType, P extends React.ComponentProps<C>>(
  Component: React.ComponentType<P>,
) => (props: Omit<P, keyof WithStateProps<S, K>>) => JSX.Element;

export type StateContextOptions<S = DeepRecord<string, unknown>> = {
  commitSagaOnError?: boolean;
  ignoreSagaError?: boolean;
  log?: boolean;
  logFilters?: Path<S>[];
  sagas?: StateSaga<S>[];
  throwSagaError?: boolean;
};

export type StateProviderProps<S> = {
  state?: S;
  defaultState?: DeepPartial<S>;
  onChange?: (state: S) => void;
  onRef?: (ref: StateRef<S>) => void;
};

export type StateRef<S> = {
  state: S;
  setState: SetStateContext<S>;
};

export type StateSaga<S, P = Path<S>> = {
  keys: P | P[];
  saga: StateSagaCallback<S>;
};

export type StateSagaCallback<S> = (state: S) => DeepPartial<S> | null;

export type WithStateProps<S, P = unknown> = P & Pick<StateRef<S>, 'setState'>;

export type SetStateContext<S> = (
  state: DeepPartial<S> | ((state: S) => DeepPartial<S> | null),
) => void;
```
