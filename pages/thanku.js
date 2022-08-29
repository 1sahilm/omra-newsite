import { useEffect } from "react";
import Header2 from "../layout/header-2";
import Footer from "../layout/footer";
import Link from "next/link";
import Styles from "../scss/demo/thanku.module.scss";
import Image from "next/dist/client/image";

function Thanku() {
  return (
    <>
      <Header2 />
      <section>
        <div className={Styles.imageSection13}>
          <div className="container">
            <p className={Styles.bannerTitle}>
              Our Representative Will Get Back to You Shortly
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
export default Thanku;
