# `@drpiou/react-state`

![GitHub](https://img.shields.io/github/license/drpiou/react-state)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/react-state)
![Jest tests](https://img.shields.io/badge/passed%20test-1-green)
![Jest tests](https://img.shields.io/badge/stage-experimental-important)

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

### `state/config/index.ts`

```typescript
import { userState } from './user';

export type StateList = typeof state;

export type StateKey = keyof StateList;

export const state = {
  isLoggedIn: false,
  user: userState,
};
```

### `state/config/user/index.ts`

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
import { StateList } from '../config';
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
import { StateList } from '../../config';

export const setName: StateSagaCallback<StateList> = (state) => {
  return {
    user: { name: [state.user.firstname, state.user.lastname].join(' ') },
  };
};
```

### `contexts/state/index.tsx`

```typescript jsx
import { createStateContext } from '@drpiou/react-state';
import { state } from '../../state/config';
import { sagas } from '../../state/sagas';

export const [useGlobalState, GlobalStateProvider] = createStateContext(state, {
  sagas,
});
```

### `App.tsx`

```typescript jsx
import { GlobalStateProvider } from './contexts/state';

const App = (): JSX.Element => {
  return <GlobalStateProvider>{/* ... */}</GlobalStateProvider>;
};

export default App;
```

### `components/MyComponent/index.tsx`

```typescript jsx
import { useGlobalState } from '../../contexts/state';

const MyComponent = (): JSX.Element => {
  const { user, setState } = useGlobalState(['user']);

  const handlePress = (): void => {
    setState({ user: { firstname: String(Date.now()) } });
  };

  return (
    <div>
      <p>{user.name}</p>
      <div onClick={handlePress} />
    </div>
  );
};

export default MyComponent;
```

## Documentation

```typescript
type createStateContext = <S extends DeepRecord<string, unknown>>(
  initialState: S,
  contextOptions?: StateContextOptions<S>,
) => [useState<S>, StateProvider<S>];

type useState<S> = <P extends Path<S>>(
  keys: P[],
) => { [K in P]: PathValue<S, K> } & {
  setState: SetStateContext<S>;
};

type StateProvider<S> = (props: StateProviderProps<S>) => JSX.Element;

type StateProviderProps<S> = {
  state?: Partial<S>;
  defaultState?: Partial<S>;
  onChange?: (state: S) => void;
};

type StateContextOptions<S = DeepRecord<string, unknown>> = {
  commitSagaOnError?: boolean; // default: false
  ignoreSagaError?: boolean; // default: false
  log?: boolean; // default: false
  logFilters?: Path<S>[]; // default: undefined = all keys
  sagas?: StateSaga<S>[];
  throwSagaError?: boolean; // default: true
};

type StateSaga<S, P = Path<S>> = {
  keys: P | P[];
  saga: StateSagaCallback<S>;
};

type StateSagaCallback<S> = (state: S) => DeepPartial<S> | null;

type SetStateContext<S> = (
  state: DeepPartial<S> | ((state: S) => DeepPartial<S> | null),
) => void;
```
