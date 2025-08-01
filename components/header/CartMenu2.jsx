import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function CartMenu2({ setIsOpen }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInsideMenu, setIsInsideMenu] = useState(false);

  useEffect(() => {
    // وقتی کامپوننت بازه، اسکرول صفحه غیرفعال باشه
    document.body.classList.add("overflow-hidden");

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="h-[800px] inset-0 z-50 bg-black/40 fixed flex justify-end cursor-none"
      onClick={() => setIsOpen(false)}
    >
      {/* موس سفارشی فقط وقتی موس بیرون منو است نمایش داده می‌شود */}
      {!isInsideMenu && (
        <div
          className="fixed z-[100] w-12 h-12 rounded-full text-2xl bg-white text-black flex items-center justify-center pointer-events-none select-none"
          style={{
            top: mousePos.y - 16,
            left: mousePos.x - 16,
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full cursor-auto max-w-[477px] bg-white p-5 text-black flex flex-col flex-grow"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsInsideMenu(true)}
        onMouseLeave={() => setIsInsideMenu(false)}
      >
        <div className="flex items-center justify-between px-5 p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl hover:text-gray-500 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free shipping section */}
        <div className="px-2 py-2  flex flex-col items-start gap-3 border-b w-full">
          <div className="relative border-red-600 border-[1px] rounded-sm flex items-center justify-center right-[5px] w-[46px] h-[29px] top-[25px] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="17"
              viewBox="0 0 21 14"
              fill="currentColor"
              className=" text-red-600"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"
              ></path>
            </svg>
          </div>
          <div className="w-[400px] bg-gray-300 h-[5px]"></div>
          <div className=" flex items-center gap-[5px]">
            <p className="font-bold text-sm">Free Shipping</p>
            <p className="text-sm text-gray-600">
              for all orders of{" "}
              <strong className="text-black text-[18px]">€113,95</strong>
            </p>
          </div>
        </div>

        {/* Empty cart message */}
        <div className="flex-1 flex top-0 flex-col justify-center items-center px-6 text-center">
          <h3 className="text-[36px] font-semibold mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6 text-sm">
            You may check out all the available products and buy some in the
            shop
          </p>
          <button className="bg-black h-[42px] text-white px-5 py-2 rounded font-semibold flex items-baseline  justify-center  gap-2 hover:opacity-90 transition">
            Return to shop
            <svg
              class="hdt-icon hdt-icon-2"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M6.89,64,0,57.11,47.26,9.85H4.92V0H64V59.08H54.15V16.74Z"></path>
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
