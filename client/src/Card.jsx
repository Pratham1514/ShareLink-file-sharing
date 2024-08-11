import { useEffect, useRef, useState } from "react";
import copy from "./assets/icons8-copy-link-100.png";
import { uploadFile } from "./services/api";

const Card = () => {
  const [file, setFile] = useState("");
  const [result, setResult] = useState(" ");
  const [icon, setIcon] = useState(false);

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
        setIcon(true);
      }
    };
    getImage();
  }, [file]);

  const uploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <p className="bg-transparent md:text-lg text-xs tracking-wider md:mt-10 mt-6">
        Upload and Share the Download link
      </p>
      <button
        className="md:w-[150px] w-[80px] md:h-[40px] h-[30px] md:text-[25px] text-[13px] rounded-lg bg-white btn hover:bg-white/80 md:mt-4"
        onClick={uploadClick}
      >
        Upload
      </button>
      <input
        className="inp"
        type="file"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <a
        className="flex items-center md:gap-5 bg-transparent md:text-[18px] text-[10px] md:mt-6 mt-5 text-black hover:text-gray-500 text-left pl-2 pr-2 text-wrap link"
        href={result}
      >
        {result}
        {icon && (
          <img
            src={copy}
            alt="copy btn"
            className="md:w-8 w-5 bg-transparent"
          />
        )}
      </a>
    </>
  );
};

export default Card;
