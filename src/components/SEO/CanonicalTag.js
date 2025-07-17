// components/CanonicalTag.js
'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function CanonicalTag() {
  const pathname = usePathname();
  const canonicalUrl = `https://www.drkunalsayani.com${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
