import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AttendeeDashboard = () => {
    
    const instagramUsername = "@BYTE_DEBUG03";
    const instagramLink = "https://www.instagram.com/byte_debug03?stkn=MWw1emtvM21wZWlneQ==";

    return (
        <div className="space-y-10">

            {/* Welcome Section */}

            <section className="rounded-2xl border bg-card px-6 py-16 text-center shadow-sm">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Welcome
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                    Discover exciting events, book your tickets and
                    enjoy memorable experiences -- all in one place.
                </p>

            </section>

            {/* Development Notice */}

            <Card>
                <CardContent className="p-6">
                    <h2 className="text-xl font-semibold">
                         Platform Under Development
                    </h2>

                    <p className="mt-3 leading-7 text-muted-foreground">
                        Application is currently under development. Some
                        features may not be fully implemented yet, and
                        certain parts of the platform may change as we
                        continue improving the application.
                    </p>

                    <p className="mt-3 leading-7 text-muted-foreground">
                        Thank you for using the platform and helping us
                        test and improve the experience.
                    </p>
                </CardContent>
            </Card>

            {/* Contact Us */}

            <section>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold">
                        Contact Us
                    </h2>

                    <p className="mt-1 text-muted-foreground">
                        Have a question, suggestion, or found an issue?
                        We'd love to hear from you.
                    </p>
                </div>

                <Card>
                    <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-center gap-4">
                            <div className="rounded-full border p-3">
                                <ExternalLink className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="font-medium">
                                    Follow us on Instagram
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {instagramUsername}
                                </p>
                            </div>
                        </div>

                        <a
                            href={instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Visit Instagram
                        </a>

                    </CardContent>
                </Card>
            </section>

            {/* Footer */}
            <footer className="border-t pt-6 text-center text-sm text-muted-foreground">
                <p>
                    © 2026 AU Event. All rights reserved.
                </p>

                <p className="mt-1">
                    Built with the goal of making event booking simple
                    and convenient.
                </p>
            </footer>

        </div>
    );
};

export default AttendeeDashboard;