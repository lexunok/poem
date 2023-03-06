import React,{useState} from "react";
import One1 from "./components/One1";
import One2 from "./components/One2";
import One3 from "./components/One3";
import One4 from "./components/One4";
import One5 from "./components/One5";
import One6 from "./components/One6";
import One7 from "./components/One7";
import One8 from "./components/One8";
import One9 from "./components/One9";
import One10 from "./components/One10";
import One11 from "./components/One11";
import One12 from "./components/One12";
import One13 from "./components/One13";
import One14 from "./components/One14";
import Start from "./components/Start";
import "./Next.css"
import {Space,Card} from "antd"

export default function Next(){
    const [isShown, setIsShown] = useState("");
    return(
        <>{isShown===""&&<><div>
        <Space direction="vertical" size={50}>
          <Card className='border-4'
            title="Молитва покаяния всех земных"
            style={{
              width: 300,
            }}
          >
            <button onClick={() => setIsShown("1")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Гробовые молитвы</button>
            <button onClick={() => setIsShown("2")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>(Об) Отверженных</button>
            <button onClick={() => setIsShown("3")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Убаюканный колыбелью</button>
            <button onClick={() => setIsShown("4")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Человек заброшенный</button>
            <button onClick={() => setIsShown("5")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Увидевший мир</button>
          </Card>
          <Card className='border-4'
            title="Земные страсти"
            style={{
              width: 300,
            }}
          >
            <button onClick={() => setIsShown("6")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письма к Душегубу</button>
            <button onClick={() => setIsShown("7")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письма к Душегубу</button>
            <button onClick={() => setIsShown("8")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письма к Душегубу</button>
            <button onClick={() => setIsShown("9")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письма к Душегубу</button>
            <button onClick={() => setIsShown("10")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письмо Спасающему</button>
            <button onClick={() => setIsShown("11")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письмо Спасителя</button>
            <button onClick={() => setIsShown("12")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письмо к Безликому</button>
            <button onClick={() => setIsShown("13")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письмо к Великому</button>
            <button onClick={() => setIsShown("14")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Письмо к Матери</button>
          </Card>
        </Space>
      </div></>}{isShown!=""&&<button onClick={() => setIsShown("")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Назад</button>}
      {isShown!==""&&<div className="border-4 rounded ml-96 w-8/12 p-4 text-center text-lg font-sans">
          {isShown === "1" && <One1 />}
          {isShown === "2" && <One2 />}
          {isShown === "3" && <One3 />}
          {isShown === "4" && <One4 />}
          {isShown === "5" && <One5 />}
          {isShown === "6" && <One6 />}
          {isShown === "7" && <One7 />}
          {isShown === "8" && <One8 />}
          {isShown === "9" && <One9 />}
          {isShown === "10" && <One10 />}
          {isShown === "11" && <One11 />}
          {isShown === "12" && <One12 />}
          {isShown === "13" && <One13 />}
          {isShown === "14" && <One14 />}
        </div>}</>
    )
}