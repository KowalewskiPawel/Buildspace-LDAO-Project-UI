// Copyright 2022 @paritytech/contracts-ui authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { DocumentAddIcon, CollectionIcon } from '@heroicons/react/outline';
import { NavLink } from './NavLink';

export function Navigation() {
  return (
    <div className="navigation">
      <NavLink
        to={`/instantiate/0x1bc3be402eefd338b14ad210b889db64cb9e0b35bed6815779c080cf8904aa9b`}
        icon={DocumentAddIcon}
      >
        Add New DAO
      </NavLink>
      <NavLink icon={CollectionIcon} to={`/`} end>
        All DAOs
      </NavLink>
    </div>
  );
}
