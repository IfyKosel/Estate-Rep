"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const SearchForm = () => {
  const form = useForm();
  return (
    <div className="grid w-full items-end gap-4 rounded-[6px] bg-black sm:grid-cols-2 lg:grid-cols-4 p-6">
      <Form {...form}>
        <FormField
          control={form.control}
          name="Address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Property</FormLabel>
                <Select>
                  <SelectTrigger className="bg-white rounded-[4px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded-[4px]">
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="Address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Search by Address"
                    className="bg-white rounded-[4px]"
                  />
                </FormControl>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white">Buy/Sell Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal bg-white hover:bg-white rounded-[4px]",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 bg-white rounded-[4px]"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-800 text-white rounded-[4px]">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
