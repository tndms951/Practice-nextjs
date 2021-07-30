import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>next 홈페이지 입니당</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
