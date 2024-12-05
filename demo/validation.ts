import { z } from "zod";

const dateSchema = z
  .string()
  .refine((dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    const today = new Date();

    // Validate format and ensure no future dates
    return (
      day > 0 &&
      month > 0 &&
      month <= 12 &&
      date.getDate() === day &&
      date.getMonth() + 1 === month &&
      date.getFullYear() === year &&
      date <= today
    );
  }, { message: "Invalid date or date cannot be in the future." });

// Test cases
console.log(dateSchema.safeParse("05/12/2024")); // Error
console.log(dateSchema.safeParse("04/12/2024")); // Valid
console.log(dateSchema.safeParse("31/02/2024")); // Error
