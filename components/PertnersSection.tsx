import SectionElement from "./SectionElement";
import styled from "@emotion/styled";
import Carousel from "./Carousel";

const data = [
  {
    imageSrc: "/images/ref1.jpg",
    title: "Mike Ágota",
    subtitle: "MEDIA & DIGITAL CAMPAIGN MANAGER TESCO",
    text: `„Barbi, és a coaching lehetősége pont a legjobbkor érkezett az életembe. Épp egy nagy dilemmában voltam, ami lefoglalta a gondolataimat és úgy éreztem egyedül nehezen tudom kibogozni, hogy mit is szeretnék igazán. Már az első beszélgetésünk után azt éreztem, hogy rendszerezettebbek a gondolataim, elkezdtem látni az utat magam előtt. Barbi szuper kérdéseivel, türelmével és közvetlenségével olyan összefüggéseket is sikerült kimondanom, amikről nem is gondoltam, mennyire sokat számítanak a döntésemben. Azóta már más témával is foglalkozunk, és minden alkalom után azt érzem, jó úton haladunk együtt. Mindenkinek csak ajánlani tudom, én imádom a közös munkát :) „`,
  },
  {
    imageSrc: "/images/ref2.jpg",
    title: "Motúz Ivett",
    subtitle: "ÜGYVEZETŐ ASSZISZTENS, IRODAVEZETŐ ELECTROLUX KFT.",
    text: `Amióta Barbival dolgozom, újra nagyobb lendülettel kezdtem gondolkodni a céljaimon, papírra is vetni őket. Motivációt ad, hogy egy pozitív emberrel beszélhetek ezekről. Mivel mindig van fix következő időpont, így jobban készülök, gyorsabban haladok, mint egyedül. A beszélgetések teret adnak a gondolataimnak, olyan valaki ül velem szemben, aki úgy gondolom, ért. Alapvetően türelmetlen típus vagyok, olyan, aki mindenben egy nap alatt akarja megváltani a világot. Ennek ellenére azt érzem, hogy haladok/haladunk előre, produktívabb és kreatívabb vagyok, mióta beszélgetünk.
    Az a típus vagyok, aki még nem tanulta meg teljes mértékben egyedül motiválni saját magát, így fontos, hogy vannak kitűzött alkalmak, amikor tudom, hogy egy következő lépcsőfokról fogunk beszélgetni. Ez ad egyfajta plusz motivációt, ami tovább lendít.
    Ezen felül megismertem egy nagyon szimpatikus embert 😊`,
  },
  {
    imageSrc: "/images/ref3.jpg",
    title: "Dr. Vigh Georgina",
    subtitle: "BFB PLUS KFT.,HR VEZETŐ",
    text: `Barbit teljes szívből ajánlom azoknak, akik kereskedelmi szférából keresnek coachot, illetve azoknak a (nőknek), akik a családalapítás előtt szeretnék a karrierjükből a maximumot kihozni.
    Ha kulcsszavakban foglalnám össze az együttműködésünket Barbival, akkor az optimizmus, pozitív energia, kitartó lelkesedés, mély szakmaiság és határtalan empátia, amik legjobban jellemeznék az általa kialakított folyamatokat, emberi kapcsolatokat.
    Nemzetközi környezetben szerzett tapasztalata lehetőséget ad arra, hogy félszavakból is megértsük egymást. Munkájában kitartó, céltudatos és eredményorientált. Csapatával olyan barátságos és bizalmi kapcsolatokon alapuló együttműködést alakított ki, amely kitűnik a cég többi részlege közül.`,
  },
  {
    imageSrc: "/images/ref4.jpg",
    title: "Maruzs Nikolett",
    subtitle: "SVÁJC",
    text: `Rendszeres találkozóink során nagyon hasznos és inspiráló beszélgetéseket folytattunk, amelyek segítettek abban, hogy jobban megérthessem céljaimat és lehetőségeimet. Értékelem, hogy a számon kérte a megbeszélt célokat és lépéseket, így folyamatosan haladhattam előre velük. Az együttműködésünk alatt nőtt az önbizalmam és a motivációm.
    Könnyebben haladtam a céljaim felé vezető úton. Idő intervallumokra lebontva az elsőre megterhelőnek tűnő célok sokkal megvalósíthatóbbnak és kezelhetőbbnek látszottak. Sikerült elérhetőbbé és konkrétabbá tenni azokat a lépéseket, amelyeket meg kellett tennem. A folyamatos támogatása és iránymutatása révén nőtt az önbizalmam, hogy valóban elérhetem, amit szeretnék.
    Az együttműködést nagyon pozitívnak éreztem. Az előre megbeszélt időpontokat rugalmasan tartottuk, és a találkozók száma mindig az igényeimhez igazodott. Ez lehetővé tette, hogy maximálisan rám szabott támogatást kaphassak, és úgy éreztem, hogy a coaching teljes mértékben az én kereteimhez és ütememhez igazodott. Ez hozzájárult ahhoz, hogy kényelmesen és hatékonyan tudjak dolgozni a céljaim felé vezető úton.`,
  },
];

export default function PartnerSection() {
  return (
    <StyledSection>
      <Carousel width="1000px" slides={data.length}>
        {data.map((item) => (
          <CarouselItem key={item.title}>
            <StyledImage src={item.imageSrc} />
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
            <Text>{item.text}</Text>
          </CarouselItem>
        ))}
        <CarouselItem key={data[0].title + "v2"}>
          <StyledImage src={data[0].imageSrc} />
          <Title>{data[0].title}</Title>
          <Subtitle>{data[0].subtitle}</Subtitle>
          <Text>{data[0].text}</Text>
        </CarouselItem>
      </Carousel>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselItem = styled.div`
  flex: 0 0 1000px;
  height: 800px;
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  gap: 24px;
`;

const StyledImage = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 10px solid #efefef;
`;

const Title = styled.h2`
  color: #404040;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 8.64px;
`;

const Subtitle = styled.h3`
  color: #bf9f86;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.96px;
`;

const Text = styled.p`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 200%;
  text-align: center;
  text-align: justify;
  padding: 0px 18px;
`;
