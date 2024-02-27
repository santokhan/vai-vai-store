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
