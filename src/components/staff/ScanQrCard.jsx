import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function ScanQrCard({ onScan, scanAgain }) {

    const html5QrCodeRef = useRef(null);
    const isScanningRef = useRef(false);
    const hasScannedRef = useRef(false);

    const startScanner = async () => {

        if (isScanningRef.current) return;
        if (html5QrCodeRef.current) return;

        try {

            if (!html5QrCodeRef.current) {

                html5QrCodeRef.current = new Html5Qrcode("reader");

            }

            const cameras = await Html5Qrcode.getCameras();

            if (!cameras.length) {

                alert("No camera found.");

                return;

            }

            hasScannedRef.current = false;

            await html5QrCodeRef.current.start(

                cameras[0].id,

                {
                    fps: 10,
                    qrbox: {
                        width: 250,
                        height: 250,
                    },
                },

                async (decodedText) => {

                    if (hasScannedRef.current) return;

                    hasScannedRef.current = true;

                    try {

                        await stopScanner();

                        await onScan(decodedText);

                    } catch (e) {

                        console.error(e);

                    }

                },

                () => {}

            );

            isScanningRef.current = true;

        } catch (e) {

            console.error(e);

        }

    };

    const stopScanner = async () => {

        if (!html5QrCodeRef.current) return;

        if (!isScanningRef.current) return;

        // Lock immediately
         isScanningRef.current = false;

        try {

            await html5QrCodeRef.current.stop();

            await html5QrCodeRef.current.clear();

        } catch (e) {

            console.log(e);

        }

        isScanningRef.current = false;

        html5QrCodeRef.current = null;
    };

    useEffect(() => {

        startScanner();

        return () => {

    (async () => {

        await stopScanner();

    })();

};

    }, []);

    useEffect(() => {

        if (scanAgain) {

            startScanner();

        }

    }, [scanAgain]);

    return (

        <Card>

            <CardHeader>

                <CardTitle>

                    Scan QR Code

                </CardTitle>

            </CardHeader>

            <CardContent>

                <div
                    id="reader"
                    className="overflow-hidden rounded-lg"
                />

            </CardContent>

        </Card>

    );

}

export default ScanQrCard;