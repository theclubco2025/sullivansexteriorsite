import { z } from "zod";
const req = (n:string)=>z.string().trim().min(1,`${n} is required`);
export const quoteSchema = z.object({
  fullName:req("Full Name"), phone:req("Phone Number"), address:req("Service Address"),
  email:z.string().trim().email().optional().or(z.literal("")),
  service:req("Requested Service"), propertyType:req("Property Type"),
  preferredTiming:z.string().trim().optional(), details:z.string().trim().optional()
});
export const subscriptionSchema = z.object({
  fullName:req("Full Name"), phone:req("Phone Number"), address:req("Service Address"),
  email:z.string().trim().email().optional().or(z.literal("")),
  services:z.array(z.string()).min(1), frequency:req("Desired Frequency"),
  propertyType:req("Property Type"), notes:z.string().trim().optional()
});
