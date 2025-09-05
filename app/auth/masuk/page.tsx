import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tucerr - Masuk",
};

const PageMasuk = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-violet-300 to-white">
      <div className="w-1/2 h-96 p-5 bg-white rounded-xl shadow">
        <p className="text-center text-violet-600 text-5xl font-bold">Tucerr</p>
      </div>
    </div>
  );
};

export default PageMasuk;
