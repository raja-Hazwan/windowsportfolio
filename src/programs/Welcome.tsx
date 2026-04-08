import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.jpg";
import userpic1 from "../../assets/userpic1.png";
import userpic2 from "../../assets/userpic2.png";
import userpic3 from "../../assets/userpic3.png";

const INTRO = `Hi, I’m Raja Hazwan, an aspiring software developer based in Malaysia. I hold a degree in
  Information Technology from the International Islamic University of Malaysia, and I’m passionate
  about crafting meaningful digital experiences — from clean, functional web apps to creative
  multimedia work.`;

const WHYSITE = `This website is more than just a portfolio — it’s a tribute to where it all began.
Growing up, my earliest memories with technology were sitting in front of my dad’s PC, clicking
through Windows, exploring every corner of the desktop out of pure curiosity. That old familiar
interface sparked something in me that never went away. Building this site in the style of a classic
Windows OS felt like the most personal way to show who I am as a developer — someone who’s come a
long way from that curious kid, but never forgotten where the journey started.`;

const INTERESTS = `Outside of coding, my biggest passion is video editing. There’s something deeply
satisfying about taking raw footage and shaping it into something that tells a story — whether it’s
pacing the cuts just right, finding the perfect soundtrack, or adding that final color grade that
ties everything together. To me, video editing sits at the intersection of technical precision and
creative expression, which is probably why I enjoy it so much.`;

const INTERESTS2 = `Video editing also taught me a lot about attention to detail and how much craft
goes into things that look effortless. A well-edited video, like well-written code, only looks
simple because a lot of thought went into it behind the scenes. That mindset carries over into
everything I build — I care about the details, the flow, and the experience of whoever ends up
using or watching the final product.`;

const INTERESTS3 = `I’m always looking to grow — whether that’s picking up a new editing technique,
experimenting with a new tech stack, or just finding a better way to tell a story. If you’d like
to connect, collaborate, or just have a chat, feel free to reach out through any of the links on
this page!
`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Raja Hazwan&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/raja-Hazwan",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/raja-muhammad-hazwan-bin-raja-azman-04502234b/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={gallery}
                text={"My Photography Collection"}
                tooltip="Click to view!"
                onClick={() => handleRunApp(4)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userpic2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userpic1.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userpic3.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What are your interests?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
