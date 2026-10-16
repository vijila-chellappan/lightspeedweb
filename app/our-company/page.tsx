import type { Metadata } from "next";
import OurCompany from "../../components/company/OurCompany";

export const metadata: Metadata = {
  title: "Our Company | Light Speed Web",
  description:
    "Learn about Light Speed Web, our mission, vision, values, and leadership team.",
};

export default function OurCompanyPage() {
  return <OurCompany />;
}