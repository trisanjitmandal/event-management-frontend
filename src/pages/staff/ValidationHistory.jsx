import { useEffect, useState } from "react";

import validationApi from "@/api/validationApi";

import HistoryTable from "@/components/staff/ValidationHistoryTable";

function History() {

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchHistory = async () => {

        try {

            const response =
                await validationApi.getValidationHistory();

            setHistory(response.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchHistory();

    }, []);

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    Validation History

                </h1>

                <p className="text-muted-foreground">

                    View all tickets you have successfully validated.

                </p>

            </div>

            {loading ? (

                <p>Loading...</p>

            ) : (

                <HistoryTable history={history} />

            )}

        </div>

    );

}

export default History;