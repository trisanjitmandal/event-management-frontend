import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "@/api/authApi";
import { useNavigate } from "react-router-dom";
import { getRoleFromToken } from "@/utils/jwt";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {

    try {

        setLoading(true);

        const response = await loginUser(data);

        localStorage.setItem("token", response.token);

      const role = getRoleFromToken();

      if (role === "ADMIN") {
      navigate("/admin/dashboard");
      }
      else if (role === "ORGANIZER") {
      navigate("/organizer/dashboard");
      }
      else if (role === "STAFF"){
        navigate("/staff/dashboard");
      }
      else if(role === "ATTENDEE"){
      navigate("/attendee/dashboard");
      }

    } catch (error) {

        alert(
            error.response?.data?.message ||
            error.message
        );

    } finally {

        setLoading(false);

    }

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
    <Card className="w-[420px]">

      <CardHeader>
        <CardTitle className="text-3xl text-center">
          Login
        </CardTitle>
      </CardHeader>

      <CardContent>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div className="space-y-2">

            <Label>Email</Label>

            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}

          </div>

          <div className="space-y-2">

            <Label>Password</Label>

            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}

          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

      </CardContent>

    </Card>
    </div>
  );
}

export default Login;