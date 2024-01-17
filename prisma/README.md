# Explain

`InStock` model will have only relation with `Model` and `Specifications`

## APIs

`/api/category`
`/api/category/[id]`

## Structure

- Stock
  - Item
    - Product Type
    - Brand
    - Customer

## Product type

The product type or category schema is defined here on `schema.prisma` file.

```prisma
model ProductType {
    id    String  @id @default(auto()) @map("_id") @db.ObjectId
    type  String
    Brand Brand[]
}
```

This field will be used within stock entry.

## Quantity

```prisma
// We will input IMEI when adding product to stock
model InStock {
    id               String         @id @default(auto()) @map("_id") @db.ObjectId
    price            String
    // quantity         String     // because of IMEI, we will not need quantity
    IMEI             String         @unique
    model            Model          @relation(fields: [modelId], references: [id])
    modelId          String         @db.ObjectId
    specifications   Specifications @relation(fields: [specificationsId], references: [id])
    specificationsId String         @db.ObjectId
}
```
