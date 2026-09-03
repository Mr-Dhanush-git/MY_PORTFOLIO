import Cursor from "../components/Cursor";
import "./global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}