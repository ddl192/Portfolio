// Theme and Language Controls
const root = document.documentElement;
const STORAGE_KEYS = {
  theme: "ddl192_theme",
  lang: "ddl192_lang",
};

const themeBtn = document.getElementById("themeBtn");
let light = localStorage.getItem(STORAGE_KEYS.theme)
  ? localStorage.getItem(STORAGE_KEYS.theme) === "light"
  : true;
const themeText = { 
  en: { light: "☀️ Light", dark: "🌙 Dark" },
  fi: { light: "☀️ Vaalea", dark: "🌙 Tumma" }
};

const langBtn = document.getElementById("langBtn");
let lang = localStorage.getItem(STORAGE_KEYS.lang) || "en";
const texts = {
  en: {
    btn1: "LinkedIn",
    btn2: "GitHub",
    btn3: "TryHackMe",
    flag: "🇫🇮 Suomi",
    copy: {
      heroLede: "ICT student & aspiring SOC Analyst",
      desc: "Focused on log analysis, threat detection, and SIEM operations. Security+ certified, TryHackMe Top 1%, building hands-on SOC skills through home labs, detection engineering, and security automation.",
      card1Label: "🛡️ Threat Analysis",
      card1Title: "Automated IOC Analyzer",
      card1Body: "Developed a Python-based IOC analyzer integrating VirusTotal API to accelerate SOC triage, alert enrichment, and threat classification.",
      card1Item1: "Automated IOC lookups and threat scoring for hashes, domains, and IPs.",
      card1Item2: "Streamlined incident response by prioritizing high-risk alerts.",
      card1Item3: "Integrated threat intel into SOC workflows to reduce manual investigation time.",
      card1Metric1: "API integration",
      card1Metric2: "Analysis tool",
      card2Label: "⚙️ Detection Engineering",
      card2Title: "Sigma Rule Development",
      card2Body: "Hands-on experience creating Sigma rules mapped to MITRE ATT&CK to detect suspicious activity in Windows event logs, Sysmon, and common attack paths.",
      card2Item1: "Developed Sigma rules for Windows logs & Sysmon to detect TTPs and anomalous behaviors.",
      card2Item2: "Aligned detection logic with MITRE ATT&CK framework for structured threat coverage.",
      card2Item3: "Covered common attack paths and lateral movement techniques to improve SOC alerting.",
      card2Metric1: "Detection rules",
      card2Metric2: "ATT&CK aligned",
      card3Label: "📊 SIEM Operations",
      card3Title: "Hands-on ELK & Splunk Experience",
      card3Body: "Hands-on ELK & Splunk experience across practical SOC workflows: log ingestion, normalization, alert creation, detection tuning, and dashboard development.",
      card3Item1: "Configured ELK for centralized logging and log correlation.",
      card3Item2: "Built Splunk correlation searches and dashboards for threat detection.",
      card3Item3: "Triaged events and investigated alerts using IOC hits and behavioral indicators.",
      card3Item4: "Applied detection logic to reduce false positives and accelerate SOC response.",
      card3Metric1: "Stack",
      card3Metric2: "SIEM Platform",
      card4Label: "🌐 Network Monitoring",
      card4Title: "Wireshark & PCAP Investigations",
      card4Body: "Analyzing network traffic captures to support incident response, validate alerts, and identify anomalies.",
      card4Item1: "Conducting network triage during security investigations.",
      card4Item2: "Detecting and characterizing malicious traffic patterns.",
      card4Item3: "Performing deep packet inspection and protocol-level analysis.",
      card4Item4: "Leveraging PCAPs for threat hunting and alert verification.",
      card4Metric1: "TCP/IP analysis",
      card4Metric2: "Forensic investigations",
      capIntro: "Core Focus",
      capTitle: "Log analysis & event correlation",
      capBody: "Threat detection, SIEM operations, network monitoring, and Python automation for SOC workflows.",
      cap1Title: "Log Analysis & Event Correlation",
      cap1Body: "Analyzing security logs, correlating events, and identifying patterns in SIEM platforms.",
      cap2Title: "Threat Detection & IOC Enrichment",
      cap2Body: "Automated IOC enrichment and threat intelligence validation for SOC triage workflows.",
      cap3Title: "SIEM Operations",
      cap3Body: "Hands-on ELK & Splunk experience in log ingestion, alert creation, and detection tuning.",
      cap4Title: "Network Monitoring & Packet Analysis",
      cap4Body: "Wireshark & PCAP investigations for incident response and anomaly detection.",
      cap5Title: "Python Automation for SOC",
      cap5Body: "Building automation tools for alert enrichment, event triage, and SOC workflow optimization.",
      timelineIntro: "Recent Highlights",
      timelineTitle: "Key achievements & projects",
      timelineAWhen: "Aug 16, 2025",
      timelineATitle: "Developed IOC Analyzer with VirusTotal integration",
      timelineABody: "To accelerate SOC triage and alert enrichment.",
      timelineBWhen: "Oct 25, 2025",
      timelineBTitle: "Created Sigma rules for Windows logs & Sysmon",
      timelineBBody: "Aligned with MITRE ATT&CK framework.",
      timelineCWhen: "Oct 27, 2025",
      timelineCTitle: "Configured ELK Stack (Docker) and deployed Winlogbeat agent on Windows",
      timelineCBody: "For centralized log collection.",
      techIntro: "Technology Stack",
      techTitle: "SOC tools & platforms",
      techBody: "ELK Stack · Wazuh · Wireshark · tcpdump · Snort / Suricata · Sysmon · KAPE · Volatility · Sigma Rules · YARA · VirusTotal · MISP · MITRE ATT&CK · Python · Bash · Linux · Windows Security · Splunk",
      techCat1: "SIEM & Log Analysis",
      techCat2: "Network Analysis",
      techCat3: "Threat Intelligence",
      techCat4: "Security Labs",
      certIntro: "Credentials",
      certTitle: "Certifications & practical experience",
      cert1Title: "CompTIA Security+ Certified",
      cert1Meta: "Security+ certification completed.",
      cert2Title: "CySA+ in progress",
      cert2Meta: "Advanced analytics & incident handling.",
      cert3Title: "TryHackMe",
      cert3Meta: "150+ solved rooms.",
      cert4Title: "Home SOC environment",
      cert4Meta: "Sysmon, ELK, Sigma for continuous practice.",
      footerConnect: "Connect",
      footerLinkedIn: "LinkedIn",
      footerGitHub: "GitHub",
      footerTryHackMe: "TryHackMe",
      footerNote: "Security-focused portfolio · SOC & Threat Detection",
      statTryHackMe: "TryHackMe ranking",
      statCert: "Certified",
      statInProgress: "In progress",
      learningIntro: "Continuous Growth",
      learningTitle: "Expanding SOC Capabilities",
      learningBody: "Developing hands-on skills in threat detection, alert validation, and SOC workflow automation.",
      learning1Title: "CySA+ Preparation",
      learning1Body: "Strengthening incident response, threat detection, and analytical reasoning aligned with certification standards.",
      learning2Title: "SIEM Mastery",
      learning2Body: "Tuning rules, building correlation logic, and performing threat hunting in ELK, Wazuh, and Splunk.",
      learning3Title: "SOC Automation",
      learning3Body: "Creating Python tools for IOC enrichment, event normalization, and triage acceleration.",
      learning4Title: "Windows Logs & Sysinternals",
      learning4Body: "Investigating event-level detections, process behavior, and endpoint activity for stronger Windows security monitoring.",
      communityIntro: "Community Engagement",
      communityTitle: "Active Learning & Practice",
      community1Title: "Active Learning & Practice",
      community1Body: "Engaged in TryHackMe and other cybersecurity platforms to sharpen SOC skills.",
      community2Title: "Regular Practice",
      community2Body: "Performing SIEM investigations, detection logic, and structured incident workflows in home labs.",
      community3Title: "Continuous Learning",
      community3Body: "Developing hands-on SOC capabilities through detection engineering, security automation, and incident response exercises."
    }
  },
  fi: {
    btn1: "LinkedIn",
    btn2: "GitHub",
    btn3: "TryHackMe",
    flag: "🇬🇧 English",
    copy: {
      heroLede: "ICT-opiskelija & tuleva SOC-analyytikko",
      desc: "Keskittyy lokianalyysiin, uhkien havaitsemiseen ja SIEM-operaatioihin. Security+ sertifioitu, TryHackMe Top 1%, rakentaa käytännön SOC-taitoja kotilaboratorioiden, detektio-ohjelmiston ja tietoturva-automaation kautta.",
      card1Label: "🛡️ Uhkien analyysi",
      card1Title: "Automaattinen IOC Analyzer",
      card1Body: "Kehitetty Python-pohjainen IOC-analyysityökalu, joka integroi VirusTotal API:n nopeuttamaan SOC-triagea, hälytysten rikastusta ja uhkien luokittelua.",
      card1Item1: "Automaattiset IOC-haut ja uhkien pisteytys hasheille, domeineille ja IP-osoitteille.",
      card1Item2: "Tehostettu tapahtumavastaus priorisoimalla korkean riskin hälytykset.",
      card1Item3: "Integroitu uhkatiedustelu SOC-työnkulkuja varten vähentämään manuaalista tutkimusaikaa.",
      card1Metric1: "API-integraatio",
      card1Metric2: "Analyysityökalu",
      card2Label: "⚙️ Detektio-ohjelmisto",
      card2Title: "Sigma-sääntöjen kehitys",
      card2Body: "Käytännön kokemus Sigma-sääntöjen luomisesta MITRE ATT&CK -kehykseen kartoitetusti havaitsemaan epäilyttävää toimintaa Windows-tapahtumalokeissa, Sysmonissa ja yleisissä hyökkäyspoluissa.",
      card2Item1: "Kehitetty Sigma-sääntöjä Windows-lokeille ja Sysmonille TTP:iden ja poikkeavien käyttäytymismallien havaitsemiseen.",
      card2Item2: "Kohdistettu detektio-logiikka MITRE ATT&CK -kehykseen strukturoitua uhkakattavuutta varten.",
      card2Item3: "Kattaa yleiset hyökkäyspolut ja lateraalisen liikkeen tekniikat parantamaan SOC-hälytystä.",
      card2Metric1: "Detektiosäännöt",
      card2Metric2: "ATT&CK-linjassa",
      card3Label: "📊 SIEM-operaatiot",
      card3Title: "Käytännön ELK & Splunk -kokemus",
      card3Body: "Käytännön ELK & Splunk -kokemus käytännön SOC-työnkuluissa: lokien syöttö, normalisointi, hälytysten luominen, detektioiden säätäminen ja dashboardien kehitys.",
      card3Item1: "Konfiguroitu ELK keskitettyä lokitusta ja lokien korrelointia varten.",
      card3Item2: "Rakennettu Splunk-korrelointihaut ja dashboardit uhkien havaitsemiseen.",
      card3Item3: "Triage-tapahtumia ja tutkittu hälytyksiä käyttäen IOC-osoituksia ja käyttäytymisindikaattoreita.",
      card3Item4: "Sovellettu detektio-logiikkaa vähentämään vääriä positiivisia ja nopeuttamaan SOC-vastausta.",
      card3Metric1: "Stack",
      card3Metric2: "SIEM Platform",
      card4Label: "🌐 Verkkoseuranta",
      card4Title: "Wireshark & PCAP-tutkimukset",
      card4Body: "Verkkoliikenteen kaappauksien analysointi tapahtumavasteen tukemiseen, hälytysten validointiin ja poikkeamien tunnistamiseen.",
      card4Item1: "Verkkotriage turvallisuustutkimusten aikana.",
      card4Item2: "Haitallisten liikennekuvioiden havaitseminen ja karakterisointi.",
      card4Item3: "Syvän paketin tarkastus ja protokollatason analyysi.",
      card4Item4: "PCAP-tiedostojen hyödyntäminen threat huntingiin ja hälytysten vahvistamiseen.",
      card4Metric1: "TCP/IP analysis",
      card4Metric2: "Forensic investigations",
      capIntro: "Ydinpainopiste",
      capTitle: "Lokianalyysi & tapahtumien korrelointi",
      capBody: "Uhkien havaitseminen, SIEM-operaatiot, verkkoseuranta ja Python-automaatio SOC-työnkulkuja varten.",
      cap1Title: "Lokianalyysi & Tapahtumien Korrelointi",
      cap1Body: "Tietoturvalokien analysointi, tapahtumien korrelointi ja kuvioiden tunnistaminen SIEM-alustoilla.",
      cap2Title: "Uhkien Havaitseminen & IOC-rikastus",
      cap2Body: "Automaattinen IOC-rikastus ja uhkatiedustelun validointi SOC-triage-työnkulkuja varten.",
      cap3Title: "SIEM-operaatiot",
      cap3Body: "Käytännön ELK & Splunk -kokemus lokien syötöstä, hälytysten luomisesta ja detektioiden säätämisestä.",
      cap4Title: "Verkkoseuranta & Paketti-analyysi",
      cap4Body: "Wireshark & PCAP-tutkimukset tapahtumavasteeseen ja poikkeamien havaitsemiseen.",
      cap5Title: "Python-automaatio SOC:lle",
      cap5Body: "Rakentaa automaatiotyökaluja hälytysten rikastamiseen, tapahtumien triageen ja SOC-työnkulun optimointiin.",
      timelineIntro: "Viimeaikaiset nostot",
      timelineTitle: "Keskeiset saavutukset & projektit",
      timelineAWhen: "Aug 16, 2025",
      timelineATitle: "Kehitetty IOC Analyzer VirusTotal-integraatiolla",
      timelineABody: "Nopeuttamaan SOC-triagea ja hälytysten rikastusta.",
      timelineBWhen: "Oct 25, 2025",
      timelineBTitle: "Luotu Sigma-sääntöjä Windows-lokeille ja Sysmonille",
      timelineBBody: "Kohdistettu MITRE ATT&CK -kehykseen.",
      timelineCWhen: "Oct 27, 2025",
      timelineCTitle: "Konfiguroitu ELK Stack (Docker) ja otettu käyttöön Winlogbeat-agentti Windowsissa",
      timelineCBody: "Keskitettyä lokien keräämistä varten.",
      techIntro: "Teknologiapino",
      techTitle: "SOC-työkalut & alustat",
      techBody: "ELK Stack · Wazuh · Wireshark · tcpdump · Snort / Suricata · Sysmon · KAPE · Volatility · Sigma-säännöt · YARA · VirusTotal · MISP · MITRE ATT&CK · Python · Bash · Linux · Windows Security · Splunk",
      techCat1: "SIEM & lokianalyysi",
      techCat2: "Verkkoanalyysi",
      techCat3: "Uhkatiedustelu",
      techCat4: "Tietoturvalaboratoriot",
      certIntro: "Sertifikaatit",
      certTitle: "Sertifikaatit & käytännön kokemus",
      cert1Title: "CompTIA Security+ Sertifioitu",
      cert1Meta: "Security+ sertifikaatti suoritettu.",
      cert2Title: "CySA+ työn alla",
      cert2Meta: "Edistynyt analytiikka & tapahtumien käsittely.",
      cert3Title: "TryHackMe",
      cert3Meta: "150+ ratkaistua huonetta.",
      cert4Title: "Koti SOC-ympäristö",
      cert4Meta: "Sysmon, ELK, Sigma jatkuvaa harjoittelua varten.",
      footerConnect: "Yhteys",
      footerLinkedIn: "LinkedIn",
      footerGitHub: "GitHub",
      footerTryHackMe: "TryHackMe",
      footerNote: "Tietoturvakeskeinen portfolio · SOC & Uhkien havaitseminen",
      statTryHackMe: "TryHackMe sijoitus",
      statCert: "Sertifioitu",
      statInProgress: "Työn alla",
      learningIntro: "Jatkuva kehitys",
      learningTitle: "Laajentaa SOC-kykyjä",
      learningBody: "Kehittää käytännön taitoja uhkien havaitsemisessa, hälytysten validoinnissa ja SOC-työnkulun automaatiossa.",
      learning1Title: "CySA+ valmistelu",
      learning1Body: "Vahvistetaan tapahtumavastetta, uhkien havaitsemista ja analyyttista päättelyä sertifikaattistandardien mukaisesti.",
      learning2Title: "SIEM-mestaruus",
      learning2Body: "Sääntöjen säätäminen, korrelaatiologiikan rakentaminen ja threat huntingin suorittaminen ELK:ssa, Wazuhissa ja Splunkissa.",
      learning3Title: "SOC-automaatio",
      learning3Body: "Luodaan Python-työkaluja IOC-rikastukseen, tapahtumien normalisointiin ja triage-nopeutukseen.",
      learning4Title: "Windows-lokit & Sysinternals",
      learning4Body: "Tutkitaan tapahtumatason detektioita, prosessin käyttäytymistä ja endpoint-toimintaa vahvempaa Windows-turvallisuusseurantaa varten.",
      communityIntro: "Yhteisöosallistuminen",
      communityTitle: "Aktiivinen oppiminen & harjoittelu",
      community1Title: "Aktiivinen oppiminen & harjoittelu",
      community1Body: "Osallistutaan TryHackMeen ja muihin kyberturvallisuusalustoihin teroittaakseen SOC-taitoja.",
      community2Title: "Säännöllinen harjoittelu",
      community2Body: "Suoritetaan SIEM-tutkimuksia, detektio-logiikkaa ja strukturoituja tapahtuma-työnkulkuja kotilaboratorioissa.",
      community3Title: "Jatkuva oppiminen",
      community3Body: "Kehitetään käytännön SOC-kykyjä detektio-ohjelmiston, tietoturva-automaation ja tapahtumavasteen harjoitusten kautta."
    }
  }
};

const i18nElements = document.querySelectorAll("[data-i18n-key]");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const cards = document.querySelectorAll(".vertical-card");
const featureSections = document.querySelectorAll(".featured-section");

const applyCopy = () => {
  const copy = texts[lang].copy;
  i18nElements.forEach((el) => {
    const key = el.dataset.i18nKey;
    if (copy[key]) {
      el.textContent = copy[key];
    }
  });
};

const updateLanguage = () => {
  applyCopy();
  btn1.textContent = texts[lang].btn1;
  btn2.textContent = texts[lang].btn2;
  btn3.textContent = texts[lang].btn3;
  langBtn.textContent = texts[lang].flag;
  themeBtn.textContent = light ? themeText[lang].dark : themeText[lang].light;
};

const applyTheme = () => {
  root.setAttribute("data-theme", light ? "light" : "dark");
  themeBtn.textContent = light ? themeText[lang].dark : themeText[lang].light;
  localStorage.setItem(STORAGE_KEYS.theme, light ? "light" : "dark");
};

const applyLanguage = () => {
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  updateLanguage();
};

applyLanguage();
applyTheme();

// Card reveal animations
const revealAll = (nodes) => nodes.forEach((node) => node.classList.add("is-visible"));

const observeReveal = (elements, observer) => elements.forEach((el) => observer.observe(el));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );
  observeReveal(cards, observer);
  observeReveal(featureSections, observer);
} else {
  revealAll(cards);
  revealAll(featureSections);
}

themeBtn.addEventListener("click", () => {
  light = !light;
  applyTheme();
});

langBtn.addEventListener("click", () => {
  lang = lang === "en" ? "fi" : "en";
  applyLanguage();
});

// Matrix Rain Animation
const canvas = document.getElementById("matrixRain");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
const fontSize = 16;
let columns = Math.floor(width / fontSize);
const edgeColumns = Math.floor(columns * 0.15); // 15% колонок с каждой стороны
const drops = Array(columns).fill(0);
const chars = "01";

const draw = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  ctx.fillStyle = theme === "light" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)";
  ctx.fillRect(0, 0, width, height);
  const color = getComputedStyle(document.documentElement).getPropertyValue('--matrix-color').trim();
  ctx.fillStyle = color;
  ctx.font = fontSize + "px monospace";
  
  // Рисуем только в крайних колонках (слева и справа)
  for (let i = 0; i < drops.length; i++) {
    // Левая сторона или правая сторона
    if (i < edgeColumns || i >= columns - edgeColumns) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
};

setInterval(draw, 45);

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  columns = Math.floor(width / fontSize);
});
