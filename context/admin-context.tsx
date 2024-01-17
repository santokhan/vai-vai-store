'use client';

import { createContext } from "react";

export const AdminContext = createContext<{ email: string } | null>(null)