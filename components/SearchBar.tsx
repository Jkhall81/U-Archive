"use client";

import { SearchBarInput } from "./SearchBarInput";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { searchBarSchema } from "@/schemas/forms/searchBarSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "./ui/form";

interface SearchBarProps {
  onSubmit: (data: z.infer<typeof searchBarSchema>) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const form = useForm<z.infer<typeof searchBarSchema>>({
    resolver: zodResolver(searchBarSchema),
    defaultValues: {
      lastName: "",
      dob: "",
      chartNumber: "",
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
          placeHolder=""
          form={form}
        />
        <SearchBarInput
          name="dob"
          label="Date of Birth"
          placeHolder=""
          form={form}
        />
        <SearchBarInput
          name="chartNumber"
          label="Chart Number"
          placeHolder=""
          form={form}
        />
        <Button
          type="submit"
          className="text-xl w-[10vw] rounded-xl dark:bg-white dark:text-black bg-slate-400 text-black"
        >
          Search
        </Button>
      </form>
    </Form>
  );
};
export default SearchBar;
