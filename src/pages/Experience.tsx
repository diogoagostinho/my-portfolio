import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../components/Footer";
import ListItem from "../components/ListItem";
import NavigationButton from "../components/NavigationButton";

function Experience() {
  return (
    <>
      <Fade duration={200}>
        <div className="work">
          <div className="work__content">
            <div className="work-left">
              <div className="work__header">
                <h1>Experience</h1>
                <h2>
                  All my past and current experiences with diverse tools,
                  languages and everything code related!
                </h2>
              </div>
              <div className="work__section">
                <p className="resumestatus">
                  Code Languages <hr />
                </p>
                <ListItem
                  title={"JavaScript"}
                  desc={"+40 projects made with vanilla JS"}
                  image={"JavaScript.png"}
                />
                <ListItem
                  title={"TypeScript"}
                  desc={"+20 projects made with vanilla JS"}
                  image={"TypeScript.png"}
                />
                <ListItem
                  title={"C"}
                  desc={"+20 projects made with C"}
                  image={"C.png"}
                />
                <ListItem
                  title={"C#"}
                  desc={"+15 projects made with C#"}
                  image={"Csharp.png"}
                />
                <ListItem
                  title={"Python"}
                  desc={"+30 projects made with Python"}
                  image={"python.png"}
                />
                <ListItem
                  title={"PHP"}
                  desc={"2 projects made with PHP"}
                  image={"php.png"}
                />
              </div>
              <div className="work__section">
                <p className="resumestatus">
                  Frameworks <hr />
                </p>
                <ListItem
                  title={"React"}
                  desc={"+20 projects made with ReactJS"}
                  image={"react.png"}
                />
                <ListItem
                  title={"Next"}
                  desc={"+10 projects made with NextJS"}
                  image={"next.png"}
                />
                <ListItem
                  title={"Express"}
                  desc={"2 projects made with ExpressJS"}
                  image={"express.png"}
                />
                <ListItem
                  title={"Tailwind"}
                  desc={"2 projects made with Tailwind CSS"}
                  image={"tailwind.png"}
                />
              </div>
              <div className="work__section">
                <p className="resumestatus">
                  Database & Clouds <hr />
                </p>
                <ListItem
                  title={"MySQL"}
                  desc={"1 project built with MySQL DB"}
                  image={"mysql.png"}
                />
                <ListItem
                  title={"Firebase"}
                  desc={"1 project built with Firebase"}
                  image={"firebaselogo.png"}
                />
                <ListItem
                  title={"Vercel"}
                  desc={"+10 apps deployed to Vercel"}
                  image={"vercel.png"}
                />
                <ListItem
                  title={"Netlify"}
                  desc={"+5 apps deployed to Netlify"}
                  image={"netlify.png"}
                />
                <ListItem
                  title={"Cloudinary"}
                  desc={"1 app with Cloudinary API integration"}
                  image={"cloudinary.png"}
                />
                <ListItem
                  title={"AWS"}
                  desc={"1 full-stack app deployed to AWS"}
                  image={"aws.png"}
                />
              </div>
              <div className="work__section">
                <p className="resumestatus">
                  Tools & Libraries <hr />
                </p>
                <ListItem
                  title={"Vite"}
                  desc={"+5 projects made with Vite"}
                  image={"vite.png"}
                />
                <ListItem
                  title={"Postman"}
                  desc={"1 apps tested with Postman"}
                  image={"postman.png"}
                />
                <ListItem
                  title={"Insomnia"}
                  desc={"4 apps tested with Insomnia"}
                  image={"insomnia.png"}
                />
                <ListItem
                  title={"Figma"}
                  desc={"+5 apps designed with Figma"}
                  image={"figma.png"}
                />
              </div>
            </div>
            <div className="work-right">
              <Slide direction="up" delay={50} duration={500} triggerOnce>
                <NavigationButton
                  title={"ABOUT ME"}
                  desc={"Learn all about me!"}
                  link={"/"}
                  active={false}
                />
              </Slide>
              <Slide direction="up" delay={100} duration={500} triggerOnce>
                <NavigationButton
                  title={"WORK"}
                  desc={"View my portfolio"}
                  link={"/work"}
                  active={false}
                />
              </Slide>
              <Slide direction="up" delay={150} duration={500} triggerOnce>
                <NavigationButton
                  title={"RESUME"}
                  desc={"My studies and certifications"}
                  link={"/resume"}
                  active={false}
                />
              </Slide>
              <Slide direction="up" delay={200} duration={500} triggerOnce>
                <NavigationButton
                  title={"EXPERIENCE"}
                  desc={"Everything I know"}
                  link={"/experience"}
                  active={true}
                />
              </Slide>
            </div>
          </div>
          <Footer />
        </div>
      </Fade>
    </>
  );
}
export default Experience;
