// Copyright 2021 @paritytech/canvas-ui-v2 authors & contributors

import type { StorageKey, Option } from '@polkadot/types';
import type { CodeHash, PrefabWasmModule } from '@polkadot/types/interfaces/contracts';

// types & interfaces
export type { AnyJson } from '@polkadot/types/types';
export type { DispatchError, EventRecord } from '@polkadot/types/interfaces';
export type { CodeHash, PrefabWasmModule } from '@polkadot/types/interfaces/contracts';
export type { KeyringPair } from '@polkadot/keyring/types';
export type { Keyring } from '@polkadot/ui-keyring';
export type { AbiMessage, AbiParam } from '@polkadot/api-contract/types';

// classes
export { Bytes, StorageKey, Option } from '@polkadot/types';
export { Abi, ContractPromise } from '@polkadot/api-contract';
export { ApiPromise } from '@polkadot/api';

export type StorageEntry = [StorageKey<[CodeHash]>, Option<PrefabWasmModule>];
