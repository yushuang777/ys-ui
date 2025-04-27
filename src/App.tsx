import Logo from "@/assets/logo.png";
import HelloWorld from "@/components/HelloWorld/HelloWorld";

import styles from "./App.module.css";
import { Button } from "./components";

export default function App() {
  return (
    <main className={styles.main}>
      <Button
        disabled
        onClick={() => {
          console.log(1111);
        }}
      >
        普通的button
      </Button>
      <Button size="small">smallbutton</Button>
      <Button size="large">largebutton</Button>
      <Button loading type="danger">
        dangerbutton
      </Button>
      <Button type="primary">primarybutton</Button>
      <Button size="default">defaultbutton</Button>
      <Button href="http://www.baidu.com" type="link">
        带链接的button
      </Button>
    </main>
  );
}
