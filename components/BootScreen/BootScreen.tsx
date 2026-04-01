import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./BootScreen.module.css";
import userprofile from "../../assets/userprofile.jpg";
import xpLogo from "../../assets/xp_logo_full.png";

type Step = 1 | 2 | 3 | 4;

interface Props {
  onComplete: () => void;
}

const BootScreen = ({ onComplete }: Props) => {
  const [step, setStep] = useState<Step>(1);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 200);
    const t2 = setTimeout(() => setStep(3), 3500);
    const t3 = setTimeout(() => setStep(4), 5000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleLogin = () => {
    const audio = new Audio("/sounds/startup.mp3");
    audio.volume = 0.8;
    audio.play().catch(() => {});
    onComplete();
  };

  if (step === 1) {
    return <div className={styles.black} />;
  }

  if (step === 2) {
    return (
      <div className={styles.step2}>
        <div className={styles.step2Center}>
          <Image src={xpLogo} alt="Windows XP" width={340} height={240} />
        </div>
        <div className={styles.loadingBarWrap}>
          <div className={styles.loadingBar}>
            <div className={styles.loadingGroup}>
              <div className={styles.loadingBox} />
              <div className={styles.loadingBox} />
              <div className={styles.loadingBox} />
            </div>
          </div>
        </div>
        <div className={styles.step2Bottom}>
          <span>Welcome</span>
          <span className={styles.username}>Raja Hazwan</span>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className={styles.step3}>
        <div className={styles.step3Header} />
        <div className={styles.step3Footer} />
      </div>
    );
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginHeader}>
        <p className={styles.loginTitle}>To begin, click your user name</p>
        <p className={styles.loginSubtitle}>Raja Hazwan&apos;s Personal Website</p>
      </div>
      <div className={styles.loginCenter}>
        <div className={styles.loginLeft}>
          <Image src={xpLogo} alt="Windows XP" width={200} height={141} />
        </div>
        <div className={styles.loginDivider} />
        <div className={styles.loginRight}>
          <div className={styles.loginCard} onClick={handleLogin}>
            <Image
              src={userprofile}
              alt="profile"
              width={96}
              height={96}
              className={styles.loginAvatar}
            />
            <div>
              <p className={styles.loginName}>Raja Hazwan</p>
              <p className={styles.loginHint}>Click to enter</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loginFooter}>
        <span>After you log on, you can add or change accounts.</span>
        <span>Just go to Control Panel and click User Accounts.</span>
      </div>
    </div>
  );
};

export default BootScreen;
