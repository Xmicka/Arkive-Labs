'use client';

import dynamic from 'next/dynamic';

// Lanyard is a WebGL/three.js component that needs the DOM; render client-only.
const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false });

export default function LanyardClient(props) {
  return <Lanyard {...props} />;
}
