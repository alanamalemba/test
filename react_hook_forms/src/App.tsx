import React from "react";
import "./App.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 10 characters"),
});

type FormFields = z.infer<typeof schema>;

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@mail.com",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();

      console.log(data);
    } catch (error) {
      setError("email", { message: "This Email is taken" });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="email" />
        {errors.email && <div>{errors.email.message}</div>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && <div>{errors.password.message}</div>}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
