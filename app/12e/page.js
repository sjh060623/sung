"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const [grade, setGrade] = useState(1);
  const [summ, setSumm] = useState(1);
  const [tar, setTar] = useState("중간");

  console.log(grade, summ, tar);

  function onClock() {
    if (grade == 1 && summ == 1 && tar == "중간") {
      router.push("/11m");
    }
    if (grade == 1 && summ == 1 && tar == "기말") {
      router.push("/11e");
    }
    if (grade == 1 && summ == 2 && tar == "중간") {
      router.push("/12m");
    }
    if (grade == 1 && summ == 2 && tar == "기말") {
      router.push("/12e");
    }
    if (grade == 2 && summ == 1 && tar == "중간") {
      router.push("/21m");
    }
    if (grade == 2 && summ == 1 && tar == "기말") {
      router.push("/21e");
    }
    if (grade == 2 && summ == 2 && tar == "중간") {
      router.push("/22m");
    }
    if (grade == 2 && summ == 2 && tar == "기말") {
      router.push("/22e");
    }
  }

  return (
    <div className="w-full h-full bg-slate-100">
      <header>
        <Image src={require("public/header.png")} />
      </header>
      <div>
        <div className="mx-6 my-4 h-12 bg-white rounded-lg shadow-sm">
          <h1 className=" translate-y-3 translate-x-3 font-bold ">성적표</h1>
        </div>
        <div className="mx-6 my-4 h-20 flex-row flex bg-white rounded-lg shadow-sm">
          <h1 className="mx-10 my-7">학년</h1>

          <select
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
            }}
            id="countries"
            className=" my-4 bg-white border-gray-500 rounded-lg border  w-32 h-12"
          >
            <option selected>1</option>
            <option>2</option>
          </select>
          <h1 className="mx-10 my-7">학기</h1>
          <select
            value={summ}
            onChange={(e) => {
              setSumm(e.target.value);
            }}
            id="countries"
            className=" my-4 bg-white border-gray-500 rounded-lg border   w-32 h-12"
          >
            <option >1</option>
            <option selected>2</option>
          </select>
          <h1 className="mx-10 my-7">성적기준</h1>
          <select
            value={tar}
            onChange={(e) => {
              setTar(e.target.value);
            }}
            id="countries"
            className=" my-4 bg-white border-gray-500 rounded-lg border   w-32 h-12"
          >
            <option >중간</option>
            <option selected>기말</option>
          </select>
          <button
            onClick={onClock}
            type="button"
            className=" translate-x-96 translate-y-4 text-white bg-blue-800  font-medium rounded-lg text-sm w-24 h-11 text-center "
          >
            조회
          </button>
        </div>
        <div className="mx-7 my-2 text-gray-600 text-sm">
          <h1>
            ※ 학교생활기록 작성 및 관리지침(교육부 훈령)에 따라 교과(목)별 일부
            항목은 조회되지 않을 수 있습니다.
          </h1>
          <h1>
            ※ 학교에서 성적을 처리한 후 반영된 자료에 한하여 조회 가능합니다.
            각종 증빙자료 용도로 활용될 효력이 없는 단순 열람용 자료입니다.
          </h1>
        </div>

        <div>
          <Image src={require("public/onetg.png")} />
        </div>
      </div>
      <footer>
        <Image src={require("public/bottom.png")} />
      </footer>
    </div>
  );
}
