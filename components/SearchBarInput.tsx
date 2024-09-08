"use client";

import { z } from "zod";
import { searchBarSchema } from "@/schemas/forms/searchBarSchema";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type FormValues = z.infer<typeof searchBarSchema>;

interface Props {
  label: string;
  name: keyof FormValues;
  placeHolder: string;

  form: UseFormReturn<FormValues>;
}

export const SearchBarInput = ({ label, placeHolder, name, form }: Props) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className="lg:flex items-center">
          <FormLabel className="w-full ml-4 text-xl 3xl:mr-0 select-none">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className="rounded-xl ml-4 w-[180px] lg:w-[10vw] dark:text-black dark:bg-white"
              placeholder={placeHolder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
