import "./globals.css";
import QueryClientProviders from "../../utils/react-query/react-query";
import Header from "../../components/header";
import ColorWrapper from "../../utils/ColorWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ColorWrapper>
        <QueryClientProviders>
          <Header/>
          <div className="mt-[72px]">
          {children}
          </div>
        </QueryClientProviders>
        </ColorWrapper>
      </body>
    </html>
  );
}
