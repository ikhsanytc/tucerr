import {
  faAngleDown,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { LinkTulis } from "./navbar-link-tulis";

type NavbarMobileProps = {
  showSlide: boolean;
  setShowSlide: Dispatch<SetStateAction<boolean>>;
};

const NavbarMobile: FC<NavbarMobileProps> = ({ setShowSlide, showSlide }) => {
  const [showOverlayBtn, setShowOverlayBtn] = useState(false);
  const overlayBtnRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutsideOverlay = (e: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node)
      ) {
        setShowOverlayBtn(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutsideOverlay);
    return () => {
      window.removeEventListener("mousedown", handleClickOutsideOverlay);
    };
  }, []);
  useEffect(() => {
    if (showSlide) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showSlide]);
  return (
    <>
      <div
        className={`fixed z-[999] bg-gray-800/25 backdrop-filter backdrop-blur-lg w-full h-full ${
          showSlide ? "translate-y-0" : "-translate-y-full"
        } transition duration-300`}
        onClick={() => setShowSlide(false)}
      ></div>
      <div
        className={`fixed z-[9999] bg-white/75 backdrop-filter backdrop-blur-lg w-full h-[500px] bottom-0 transition duration-300 rounded-t-4xl ${
          showSlide ? "translate-y-0" : "translate-y-full"
        } p-5 `}
      >
        <div className="absolute top-6 right-6">
          <FontAwesomeIcon
            icon={faClose}
            size="1x"
            className="w-6 h-6"
            onClick={() => setShowSlide(false)}
          />
        </div>
        <h1 className="text-center font-bold text-2xl">Menu</h1>
        <div className="h-[400px] flex flex-col gap-4 justify-center items-center">
          <div
            className="bg-gray-800 px-12 py-2 flex items-center gap-1 rounded-xl text-white font-semibold active:scale-90 transition duration-200 w-3xs text-center justify-center relative h-10"
            ref={overlayBtnRef}
            onClick={() => setShowOverlayBtn((prev) => !prev)}
          >
            <p>Tulis</p>
            <span>
              <FontAwesomeIcon
                icon={faAngleDown}
                size="1x"
                className="w-6 h-6"
              />
            </span>
            <div
              className={`absolute top-full h-64 rounded-xl w-full text-center bg-gray-800/80 backdrop-filter backdrop-blur-lg p-5 ${
                showOverlayBtn
                  ? "translate-y-0"
                  : "translate-y-full opacity-0 pointer-events-none"
              } transition duration-300`}
              ref={overlayRef}
            >
              <div className="flex flex-col gap-2">
                <LinkTulis>Membuat cerita baru</LinkTulis>
                <LinkTulis>Cerita saya</LinkTulis>
              </div>
              <hr className="border-slate-300 mt-2 pb-2" />
              <div className="flex flex-col gap-2">
                <LinkTulis>Sumber bermanfaat bagi penulis</LinkTulis>
                <p>Program & peluang Tucerr</p>
                <p>Kontes menulis</p>
              </div>
            </div>
          </div>
          <button className="bg-gray-800 px-12 py-2 flex items-center gap-1 rounded-xl text-white font-semibold active:scale-90 transition duration-200 w-3xs text-center justify-center">
            Masuk
          </button>
          <button className="bg-gray-800 px-12 py-2 flex items-center gap-1 rounded-xl text-white font-semibold active:scale-90 transition duration-200 w-3xs text-center justify-center">
            Mendaftar
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
