'use client'
import AndroidSalesEntryForm from "@/components/form/sales/android-entry";
import SalesRow from "@/components/sales-row/sales-row";
import FormTitle from "@/components/form/title";
import { useState } from "react";
import { ShoppingCart } from "iconsax-react";
import CustomerForm from "@/components/form/customer/customer";
import Button from "@/components/button/button";
import CloseForm from "@/components/form/close-form";
import ButtonSalesEntryForm from "@/components/form/sales/button-entry";
import AccessoriesSalesEntryForm from "@/components/form/sales/accessories-entry";
import { ProductTypeKeys } from "@/utils/product-type";
import { ORIGIN } from "@/utils/origin";
import { SalesRowEntry, useSalesRowContext } from "@/context/sales-context";
import { useCustomerContext } from "@/context/customer-context";
import { OnlyChildrenProps } from "@/utils/props-type";
import { CustomerData } from "@/utils/default-data";
import SellerForm from "../seller-form";
import { SellerData, useSellerContext } from "@/context/seller-context";

type PostSalesData = {
    salesEntity: SalesRowEntry[];
    customer: CustomerData;
    seller: SellerData
}

export default function SalesEntryForm() {
    const [isOpenForm, setIsOpenForm] = useState<ProductTypeKeys | ''>('');
    const [adding, setAdding] = useState<boolean>(false);
    const { salesEntity } = useSalesRowContext();
    const { customer } = useCustomerContext();
    const { seller } = useSellerContext();

    function onCheckout() {
        if (confirm('Click OK if you wanna checkout')) {
            setAdding(true);
            fetch(`${ORIGIN}/api/sales/entry/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    salesEntity,
                    customer,
                    seller
                } as PostSalesData)
            }).then(res => res.json()).then((data) => {
                if (data.message) {
                    alert(data.message);
                } else {
                    console.log(data);
                    // use response to generate invoice
                }
                setAdding(false);
            }).catch(err => { console.error(err) });
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
            <div className="space-y-2">
                <FormTitle>Sales Entity</FormTitle>
                <SalesRow onOpenForm={(formType: ProductTypeKeys) => setIsOpenForm(formType)} />
            </div>
            {isOpenForm === 'android' && <AndroidSalesEntryForm onCloseForm={onCloseForm} />}
            {isOpenForm === 'button' && <ButtonSalesEntryForm onCloseForm={onCloseForm} />}
            {isOpenForm === 'accessories' && <AccessoriesSalesEntryForm onCloseForm={onCloseForm} />}
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