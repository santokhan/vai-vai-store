'use client';

import AndroidSalesEntryForm from "@/components/form/sales/android-entry";
import SalesRow from "@/components/sales-row/sales-row";
import { useState } from "react";
import { ShoppingCart } from "iconsax-react";
import CustomerForm from "@/components/form/customer/customer";
import Button from "@/components/button/button";
import ButtonSalesEntryForm from "@/components/form/sales/button-entry";
import AccessoriesSalesEntryForm from "@/components/form/sales/accessories-entry";
import { ProductTypeKeys } from "@/utils/product-type";
import { useSalesRowContext } from "@/context/sales-context";
import { useCustomerContext } from "@/context/customer-context";
import SellerForm from "../seller-form";
import { useSellerContext } from "@/context/seller-context";
import { APISalesEntry } from "@/app/api/(store)/sales/entry/type";
import { ServerProps } from "@/block/form/stock/type";
import { AddSalesEntry } from "@/actions/sales/entry";
import { toast } from "react-toastify";
import redirectToInvoice from "@/actions/redirect-to/invoice";

export default function SalesEntryForm({ productType, brand, model }: ServerProps) {
    const [isOpenForm, setIsOpenForm] = useState<ProductTypeKeys | ''>('');
    const [adding, setAdding] = useState<boolean>(false);
    const { salesEntity } = useSalesRowContext();
    const { customer } = useCustomerContext();
    const { seller } = useSellerContext();

    function onCheckout() {
        if (customer.phone === '') {
            alert('Enter customer phone number');
        } else {
            if (seller.sellerId) {
                if (confirm('Click OK if you wanna checkout')) {
                    setAdding(true);
                    const postData: APISalesEntry = {
                        salesEntity: salesEntity.map(({ stockId, quantity, price, type }) => {
                            // I need only below keys for APISalesEntry
                            return { stockId, quantity, price, type };
                        }),
                        customer,
                        seller
                    };

                    AddSalesEntry(postData).then(data => {
                        if (data.id) {
                            redirectToInvoice(data.id).catch(err => {
                                console.error(err);
                            });
                        } else {
                            toast(data.message);
                        }
                        setAdding(false);
                    })
                }
            } else {
                alert('Select seller');
            }
        }
    }

    const onCloseForm = () => { setIsOpenForm('') };
    // const FormTitleAndCloser = ({ children }: OnlyChildrenProps) => (
    //     <div className="flex justify-between mb-2">
    //         <FormTitle>{children}</FormTitle>
    //         <CloseForm onClick={onCloseForm} />
    //     </div>
    // )

    return (
        <div className="space-y-6">
            <SalesRow onOpenForm={(formType: ProductTypeKeys) => setIsOpenForm(formType)} />
            {isOpenForm === 'android' && <AndroidSalesEntryForm onCloseForm={onCloseForm} />}
            {isOpenForm === 'button' && <ButtonSalesEntryForm onCloseForm={onCloseForm} productType={productType.filter(p => p.type === 'button')} brand={brand} model={model} />}
            {isOpenForm === 'accessories' && <AccessoriesSalesEntryForm onCloseForm={onCloseForm} productType={productType.filter(p => p.type === 'accessories')} brand={brand} model={model} />}
            {salesEntity.length > 0 &&
                <>
                    <CustomerForm />
                    <SellerForm />
                    <Button variant="primary" onClick={onCheckout} disabled={adding}>
                        <ShoppingCart className="w-5 h-5" />{adding ? "Adding..." : "Checkout"}
                    </Button>
                </>
            }
        </div>
    )
}