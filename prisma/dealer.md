Got it! You want a **Dealer** model that tracks from whom you purchase products, with basic info like name and description. We can also optionally relate it to `SalesEntry` or `Stock` in case you want to track which dealer supplied which stock. Here's a simple addition to your Prisma schema:

```prisma
model Dealer {
    id          String   @id @default(auto()) @map("_id") @db.ObjectId
    name        String
    description String?
    createdAt   DateTime @default(now())

    // Optional: relation to SalesEntry or Stock if you want to track purchases
    StockAndroid     StockAndroid[]     @relation("DealerStockAndroid")
    StockButton      StockButton[]      @relation("DealerStockButton")
    StockAccessories StockAccessories[] @relation("DealerStockAccessories")
}
```

And then in your stock models, you can optionally add a relation to `Dealer`:

```prisma
model StockAndroid {
    // existing fields...
    dealer   Dealer?  @relation("DealerStockAndroid", fields: [dealerId], references: [id])
    dealerId String?  @db.ObjectId
}

model StockButton {
    // existing fields...
    dealer   Dealer?  @relation("DealerStockButton", fields: [dealerId], references: [id])
    dealerId String?  @db.ObjectId
}

model StockAccessories {
    // existing fields...
    dealer   Dealer?  @relation("DealerStockAccessories", fields: [dealerId], references: [id])
    dealerId String?  @db.ObjectId
}
```

✅ **Notes:**

* `description` is optional.
* The relation allows you to see which dealer supplied which stock.
* If you don’t want to track per-stock dealer info, you can omit the relations and just keep dealer info as standalone.

If you want, I can also **update `SalesEntry`** to optionally include a dealer reference so that purchases are traceable directly to a dealer. Do you want me to do that?
