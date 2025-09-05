import React from "react";

const FooterSection = () => {
  return (
    <>
      <section className="bg-[url(/img/background-landing.jpg)] bg-center flex flex-col justify-between h-96 w-full">
        <div>
          <h1 className="text-center font-bold pt-20 text-2xl text-white">
            Ambil Tucerr bersama anda
          </h1>
          <p className="text-center text-white pt-3 font-light">
            Membaca dan menulis dimana saja
          </p>
          <div className="flex z-20 gap-5 justify-center items-center pt-10">
            <button className="px-5 py-2 hover:bg-violet-600 bg-violet-500 text-white font-semibold rounded-xl cursor-pointer transition duration-150 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] hover:-translate-y-1 active:scale-95">
              Mulai membaca
            </button>

            <button className="px-5 py-2 hover:bg-violet-600 bg-violet-500 text-white font-semibold rounded-xl cursor-pointer transition duration-150 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] hover:-translate-y-1 active:scale-95">
              Mulai menulis
            </button>
          </div>
          <div className="flex pt-4 justify-center">
            <img
              src="/img/device-background-landing.webp"
              className="w-[800px]"
              alt=""
            />
          </div>
        </div>
        <div className="text-gray-500 text-center justify-center pb-3 flex flex-wrap gap-4 items-center">
          <a href="" className="font-semibold text-sm hover:underline">
            Persyaratan
          </a>
          <a href="" className="font-semibold text-sm hover:underline">
            Privasi
          </a>
          <a href="" className="font-semibold text-sm hover:underline">
            Aksesibilitas
          </a>
          <a href="" className="font-semibold text-sm hover:underline">
            Bantuan
          </a>
          <p className="font-light text-xs">
            &copy; {new Date().getFullYear()} Tucerr
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
