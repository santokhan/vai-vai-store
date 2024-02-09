'use client'
import AndroidSalesEntryForm from "@/components/form/sales/android-entry";
import OrderProvider, { OrderContext, OrderEntry } from "@/context/order-context";
import SalesRow from "@/components/sales-row/sales-row";
import FormTitle from "@/components/form/title";
import { useState } from "react";
import { CloseCircle, ShoppingCart } from "iconsax-react";
import CustomerForm from "@/components/form/customer/customer";
import Button from "@/components/button/button";

export default function SalesEntryPage() {
    const [isOpenForm, setIsOpenForm] = useState(false);

    return (
        <OrderProvider>
            <div className="space-y-6">
                <div className="space-y-2">
                    <FormTitle>Order Table</FormTitle>
                    <SalesRow onOpenForm={() => setIsOpenForm(true)} />
                </div>
                {
                    isOpenForm &&
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <FormTitle>Android Entry</FormTitle>
                            <button type="button" className="text-gray-700 hover:text-gray-500" onClick={() => setIsOpenForm(false)}><CloseCircle className="w-5 h-5" /></button>
                        </div>
                        <AndroidSalesEntryForm onCloseForm={() => setIsOpenForm(false)} />
                    </div>
                }
                <CustomerForm setCustomerData={() => { }} />
                <OrderContext.Consumer>
                    {(value) => (
                        value && value.orderEntry.length > 0 &&
                        <Button variant="primary">
                            <ShoppingCart className="w-5 h-5" />Checkout
                        </Button>
                    )}
                </OrderContext.Consumer>
            </div>
        </OrderProvider>
    )
}