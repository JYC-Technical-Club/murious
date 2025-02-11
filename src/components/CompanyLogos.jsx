import { companyLogos } from "../constants";
import Heading from "./Heading";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const CompanyLogos = ({ className }) => {
  return (
    <div id="sponsors" className={className}>
      <Heading className="md:max-w-md lg:max-w-2xl" title="Sponsors" />
      <Marquee
        fade={true}
        direction="left"
        className="gap-[5rem]"
        innerClassName="gap-[5rem] [--duration:15s]"
        pauseOnHover={true}
      >
        {companyLogos.map((logo, index) => (
          <img src={logo} width={134} height={28} alt={logo} key={index} />
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyLogos;
