"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const SearchBar = () => {
    const router = useRouter();

    const [keyword, setKeyword] = useState("");
    const handleOnChange = (e: any) => {
      setKeyword(e.target.value);
      console.log(keyword);
    };
    const startSearch = (e: any) => {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    };
    return (
      <form className="flex" onSubmit={startSearch}>
        <Input value={keyword} onChange={handleOnChange}></Input>
        <Button type="submit">Search</Button>
      </form>
    );
  };
  
  return (
    <div>
      <h1>Main page</h1>
      <SearchBar></SearchBar>
    </div>
  );
}
