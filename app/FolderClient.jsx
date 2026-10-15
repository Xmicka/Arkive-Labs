'use client';

import dynamic from 'next/dynamic';

// Folder computes its colours from `document` (canvas colour parsing), which
// isn't available during SSR and defaults to blue — producing a hydration
// mismatch that strands the default colour. Rendering client-only fixes it.
const Folder = dynamic(() => import('./Folder'), { ssr: false });

export default function FolderClient(props) {
  return <Folder {...props} />;
}
