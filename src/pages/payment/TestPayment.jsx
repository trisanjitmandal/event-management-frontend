// import { useState } from "react";

// import RazorpayCheckout from "@/components/payment/RazorpayCheckout";

// function PaymentTest() {

//     const [eventId, setEventId] = useState("");

//     const [ticketType, setTicketType] =
//         useState("GENERAL");

//     const [quantity, setQuantity] =
//         useState(1);

//     const [ticket, setTicket] =
//         useState(null);

//     const [error, setError] =
//         useState("");

//     const handleSuccess = (ticketResponse) => {

//         console.log(
//             "Payment successful:",
//             ticketResponse
//         );

//         setError("");
//         setTicket(ticketResponse);
//     };

//     const handleError = (message) => {

//         console.error(
//             "Payment failed:",
//             message
//         );

//         setTicket(null);
//         setError(message);
//     };

//     return (
//         <div className="max-w-xl mx-auto p-6">

//             <h1 className="text-2xl font-bold mb-6">
//                 Razorpay Test Payment
//             </h1>

//             {/* Event ID */}
//             <div className="mb-4">

//                 <label className="block mb-2 font-medium">
//                     Event ID
//                 </label>

//                 <input
//                     type="text"
//                     value={eventId}
//                     onChange={(e) =>
//                         setEventId(e.target.value)
//                     }
//                     placeholder="Enter event UUID"
//                     className="w-full border rounded-md px-3 py-2"
//                 />

//             </div>

//             {/* Ticket Type */}
//             <div className="mb-4">

//                 <label className="block mb-2 font-medium">
//                     Ticket Type
//                 </label>

//                 <select
//                     value={ticketType}
//                     onChange={(e) =>
//                         setTicketType(e.target.value)
//                     }
//                     className="w-full border rounded-md px-3 py-2"
//                 >

//                     <option value="GENERAL">
//                         GENERAL
//                     </option>

//                     <option value="VIP">
//                         VIP
//                     </option>

//                     <option value="REGULAR">
//                         REGULAR
//                     </option>

//                 </select>

//             </div>

//             {/* Quantity */}
//             <div className="mb-6">

//                 <label className="block mb-2 font-medium">
//                     Quantity
//                 </label>

//                 <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={(e) =>
//                         setQuantity(
//                             Number(e.target.value)
//                         )
//                     }
//                     className="w-full border rounded-md px-3 py-2"
//                 />

//             </div>

//             {/* Payment */}
//             <RazorpayCheckout
//                 eventId={eventId}
//                 ticketType={ticketType}
//                 quantity={quantity}
//                 onSuccess={handleSuccess}
//                 onError={handleError}
//             />

//             {/* Error */}
//             {error && (

//                 <div className="mt-6 p-4 border rounded-md">

//                     <p className="font-medium">
//                         Payment Failed
//                     </p>

//                     <p className="text-sm mt-1">
//                         {error}
//                     </p>

//                 </div>

//             )}

//             {/* Success */}
//             {ticket && (

//                 <div className="mt-6 p-4 border rounded-md">

//                     <h2 className="text-lg font-semibold">
//                         Payment Successful
//                     </h2>

//                     <p className="mt-2">
//                         Ticket created successfully.
//                     </p>

//                     <div className="mt-4 text-sm space-y-1">

//                         <p>
//                             <strong>Ticket ID:</strong>{" "}
//                             {ticket.id}
//                         </p>

//                         <p>
//                             <strong>Ticket Type:</strong>{" "}
//                             {ticket.ticketType}
//                         </p>

//                         <p>
//                             <strong>Quantity:</strong>{" "}
//                             {ticket.quantity}
//                         </p>

//                         <p>
//                             <strong>Status:</strong>{" "}
//                             {ticket.status}
//                         </p>

//                     </div>

//                     {ticket.qrCodeBase64 && (

//                         <div className="mt-5">

//                             <p className="font-medium mb-2">
//                                 Ticket QR Code
//                             </p>

//                             <img
//                                 src={`data:image/png;base64,${ticket.qrCodeBase64}`}
//                                 alt="Ticket QR Code"
//                                 className="w-56 h-56"
//                             />

//                         </div>

//                     )}

//                 </div>

//             )}

//         </div>
//     );
// }

// export default PaymentTest;