import { MetaData } from "@/constants/Metadata";

export const metadata = MetaData["work"];

export default function BlogsLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}