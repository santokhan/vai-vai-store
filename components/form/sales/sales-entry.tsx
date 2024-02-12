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
import { ORIGIN } from "@/utils/origin";
import { useSalesRowContext } from "@/context/sales-context";
import { useCustomerContext } from "@/context/customer-context";
import SellerForm from "../seller-form";
import { useSellerContext } from "@/context/seller-context";
import { useRouter } from "next/navigation";
import { APISalesEntry } from "@/app/api/(store)/sales/entry/type";

export default function SalesEntryForm() {
    const [isOpenForm, setIsOpenForm] = useState<ProductTypeKeys | ''>('');
    const [adding, setAdding] = useState<boolean>(false);
    const { salesEntity } = useSalesRowContext();
    const { customer } = useCustomerContext();
    const { seller } = useSellerContext();
    const router = useRouter()

    function onCheckout() {
        if (customer.phone === '') {
            alert('Enter customer phone number');
        } else {
            if (seller.sellerId) {
                if (confirm('Click OK if you wanna checkout')) {
                    setAdding(true);
                    fetch(`${ORIGIN}/api/sales/entry/`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            salesEntity,
                            customer,
                            seller
                        } as APISalesEntry)
                    }).then(res => res.json()).then((data) => {
                        if (data.message) {
                            alert(data.message);
                        } else {
                            // use response to generate invoice
                            // alert('Checkout success!. Press ok to get invoice.');
                            router.push(`/sales/entry/invoice/${data.id}`);
                        }
                        setAdding(false);
                    }).catch(err => { console.error(err) });
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