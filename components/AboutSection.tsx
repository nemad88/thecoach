import SectionElement from "./SectionElement";
import styled from "@emotion/styled";

const data = [
  {
    imageSrc: "/images/image03-min.jpg",
    title: "Örülök, hogy itt vagy!",
    text: "Szia! Tapodi Barbi vagyok. Vezetői- és karrier coach és elkötelezett abban, hogy segítsek Neked megteremteni egy olyan hivatást, vállalkozást és életet, amelyben boldog vagy.",
    ctaButtonLabel: "Lépj a következő szintre!",
    reverse: false,
    wide: true,
  },
  {
    imageSrc: "/images/about1.jpg",
    title: "Mit tudok adni Neked?",
    text: "- lehetőséget ahhoz, hogy a legjobb döntést hozd meg a karrieredet illetően</br>- támogatást ahhoz, hogy elég jó vezetője legyél a csapatodnak</br>- útmutatást ahhoz, hogy megtaláld és megvalósítsd a céljaidat</br>- önbizalmat ahhoz, hogy merj lépni</br>- eszközöket ahhoz, hogy legyőzd a mindennapi stresszt</br>- segítséget, hogy megtaláld az egyensúlyt a munka és a magánélet között",
    ctaButtonLabel: "Lépj a következő szintre!",
    reverse: true,
    wide: true,
  },
  {
    imageSrc: "/images/image06.jpg",
    title: "Mikor érdemes találkoznunk?",
    text: "</br>- ha vezetője lettél egy csapatnak és a legjobban szeretnéd csinálni</br>- ha nem tudod, hogy merre haladj tovább a karrieredben</br>- ha elakadtál, nem tartasz ott, ahol szeretnél</br>- ha túl sok a stressz az életedben</br>- ha elégedetlen, boldogtalan, céltalan vagy</br>- ha nincs elég bátorságod, önbizalmad a céljaid megvalósításához",
    ctaButtonLabel: "Kérj ingyenes visszahívást!",
    reverse: false,
    wide: true,
  },
  {
    imageSrc: "/images/image04.jpg",
    title: "Hogyan tudod elképzelni a közös munkát?",
    text: "- témádtól függően határozzuk meg az üléseink számát, jellemzően 4-8 alkalommal szükséges találkoznunk, egyénileg meghatározott rendszerességgel</br>- a beszélgetéseink 60 percesek lesznek</br>- a helyszín az online tér (Teams/Skype)</br>- személyes találkozóra is van lehetőség, kérlek, üzenj és egyeztetünk</br>- felajánlok egy 20 perces díjmentes nulladik alkalmat, ahol benyomást tudsz szerezni arról, hogy el tudod-e képzelni a közös munkát, és én is fel tudom mérni, hogy én vagyok-e számodra a legmegfelelőbb támogatás",
    ctaButtonLabel: "Ingyenes 20 perces konzultáció",
    reverse: true,
    wide: true,
  },
];

export default function AboutSection() {
  return (
    <StyledSection>
      {data.map((item) => (
        <SectionElement
          key={item.title}
          imageSrc={item.imageSrc}
          title={item.title}
          text={item.text}
          ctaButtonLabel={item.ctaButtonLabel}
          reverse={item.reverse}
        />
      ))}
      {/* <SectionElement
        imageSrc="/images/image03-min.jpg"
        title="Örülök, hogy itt vagy!"
      />
      <SectionElement imageSrc="/images/image03-min.jpg" reverse /> */}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
