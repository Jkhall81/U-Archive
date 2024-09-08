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
        className="size-full tablet:flex justify-between items-center px-8 pb-4"
      >
        <div className="flex justify-between">
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
        </div>
        <div className="flex justify-center mt-2">
          <Button
            type="submit"
            className="text-xl tablet:w-[10vw] w-[180px] ml-4 rounded-xl border-2 border-black dark:bg-white dark:text-black bg-neutral-300 text-black"
          >
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default SearchBar;
