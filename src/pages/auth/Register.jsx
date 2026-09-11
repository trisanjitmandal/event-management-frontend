import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/api/authApi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Register() {

   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm({
  mode: "onBlur",
});

const onSubmit = async (data) => {
    
      const { confirmPassword, ...registerData } = data;

    try {

      setLoading(true);

      await registerUser(registerData);

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
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
          Register
        </CardTitle>
      </CardHeader>

      <CardContent >

        <form onSubmit={handleSubmit(onSubmit)} 
        className="space-y-4" >

        <div className="space-y-2 ">
          <Label>Name</Label>

           <Input
             placeholder="Enter your name"
               {...register("name", {
                 required: "Name is required",
                 minLength: {
                 value: 3,
                 message: "Name must be at least 3 characters",
                },
                 maxLength: {
                 value: 50,
                  message: "Name cannot exceed 50 characters",
                 },
                })} 
                />
                 {errors.name && (
                <p className="text-sm text-red-500">
                {errors.name.message}
                </p>
                )}
                
        </div>

        <div className="space-y-2 ">
          <Label>Email</Label>
        
                <Input
                type="email"
                 placeholder="Enter your email"
                {...register("email", {
                 required: "Email is required",
                 pattern: {
                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                 message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                <p className="text-sm text-red-500">
                {errors.email.message}
                </p>
                )}
        </div>

        <div className="space-y-2 ">
          <Label>Password</Label>

          <div className="relative">

          <Input
           type={showPassword ? "text" : "password"}
           placeholder="Enter your password"

           className="pr-10"
           {...register("password", {
            required: "Password is required",
            minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
           },

           maxLength: {
           value: 30,
           message: "Password cannot exceed 30 characters",
           },

           pattern: {
           value:
           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).+$/,
           message:
           "Password must contain uppercase, lowercase, number and special character",
           },
           })}
           />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
          {showPassword ? (
          <EyeOff className="h-4 w-4" />
          ) : (
          <Eye className="h-4 w-4" />
          )}
          </button> 

           </div>

            {errors.password && (
                <p className="text-sm text-red-500">
                {errors.password.message}
                </p>
                )}
        </div> 

        
          
        <div className="space-y-2">
          <Label>Confirm Password</Label>

          <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className= "pr-10"

            {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
            value === watch("password") || "Passwords do not match",
            })}
            />

         <button
            type="button"
            onClick={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showConfirmPassword ? (
            <EyeOff className="h-4 w-4" />
            ) : (
            <Eye className="h-4 w-4" />
            )}
            </button>

            </div>

            {errors.confirmPassword && (
           <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
           </p>
            )}
        </div>

         <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>

        </form>

      </CardContent>
    </Card>
    </div>
  );
}
export default Register;