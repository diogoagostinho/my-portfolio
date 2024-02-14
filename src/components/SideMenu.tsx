import { useEffect, useState } from "react";
import "../styles/sidemenu.scss";
import NavigationButton from "./NavigationButton";

function SideMenu() {
  const [webTitle, setWebTitle] = useState<string>();

  useEffect(() => {
    setWebTitle(document.title);
  }, []);

  let isAbout = false;
  let isWork = false;
  let isResume = false;
  let isExperience = false;

  switch (webTitle) {
    case "Diogo Agostinho - About":
      isAbout = true;
      isWork = false;
      isResume = false;
      isExperience = false;
      break;
    case "Diogo Agostinho - Work":
      isAbout = false;
      isWork = true;
      isResume = false;
      isExperience = false;
      break;
    case "Diogo Agostinho - Resume":
      isAbout = false;
      isWork = false;
      isResume = true;
      isExperience = false;
      break;
    case "Diogo Agostinho - Experience":
      isAbout = false;
      isWork = false;
      isResume = false;
      isExperience = true;
      break;

    default:
      isAbout = true;
      break;
  }

  return (
    <>
      <div className="sidemenu__block">
        <div className="sidemenu__content">
          <NavigationButton
            title={"ABOUT ME"}
            desc={"Learn all about me!"}
            link={"/"}
            active={isAbout ? true : false}
          />

          <NavigationButton
            title={"WORK"}
            desc={"View my portfolio"}
            link={"/work"}
            active={isWork ? true : false}
          />

          <NavigationButton
            title={"RESUME"}
            desc={"My studies and certifications"}
            link={"/resume"}
            active={isResume ? true : false}
          />

          <NavigationButton
            title={"EXPERIENCE"}
            desc={"Everything I know"}
            link={"/experience"}
            active={isExperience ? true : false}
          />
        </div>
      </div>
    </>
  );
}

export default SideMenu;
