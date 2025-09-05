import React, { FC, ReactNode } from "react";

const CaraKerjaSection = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-violet-300 to-white flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-semibold">
          Cara Kerjanya Tucerr
        </h1>
        <p className="pt-3 text-center leading-relaxed font-light">
          Mudahkan karya Anda menjangkau pembaca melalui kekuatan komunitas dan
          teknologi di Tucerr.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-center items-center lg:px-40 px-4 pt-20">
          <CardCaraKerja no={1} title="Buat">
            Bagikan kisah unik dan asli milikmu di Tucerr. Temukan inspirasi dan
            panduan menulis yang membantumu menghadirkan cerita yang hanya bisa
            lahir dari imajinasimu sendiri.
          </CardCaraKerja>
          <CardCaraKerja no={2} title="Bangun">
            Raih pembaca dari berbagai penjuru dunia seiring kisahmu meraih
            popularitas. Jalin koneksi dengan penulis lain yang memiliki passion
            bercerita seperti dirimu.
          </CardCaraKerja>
          <CardCaraKerja no={3} title="Perluas jangkauan">
            Wujudkan ceritamu menjadi buku terbit atau adaptasi layar lebar dan
            serial televisi bersama Tucerr Studios!
          </CardCaraKerja>
        </div>
      </section>
    </>
  );
};

type CardCaraKerjaProps = {
  children?: ReactNode;
  no: number;
  title: string;
};

const CardCaraKerja: FC<CardCaraKerjaProps> = ({ no, title, children }) => {
  return (
    <div className="w-fit flex gap-3 mb-3">
      <h1 className="text-6xl font-bold">{no}</h1>
      <div className="">
        <h2 className="text-2xl font-bold -mt-2">{title}</h2>
        <p className="text-sm pt-3 leading-relaxed text-gray-500 max-w-md">
          {children}
        </p>
      </div>
    </div>
  );
};

export default CaraKerjaSection;
