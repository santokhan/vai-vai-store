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
import { SalesRowContext, useSalesRowContext } from "@/context/sales-context";

export default function SalesEntryForm() {
    const [isOpenForm, setIsOpenForm] = useState<ProductTypeKeys | ''>('');
    const { salesEntity } = useSalesRowContext();

    const onCloseForm = () => { setIsOpenForm(''); }

    function onCheckout() {
        // length > 0
        // POST data to server
        if (salesEntity.length > 0) {
            fetch(`${ORIGIN}/api/sales/entry/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(salesEntity)
            }).then(res => res.json()).then((data) => {
                if (data.message) {
                    alert(data.message);
                } else {
                    // 
                }
                // setAdding(false);
            }).catch(err => { console.error(err) })
        } else {

        }
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <FormTitle>Sales Table</FormTitle>
                <SalesRow onOpenForm={(formType: ProductTypeKeys) => setIsOpenForm(formType)} />
            </div>
            {
                isOpenForm === 'android' &&
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <FormTitle>android entry</FormTitle>
                        <CloseForm onClick={onCloseForm} />
                    </div>
                    <AndroidSalesEntryForm onCloseForm={onCloseForm} />
                </div>
            }
            {
                isOpenForm === 'button' &&
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <FormTitle>button entry</FormTitle>
                        <CloseForm onClick={onCloseForm} />
                    </div>
                    <ButtonSalesEntryForm onCloseForm={onCloseForm} />
                </div>
            }
            {
                isOpenForm === 'accessories' &&
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <FormTitle>accessories entry</FormTitle>
                        <CloseForm onClick={onCloseForm} />
                    </div>
                    <AccessoriesSalesEntryForm onCloseForm={onCloseForm} />
                </div>
            }
            <CustomerForm setCustomerData={() => { }} />
            <SalesRowContext.Consumer>
                {(value) => (
                    value && value.salesEntity.length > 0 &&
                    <div className="flex">
                        <Button variant="primary" onClick={onCheckout}>
                            <ShoppingCart className="w-5 h-5" />Checkout
                        </Button>
                    </div>
                )}
            </SalesRowContext.Consumer>
        </div>
    )
}