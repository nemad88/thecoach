import SectionElement from "./SectionElement";
import styled from "@emotion/styled";

export default function AboutSection() {
  return (
    <StyledSection>
      <Wrapper>
        <StyledImage src="/images/me.jpg" />
        <Introduction>
          <Title>Rólam</Title>
          <Text>
            Közgazdászként végeztem Nemzetközi Gazdálkodás alapszakon,
            logisztika szakirányon. Jelenlegi munkahelyemen már több, mint 10
            éve dolgozom. Az első tíz évben logisztikával,
            ügyfélszerzéssel/megtartással, kiszolgálásukkal és elégedettségük
            elérésével foglalkoztam. 2023 őszétől pedig Sales Manager lettem,
            részmunkaidőben, többnyire itthonról a másfél éves kisfiam mellett.
            2017-től a csapatom vezetésével megbíztak, ami mindamellett, hogy
            nagy kihívás volt, kemény munkával és hatalmas
            személyiségfejlődéssel is járt. Eleinte rengeteget dolgoztam,
            túlóráztam, stresszeltem, éjjel- nappal a munkán jártak a
            gondolataim, rémálmok gyötörtek. Tudtam, hogy ez így nem mehet
            tovább. Akkoriban egy mérgező párkapcsolatom után elkezdtem
            önfejlesztő könyveket olvasni (Brian Tracy: Maximális teljesítmény;
            Rhonda Byrne: A titok; Raphaelle Giordano: A második életed akkor
            kezdődik, amikor megérted, hogy csak egy van), és megváltoztatni az
            életemet. Odafigyeltem az egészségemre, újra az életem részévé vált
            a sport és az emberi kapcsolataim is megerősödtek. A munkahelyemen a
            csapatomat coaching szemléletben kezdtem el vezetni- feltérképeztem
            a kollégáim erősségeit és gyengeségeit, aktiváltam az
            erőforrásaikat, közös célokat határoztunk meg, miközben egy olyan
            bizalmi kapcsolat alakult ki köztünk, ami segített a mindennapi
            problémákon könnyedén átlendülni. Az önfejlődésemhez hozzájárult a
            cégnél induló vezetői tréning sorozat, ahol kiváló eszközökkel
            lettem gazdagabb, a stresszt is megtanultam kezelni/elengedni, így
            ráléptem arra az útra, ami a munka/magánélet egyensúlyának
            megteremtéséhez vezetett. 2019 őszén beiratkoztam a Budapesti
            Gazdasági Egyetem Business Coach képzésére, hogy tovább mélyítsem az
            ismereteimet ebben a témában. Elsődleges célom az volt, hogy a
            csapatomat továbbra is ebben a szemléletben tudjam támogatni.
            Hosszútávú vágyam, hogy a szervezeten kívül is tudjak segíteni,
            biztatni, motiválni minden fejlődni vágyó társamat. Úgy érzem,
            megtaláltam az utamat, azon szerencsés emberek közé tartozom, akinek
            a munkája egyben a hobbija is lehet. Hiszek a fejlesztési folyamat
            erejében, hiszek benne, hogy minden megoldható.
          </Text>
        </Introduction>
      </Wrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 1450px;
  position: relative;
  width: 50%;
  object-fit: cover;
  transform: translate(50px, -50px);
  object-position: right top;
  z-index: 2;
`;

const Introduction = styled.div`
  background-color: #f0f3f5;
  padding: 50px 50px 50px 150px;
  transform: translate(-50px, 0px);
`;

const Title = styled.h1`
  color: #404040;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 8.64px;
`;

const Text = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 200 !important;
  line-height: 200%;
`;
