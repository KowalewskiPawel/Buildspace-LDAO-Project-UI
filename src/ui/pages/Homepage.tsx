// Copyright 2022 @paritytech/contracts-ui authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useEffect } from 'react';
import { Contracts, Statistics } from '../components/homepage';
import codeBundle from '../components/instantiate/code.json';
import { PageHome } from 'ui/templates';
import { useDatabase } from 'ui/contexts';

export function Homepage() {
  const { db } = useDatabase();

  useEffect(() => {
    const addContractBundle = async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      await db.codeBundles.add(codeBundle);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    addContractBundle();
  }, []);

  return (
    <PageHome header="Contracts">
      <Contracts />
      <Statistics />
    </PageHome>
  );
}
