import Footer from "../components/Footer";
import ListItem from "../components/ListItem";
import NavigationButton from "../components/NavigationButton";

function Experience() {
  return (
    <>
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
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"TypeScript"}
                desc={"+20 projects made with vanilla JS"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"C"}
                desc={"+20 projects made with C"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"C#"}
                desc={"+15 projects made with C#"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Python"}
                desc={"+30 projects made with Python"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"PHP"}
                desc={"2 projects made with PHP"}
                image={"diogoagostinho.jpg"}
              />
            </div>
            <div className="work__section">
              <p className="resumestatus">
                Frameworks <hr />
              </p>
              <ListItem
                title={"React"}
                desc={"+20 projects made with ReactJS"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Next"}
                desc={"+10 projects made with NextJS"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Express"}
                desc={"2 projects made with ExpressJS"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Bootstrap and Tailwind CSS"}
                desc={"+5 projects made with Bootstrap or Tailwind CSS"}
                image={"diogoagostinho.jpg"}
              />
            </div>
            <div className="work__section">
              <p className="resumestatus">
                Database & Clouds <hr />
              </p>
              <ListItem
                title={"MySQL"}
                desc={"1 project built with MySQL DB"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Firebase"}
                desc={"1 project built with Firebase"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Vercel"}
                desc={"+10 apps deployed to Vercel"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Netlify"}
                desc={"+5 apps deployed to Netlify"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Cloudinary"}
                desc={"1 app with Cloudinary API integration"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"AWS"}
                desc={"1 full-stack app deployed to AWS"}
                image={"diogoagostinho.jpg"}
              />
            </div>
            <div className="work__section">
              <p className="resumestatus">
                Tools & Libraries <hr />
              </p>
              <ListItem
                title={"Vite"}
                desc={"+5 projects made with Vite"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Insomnia & Postman"}
                desc={"+5 apps tested with Insomnia and/or Postman"}
                image={"diogoagostinho.jpg"}
              />
              <ListItem
                title={"Figma"}
                desc={"+5 apps designed with Figma"}
                image={"diogoagostinho.jpg"}
              />
            </div>
          </div>
          <div className="work-right">
            <NavigationButton
              title={"ABOUT ME"}
              desc={"Learn all about me!"}
              link={"/"}
              active={false}
            />
            <NavigationButton
              title={"WORK"}
              desc={"View my portfolio"}
              link={"/work"}
              active={false}
            />
            <NavigationButton
              title={"RESUME"}
              desc={"My studies and certifications"}
              link={"/resume"}
              active={false}
            />
            <NavigationButton
              title={"EXPERIENCE"}
              desc={"Everything I know"}
              link={"/experience"}
              active={true}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Experience;
