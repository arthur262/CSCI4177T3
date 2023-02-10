import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <button>
        <Link href="/Registration" style={{ justifyContent: "center" }}>
          Registration
        </Link>
      </button>
    </main>
  );
}
