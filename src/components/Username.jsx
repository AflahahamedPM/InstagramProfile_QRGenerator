import { useState } from "react";
import { INSTAGRAM_URL, options, INSTAGRAM_IMAGE_URL } from "../constants";
import QRCode from "react-qr-code";
import SearchInput from "./SearchInput";

const UserName = () => {
  const [userName, setUserName] = useState("");
  const [search, setSearch] = useState(0);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSearch = async () => {
    const data = await fetch(`${INSTAGRAM_URL}username=${userName}`, options);
    const response = await data.json();
    console.log(response);
    !response.status ? setSearch(response) : setSearch(2);
  };

  return (
    <div>
      {search === 0 ? (
        <>
          <div className="flex justify-center">
            <img className="w-[200px] mt-20" src={INSTAGRAM_IMAGE_URL} />
          </div>
          <div className="flex justify-center">
            <span className="text-white text-center font-sans my-5">
              <span className="font-bold">Create QR </span>
              <br /> for your instagram account !
            </span>
          </div>

          <SearchInput
            value={userName}
            onChange={handleChange}
            onSearch={handleSearch}
          />
        </>
      ) : search != 0 && search != 2 ? (
        <>
          <SearchInput
            value={userName}
            onChange={handleChange}
            onSearch={handleSearch}
          />
          <div className="relative w-[350px] h-[370px] bg-gray-700 mx-auto my-20 rounded-xl items-center">
            <div className="">
              <div className="flex justify-center">
                <h1 className=" bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent font-medium text-sm pt-5 mx-20">
                  User Name: {search.username}
                </h1>
              </div>

              <div className="flex justify-center">
                <h1 className="bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent font-medium text-sm pt-2 pb- mx-20">
                  Full Name: {search.full_name}
                </h1>
              </div>
            </div>

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center w-52 h-52  rounded-xl bg-white">
              <QRCode
                className="w-36 h-40 mx-auto"
                value={`https://www.instagram.com/${userName}/`}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <SearchInput
            value={userName}
            onChange={handleChange}
            onSearch={handleSearch}
          />
          <h1 className="text-red-700">{"invalid username"}</h1>
        </>
      )}
    </div>
  );
};

export default UserName;
