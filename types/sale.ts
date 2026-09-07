import { Customer, SalesEntry, Seller } from "@/prisma/generated/client";

export interface SaleResponse extends SalesEntry {
  customer: Customer;
  seller: Seller;
}

export type SalesResponse = SaleResponse[];
