"use client";

import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function Page3() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password } = formData;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      setError("El correo debe ser válido.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!password.match(passwordRegex)) {
      setError(
        "La contraseña debe tener una mayúscula, mínimo 8 caracteres y un carácter especial."
      );
      return;
    }

    setError("");
    setIsSuccess(true);

    console.log("Usuario registrado:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isSuccess && (
        <h1 className="text-2xl font-bold text-green-600">
          ¡Bienvenido, {formData.name}!
        </h1>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Correo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
