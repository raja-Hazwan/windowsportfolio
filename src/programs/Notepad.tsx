import { useState } from "react";
import styles from "./Notepad.module.css";

const Notepad = () => {
  const [content, setContent] = useState("");

  return (
    <div className={styles.main}>
      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
};

export default Notepad;
