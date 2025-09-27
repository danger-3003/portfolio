import { MetaData } from "@/constants/Metadata";

export const metadata = MetaData["connect"];

export default function ConnectLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}