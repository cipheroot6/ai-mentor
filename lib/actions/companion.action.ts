"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/utils/supabase/supabase"; 

export const createCompanion = async (FormData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient(); 

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...FormData, author })
    .select();

  if (error || !data) {
    throw new Error(error?.message || "Something went wrong");
  }
  return data[0];
};
