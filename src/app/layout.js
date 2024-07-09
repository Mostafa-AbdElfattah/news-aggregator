import { Provider } from "@/store/provider";
import { Cairo } from "next/font/google";

import CustomAppWrapper from "@/components/CustomAppWrapper/CustomAppWrapper";
import "../scss/base.scss";

export const metadata = {
  title: "News Network",
  description: "Get in touch with the latest news",
};

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  display: "swap",
  variable: "--cairo-font",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <body className={cairo.className}>
        <Provider>
          <CustomAppWrapper>{children}</CustomAppWrapper>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
