"use client";

import { useState, ChangeEvent } from "react";
import { demographicsData } from "@/lib/dummyData/demographics";
import { SearchBarInput } from "./SearchBarInput";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { searchBarSchema } from "@/schemas/forms/searchBarSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "./ui/form";

const SearchBar = () => {
  const [inputs, setInputs] = useState({
    lastName: "",
    dob: "",
    chartNumber: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (data: z.infer<typeof searchBarSchema>) => {
    console.log("Form Values: ", data);
  };

  const form = useForm<z.infer<typeof searchBarSchema>>({
    resolver: zodResolver(searchBarSchema),
    defaultValues: {
      lastName: "",
      dob: "",
      chartNumber: "254",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="size-full flex justify-between items-center px-8"
      >
        <SearchBarInput
          name="lastName"
          label="Last Name"
          placeHolder="Doe"
          form={form}
        />
        <SearchBarInput
          name="dob"
          label="Date of Birth"
          placeHolder="05/25/1993"
          form={form}
        />
        <SearchBarInput
          name="chartNumber"
          label="Chart Number"
          placeHolder="254"
          form={form}
        />
        <Button
          type="submit"
          className="text-xl rounded-xl dark:bg-white dark:text-black bg-slate-400 text-black"
        >
          Search
        </Button>
      </form>
    </Form>
  );
};
export default SearchBar;
