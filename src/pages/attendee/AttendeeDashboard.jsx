import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AttendeeDashboard() {

  return (

    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold">

          Welcome Back 👋

        </h1>

        <p className="text-muted-foreground mt-1">

          Here's what's happening today.

        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <Card>

          <CardHeader>

            <CardTitle>Total Events</CardTitle>

          </CardHeader>

          <CardContent>

            <p className="text-4xl font-bold">

              12

            </p>

          </CardContent>

        </Card>

        <Card>

          <CardHeader>

            <CardTitle>My Tickets</CardTitle>

          </CardHeader>

          <CardContent>

            <p className="text-4xl font-bold">

              3

            </p>

          </CardContent>

        </Card>

        <Card>

          <CardHeader>

            <CardTitle>Upcoming Events</CardTitle>

          </CardHeader>

          <CardContent>

            <p className="text-4xl font-bold">

              2

            </p>

          </CardContent>

        </Card>

      </div>

      {/* Upcoming Events */}

      <Card>

        <CardHeader>

          <CardTitle>

            Upcoming Events

          </CardTitle>

        </CardHeader>

        <CardContent>

          <div className="space-y-4">

            <div className="flex items-center justify-between border rounded-lg p-4">

              <div>

                <h3 className="font-semibold">

                  React Summit

                </h3>

                <p className="text-sm text-muted-foreground">

                  25 July 2026

                </p>

              </div>

            </div>

            <div className="flex items-center justify-between border rounded-lg p-4">

              <div>

                <h3 className="font-semibold">

                  Spring Boot Workshop

                </h3>

                <p className="text-sm text-muted-foreground">

                  30 July 2026

                </p>

              </div>

            </div>

          </div>

        </CardContent>

      </Card>

    </div>

  );

}

export default AttendeeDashboard;