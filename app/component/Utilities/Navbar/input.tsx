"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Input = () => {
  const inputValue = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const buttonSubmit = (
    event?:
      | React.MouseEvent<SVGElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event) {
      event.preventDefault();
    }
    if (inputValue.current) {
      const keyword = inputValue.current.value;
      alert(keyword);
      router.push(`/search/${keyword}`);
    }
  };

  const enterSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      buttonSubmit(event);
    }
  };
  return (
    <div className="relative mt-1">
      <input
        placeholder="Cari anime...."
        className="rounded-full md:h-8 px-3 pb-1 h-7 md:w-60 w-full md:pl-9 pl-5 box-border"
        ref={inputValue}
        onKeyDown={enterSubmit}
      />
      <AiOutlineSearch
        className="text-xl absolute top-1 md:top-2 md:right-52 right-2 text-gray-400"
        onClick={buttonSubmit}
      />
    </div>
  );
};

export default Input;
