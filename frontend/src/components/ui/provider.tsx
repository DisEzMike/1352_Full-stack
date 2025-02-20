"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import React from "react"

export function Provider({children} : { children: React.ReactNode}) {
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  )
}
