import paymentApi from "@/api/paymentApi";
import { useState } from "react";

function RazorpayCheckout({
    eventId,
    ticketType,
    quantity,
    onSuccess,
    onError

}){

    const[loading,setLoading] = useState(false);

    const handlePaymet = async () => {
        try {
            setLoading(true);

             // 1. Create order from backend
            const response = await paymentApi.createOrder({
                eventId,
                ticketType,
                quantity,
            });

            const order = response.data;

              const options = {
                key: order.key,
                amount: order.amount,
                currency: order.currency,
                name: "AU Event Management",
                description: "Event Ticket",
                order_id: order.orderId,

                

                handler: async function (paymentResponse) {
                   
                     try {

                           const verifyResponse =
                                      await paymentApi.verifyPayment({

                                               razorpayOrderId:
                                                   paymentResponse.razorpay_order_id,

                                                razorpayPaymentId:
                                                 paymentResponse.razorpay_payment_id,

                                                 razorpaySignature:
                                                  paymentResponse.razorpay_signature,
                   
                        });

                         setLoading(false);

                         onSuccess(verifyResponse.data);

    } catch (error) {

        console.error(
            "Payment Verification Failed",
            error
        );

        setLoading(false);

        onError(
            error.response?.data?.message ||
            "Payment Verification Failed"
        );
    }
},

            modal :  {
                ondismiss : function () {
                    setLoading(false);
                },
            },

            theme : {
                color : "#000000",
            },
        };

        // open Razorpay
        const razorpay = new window.Razorpay(options);

        razorpay.on(
            "payment.failed",

            function(response){

            console.error(
                "Payment failed",
                response.error,
            );
            setLoading(false);

            onError(
                response.error.description || "Payment failed."
            );
        } 
        );
        razorpay.open();
    } catch (error){
        console.error(
            "Create payment order failed:",
            error
        );

        onError(
            error.response?.data?.message || "Unable to start the payment"
        );

        setLoading(false);
    }
};
return (
    <button
      type = "button"
      onClick={handlePaymet}
      disabled = {loading}
      className="w-full"
    > 
    {loading ? "processing.." : "pay now"}
    </button>
);
}

export default RazorpayCheckout;