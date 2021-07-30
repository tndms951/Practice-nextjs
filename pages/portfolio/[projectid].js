import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>포트폴리오 프로젝트 페이지 입니다</h1>
    </div>
  );
}

export default PortfolioProjectPage;
