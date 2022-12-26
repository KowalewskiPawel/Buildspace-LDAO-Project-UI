// Copyright 2022 @paritytech/contracts-ui authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Link } from 'react-router-dom';
import { LookUpCodeHash, AvailableCodeBundles } from 'ui/components/instantiate';
import { Page } from 'ui/templates';

export function SelectCodeHash() {
  return (
    <Page header="Instantiate new DAO from Code Hash">
      <LookUpCodeHash />
      <AvailableCodeBundles />
    </Page>
  );
}
