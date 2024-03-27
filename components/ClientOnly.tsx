'use client';
import { ReactNode, useEffect, useState } from "react";

type ClientOnlyProps = {
    children: ReactNode
}

export default function ClientOnly({ children}: ClientOnlyProps) {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  return (<> {isClient ? <div>{children}</div> : null} </>);
};