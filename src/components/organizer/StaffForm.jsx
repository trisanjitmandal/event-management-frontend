import { useForm } from "react-hook-form";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

function StaffForm ({onSubmit}){

    const {
        register,handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm ({

        defaultValues: {
            name: "",email: "", password: ""
        },
    });

    return (

         <Card>

            <CardHeader>

                <CardTitle>

                    Staff Information

                </CardTitle>

            </CardHeader>

            <CardContent>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    {/* Name */}

                    <div className="space-y-2">

                        <Label>

                            Name

                        </Label>

                        <Input

                            placeholder="Enter staff name"

                            {...register("name", {

                                required: "Name is required",

                            })}

                        />

                        {errors.name && (

                            <p className="text-sm text-red-500">

                                {errors.name.message}

                            </p>

                        )}

                    </div>

                    {/* Email */}

                    <div className="space-y-2">

                        <Label>

                            Email

                        </Label>

                        <Input

                            type="email"

                            placeholder="Enter staff email"

                            {...register("email", {

                                required: "Email is required",

                                pattern: {

                                    value:
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                                    message: "Invalid email address",

                                },

                            })}

                        />

                        {errors.email && (

                            <p className="text-sm text-red-500">

                                {errors.email.message}

                            </p>

                        )}

                    </div>

                    {/* Password */}

                    <div className="space-y-2">

                        <Label>

                            Password

                        </Label>

                        <Input

                            type="password"

                            placeholder="Enter password"

                            {...register("password", {

                                required: "Password is required",

                                minLength: {

                                    value: 6,

                                    message:
                                        "Password must be at least 6 characters",

                                },

                            })}

                        />

                        {errors.password && (

                            <p className="text-sm text-red-500">

                                {errors.password.message}

                            </p>

                        )}

                    </div>

                    <div className="flex justify-end">
                        <Button 
                        type = "Submit"
                        disabled = {isSubmitting}
                        
                        >
                           { isSubmitting ? "Creating.." : "Create Staff" }
                        </Button>
                    </div>
                    </form>
                    </CardContent>
            </Card>
    );
}

export default StaffForm;