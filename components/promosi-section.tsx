import { faBook, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PromosiSection = () => {
  return (
    <>
      <section className=" bg-violet-600 relative" id="">
        <p className="text-center text-2xl font-semibold text-white">
          Lihat cerita anda...
        </p>
        <div className="pt-8 flex justify-center items-center md:gap-32 lg:gap-32 gap-4 text-white">
          <div className="flex flex-col items-center gap-4 w-40">
            <FontAwesomeIcon icon={faTv} size="1x" className="w-7" />
            <p className="text-center lg:text-base md:text-base text-sm">
              Diproduksi menjadi film
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-40 ">
            <FontAwesomeIcon icon={faFilm} size="1x" className="w-7" />
            <p className="text-center lg:text-base md:text-base text-sm">
              Diadaptasi menjadi seri TV
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-40">
            <FontAwesomeIcon icon={faBook} size="1x" className="w-7" />
            <p className="text-center lg:text-base md:text-base text-sm">
              Diterbitkan
            </p>
          </div>
        </div>
        <div className="md:flex lg:flex block px-4 pt-20 lg:px-56 md:px-20 justify-center">
          <div className="md:w-fit lg:w-fit w-full">
            <img src="/img/posterCerita.webp" className="w-[600px]" alt="" />
          </div>
          <div className="text-white lg:w-fit md:w-fit">
            <h1 className="text-2xl">
              <span className="font-bold">Tucerr</span>{" "}
              <span className="font-light">Studios</span>
            </h1>
            <p className="pt-2 lg:text-xl md:text-xl text-base max-w-md">
              Cerita yang kamu buat, dapat menjadi terkenal nantinya...
            </p>
            <p className="text-gray-300 pt-4 lg:text-base md:text-base text-sm max-w-md">
              Tucerr Studio menjelajahi karya para penulis baru yang belum
              terikat kontrak namun memiliki potensi besar, lalu
              menghubungkannya dengan perusahaan hiburan multimedia di seluruh
              dunia.
            </p>
          </div>
        </div>
        <div className="pt-36 lg:px-56 md:px-20 px-4 lg:flex md:flex block justify-center gap-4">
          <div className="md:text-right lg:text-right text-white md:w-fit lg:w-fit w-full">
            <img
              src="/img/tucerrBooksPoster.webp"
              className="w-64 mx-auto block md:hidden lg:hidden"
              alt=""
            />
            <h1 className="text-xl">
              <span className="font-bold">Tucerr</span>{" "}
              <span className="font-light">Books</span>
            </h1>
            <div className="flex flex-col items-end">
              <p className="text-xl font-light pt-1 max-w-md">
                Kisahmu akan menjadi bagian berharga yang menghiasi rak buku.
              </p>
              <p className="text-gray-300 pt-4 max-w-md">
                Tucerr Books berkomitmen untuk menemukan dan menghadirkan
                beragam suara melalui kisah-kisah yang diubah menjadi buku
                terbitan yang dapat dinikmati pembaca di seluruh dunia.
              </p>
            </div>
          </div>
          <div className="w-fit lg:block md:block hidden">
            <img
              src="/img/tucerrBooksPoster.webp"
              className="w-[400px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PromosiSection;
