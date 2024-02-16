import SalesEntryForm from "@/components/form/sales/sales-entry";
import CustomerProvider from "@/context/customer-context";
import SalesRowProvider from "@/context/sales-context";
import SellerProvider from "@/context/seller-context";

export default function SalesEntryPage() {
    return (
        <SalesRowProvider>
            <CustomerProvider>
                <SellerProvider>
                    <SalesEntryForm />
                </SellerProvider>
            </CustomerProvider>
        </SalesRowProvider>
    )
}