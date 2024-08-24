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
        <FormItem className="flex items-center">
          <FormLabel className="w-full text-xl">{label}</FormLabel>
          <FormControl>
            <Input
              className="rounded-xl w-[10vw] dark:bg-white"
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
