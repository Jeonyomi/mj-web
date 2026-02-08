export type Lang = "en" | "ko";

export type Experience = {
  company: string;
  title: string;
  period: string;
  tags?: string[];
  bullets: string[];
};

export type Project = {
  name: string;
  oneLiner: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type PortfolioContent = {
  name: string;
  role: string;
  location?: string;
  summary: string;
  personal?: {
    cell?: string;
    birth?: string;
    gender?: string;
  };
  links: { label: string; href: string }[];
  sections: {
    experienceTitle: string;
    projectsTitle: string;
    educationTitle: string;
    contactTitle: string;
  };

  /** High-level focus areas (e.g., Blockchain/Web3, Healthcare) */
  experienceHighlights?: {
    title: string;
    tags?: string[];
    bullets: string[];
  }[];

  /** Detailed roles */
  experience: Experience[];

  projects: Project[];
  education?: string[];
  contact: {
    headline: string;
    body: string;
  };
};

export const content: Record<Lang, PortfolioContent> = {
  en: {
    name: "Myung-joon Jeon (MJ)",
    role: "Sr. Global Project Manager · Regulated Stablecoin & On-chain FX",
    location: "Seoul, Korea",
    personal: {
      cell: "+82-10-9989-5667",
      birth: "1986.06.22",
      gender: "Male",
    },
    summary:
      "Since 2010, I’ve led projects and engineered solutions across semiconductors, healthcare, and blockchain. I’m currently focused on building regulated stablecoin and FX infrastructure that makes blockchain-based payments and cross-border finance simple, compliant, and accessible for banks, fintechs, and everyday users.",
    links: [
      { label: "Email", href: "mailto:jeonyomi@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mjjeon" },
    ],
    sections: {
      experienceTitle: "Experience",
      projectsTitle: "Projects",
      educationTitle: "Education",
      contactTitle: "Contact",
    },
    experienceHighlights: [
      {
        title: "Blockchain / Web3",
        tags: ["Regulated Stablecoin", "On-chain FX", "Institutional Web3"],
        bullets: [
          "Current focus: regulated stablecoin infrastructure and on-chain FX hubs for real-world payments and cross-border finance.",
          "Lead cross-functional alignment across product/engineering/compliance/partners to deliver compliant Web3 services.",
          "Experience across enterprise PoCs (L1 ecosystems), NFT products, wallets, marketplaces, and institutional dashboards.",
          "Translate fintech/Web3 research into executive-level briefings, roadmap options, and GTM recommendations.",
        ],
      },
      {
        title: "Healthcare",
        tags: ["Ultrasound", "NPI", "Quality"],
        bullets: [
          "Software Project Leader / SW Engineer on NPI ultrasound programs (Voluson series), coordinating global stakeholders and deliverables.",
          "Authored design outputs and documentation (verification, user manual, service manual) for system base/setup, imaging (3D/4D), measurements, options, and service platform.",
          "Managed bug triage and software fixes from customer complaints; communicated status and resolution across teams.",
          "Worked with vendors and platforms (Congatec COM Express, AMD GPU, Microsoft OS) and manufacturing teams to optimize production steps involving software.",
          "Supported audits and quality systems (FDA, GMED, KGMP, internal) and executed CAPA/quality management processes.",
          "Production Engineer (2011–2014): drove process control, NPI validation, equipment qualification, lean/CI, calibration and cost reduction activities.",
        ],
      },
    ],
    experience: [
      {
        company: "GURUFIN",
        title: "Sr. Global Project Manager",
        period: "Dec 2024 – Present",
        tags: ["Regulated Stablecoins", "On-chain FX/DeFi", "GTM"],
        bullets: [
          "Lead global project management for the Gurufin initiative—accelerating Web3 adoption through bank-integrated stablecoin and FX infrastructure.",
          "Drive cross-functional collaboration across engineering, marketing, design, and business development to deliver aligned roadmaps and go-to-market execution.",
          "Conduct Web3/fintech trend research and produce executive-level reports and recommendations for C-level stakeholders.",
          "Focus areas: regulated stablecoins, on-chain FX/DeFi hubs, and real-world payment use cases.",
        ],
      },
      {
        company: "INNOGRID (D-Tech Center)",
        title: "Project Planning Manager",
        period: "Jun 2023 – Dec 2024",
        tags: ["Enterprise Web3", "PoC", "Consulting"],
        bullets: [
          "Consulted and planned Web3 services and L1-based use cases for large enterprises.",
          "Delivered PoCs: 3 use-cases (2024) and 5 use-cases (2023).",
          "Project management for Web3 services: Wallet, Marketplace, NFT, DeFi, ESG.",
          "Led cross-functional collaboration and wrote trend reports for C-level and internal teams.",
        ],
      },
      {
        company: "Fingerlabs",
        title: "Head of PM & Business Strategy",
        period: "May 2022 – Jun 2023",
        tags: ["NFT", "Marketplace", "Token"],
        bullets: [
          "Developed and launched NFT and blockchain products end-to-end—from initial planning to launch.",
          "Led PM direction and service development; improved products via user/field feedback loops.",
          "Managed NFT projects (PFP, P&E, Membership) for B2C and B2B; drove BD for wallet and marketplace.",
          "Partnered with major companies and global L1/L2 ecosystems; supported token listing and ecosystem operations.",
        ],
      },
      {
        company: "GE Healthcare",
        title: "Software Project Leader",
        period: "Sep 2014 – May 2022",
        tags: ["Ultrasound", "Quality", "Global"],
        bullets: [
          "PRM (Product Roadmap Meeting) member for NPI planning; created/maintained software components and documentation.",
          "Managed bug triage/fixes and requirements clarification; hosted weekly global syncs and coordinated stakeholders.",
          "Key programs: Voluson PC400/SC400 (SW PL, 2019–2022), Voluson SPC330/340 (SW PL, 2017–2019), Voluson SPC310 (SW Eng, 2015–2016).",
        ],
      },
    ],
    projects: [
      {
        name: "Regulated Stablecoin Infrastructure",
        oneLiner:
          "Bank-integrated stablecoin and compliance-aligned infrastructure to enable real-world payments.",
      },
      {
        name: "On-chain FX / DeFi Hub",
        oneLiner:
          "Designing FX hubs and institutional dashboards for cross-border finance workflows.",
      },
      {
        name: "Enterprise Web3 PoCs",
        oneLiner: "Delivered 8 PoC use-cases across 2023–2024 with L1 ecosystems.",
      },
      {
        name: "Healthcare NPI Delivery",
        oneLiner:
          "Led ultrasound NPI programs and cross-functional software delivery under SDLC processes.",
      },
    ],
    education: [
      "Sogang University — M.S. in Data Science & Artificial Intelligence (in progress), 2024–Present",
      "KOREATECH — B.S. in Electronic Engineering, 2006–2010",
    ],
    contact: {
      headline: "Let’s connect.",
      body: "For roles or collaborations in regulated stablecoins, FX/payment, and product/project leadership—reach me via email or LinkedIn.",
    },
  },
  ko: {
    name: "전명준(MJ)",
    role: "Sr. Global Project Manager · 규제형 스테이블코인 & 온체인 FX",
    location: "서울, 대한민국",
    personal: {
      cell: "+82-10-9989-5667",
      birth: "1986.06.22",
      gender: "남성",
    },
    summary:
      "2010년부터 반도체·헬스케어·블록체인 등 다양한 산업에서 프로젝트를 리드하고 솔루션을 구축해왔습니다. 현재는 은행/핀테크/일반 사용자 모두가 쉽게 사용할 수 있도록, 결제·크로스보더 금융을 단순하고 준법적으로 만드는 규제형 스테이블코인 및 FX 인프라 구축에 집중하고 있습니다.",
    links: [
      { label: "Email", href: "mailto:jeonyomi@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mjjeon" },
    ],
    sections: {
      experienceTitle: "경력",
      projectsTitle: "프로젝트",
      educationTitle: "학력",
      contactTitle: "연락처",
    },
    experienceHighlights: [
      {
        title: "블록체인 / Web3",
        tags: ["규제형 스테이블코인", "온체인 FX", "기관/엔터프라이즈"],
        bullets: [
          "현재 집중 영역: 규제형 스테이블코인 인프라 및 온체인 FX 허브(실사용 결제/크로스보더 금융).",
          "제품/엔지니어링/컴플라이언스/파트너를 정렬해 준법 기반 Web3 서비스를 출시.",
          "L1 생태계 기반 엔터프라이즈 PoC, NFT 제품, 지갑/마켓플레이스, 기관 대시보드 등 다양한 Web3 서비스 경험.",
          "리서치를 경영진 브리핑/로드맵 옵션/GTM 권고안으로 구조화해 의사결정 지원.",
        ],
      },
      {
        title: "헬스케어",
        tags: ["Ultrasound", "NPI", "Quality"],
        bullets: [
          "NPI 초음파(Voluson) 프로그램에서 SW 프로젝트 리더/엔지니어로 글로벌 이해관계자와 산출물 관리.",
          "시스템 베이스/셋업, 3D/4D, 측정, 옵션, 서비스 플랫폼에 대한 설계 산출물 및 문서(검증, 사용자/서비스 매뉴얼) 작성.",
          "고객 불만 이슈 기반 버그 트리아지 및 SW 수정/배포, 진행 현황 커뮤니케이션.",
          "벤더/플랫폼(Congatec COM Express, AMD GPU, Microsoft OS) 및 제조팀과 협업해 SW 연계 생산 공정 최적화.",
          "감사(FDA, GMED, KGMP, 내부) 대응 및 CAPA 등 품질 시스템 기반 활동 수행.",
        ],
      },
    ],
    experience: [
      {
        company: "GURUFIN",
        title: "Sr. Global Project Manager",
        period: "2024.12 – 현재",
        tags: ["규제형 스테이블코인", "온체인 FX/DeFi", "GTM"],
        bullets: [
          "은행 연계 스테이블코인 및 FX 인프라를 통해 Web3 대중화를 가속하는 Gurufin 이니셔티브 글로벌 PM 리드.",
          "엔지니어링/마케팅/디자인/BD 등 유관 조직 협업으로 로드맵 정렬 및 GTM 실행.",
          "Web3/핀테크 트렌드 리서치 및 C-level 대상 요약 리포트/권고안 작성.",
          "포커스: 규제형 스테이블코인, 온체인 FX/DeFi 허브, 실사용 결제 유스케이스.",
        ],
      },
      {
        company: "INNOGRID (D-Tech Center)",
        title: "Project Planning Manager",
        period: "2023.06 – 2024.12",
        tags: ["Enterprise Web3", "PoC", "Consulting"],
        bullets: [
          "대기업 대상 Web3 서비스 및 L1 기반 유스케이스 컨설팅/기획.",
          "PoC 수행: 2024년 3건, 2023년 5건(총 8건).",
          "Web3 서비스 PM: Wallet, Marketplace, NFT, DeFi, ESG.",
          "유관 조직 협업 및 C-level/내부 대상 트렌드 리포트 작성.",
        ],
      },
      {
        company: "Fingerlabs",
        title: "Head of PM & Business Strategy",
        period: "2022.05 – 2023.06",
        tags: ["NFT", "Marketplace", "Token"],
        bullets: [
          "NFT/블록체인 제품을 초기 기획부터 런칭까지 end-to-end로 개발/출시.",
          "PM 방향성과 서비스 개발을 리드하고, 사용자/현장 피드백 기반으로 지속 개선.",
          "B2C/B2B NFT 프로젝트(PFP, P&E, Membership) 운영 및 지갑/마켓플레이스 BD 수행.",
          "대기업 및 글로벌 L1/L2 파트너 협업, 토큰 상장 및 생태계 운영 지원.",
        ],
      },
      {
        company: "GE Healthcare",
        title: "Software Project Leader",
        period: "2014.09 – 2022.05",
        tags: ["Ultrasound", "Quality", "Global"],
        bullets: [
          "NPI 기획(PRM 참여), SW 컴포넌트/문서 작성, SDLC 기반 품질 개발 수행.",
          "버그 관리/수정, 요구사항 정의 지원, 주간 글로벌 싱크 진행 및 이해관계자 조율.",
          "주요 프로그램: Voluson PC400/SC400(SW PL, 2019–2022), Voluson SPC330/340(SW PL, 2017–2019), Voluson SPC310(SW Eng, 2015–2016).",
        ],
      },
      {
        company: "GE Healthcare",
        title: "Product / Production Engineer",
        period: "2011 – 2014.09",
        tags: ["Manufacturing", "NPI", "Lean"],
        bullets: [
          "공정관리, NPI 검증, 장비 적격성, Lean/지속개선, 교정/원가절감 수행.",
          "생산 준비 및 품질 이슈 대응(감사/시정조치 등) 지원.",
        ],
      },
    ],
    projects: [
      {
        name: "규제형 스테이블코인 인프라",
        oneLiner: "은행 연계 스테이블코인과 준법 기반 인프라로 실사용 결제를 가능하게 합니다.",
      },
      {
        name: "온체인 FX / DeFi 허브",
        oneLiner: "크로스보더 금융 워크플로우를 위한 FX 허브 및 기관 대시보드를 설계합니다.",
      },
      {
        name: "Enterprise Web3 PoC",
        oneLiner: "2023–2024년 총 8건의 PoC 유스케이스를 수행했습니다.",
      },
      {
        name: "헬스케어 NPI 딜리버리",
        oneLiner: "초음파 NPI 프로그램을 리드하며 SDLC 기반 SW 납품과 품질 프로세스를 수행했습니다.",
      },
    ],
    education: [
      "서강대학교 — 데이터사이언스 & 인공지능 석사(재학/진행중), 2024–현재",
      "KOREATECH — 전자공학 학사, 2006–2010",
    ],
    contact: {
      headline: "연락 주세요.",
      body: "규제형 스테이블코인, FX/결제, 제품/프로젝트 리더십 관련 협업/포지션은 이메일 또는 링크드인으로 연락 부탁드립니다.",
    },
  },
};
