import './App.css';
import logo from './logo.svg';
import Camera from './assets/camera.svg';
import Map from './assets/map.svg';
import Clothes from './assets/clothing.svg';
import Pose from './assets/yoga-pose.svg';
import Woods from './assets/forest.jpg';
import Bulb from './assets/bulb.jpg';
import Beach from './assets/beach.jpg'

import {ServiceCard} from './components/service-card/service-card';
import {ResRowWrapper} from './components/res-row-wrapper/res-row-wrapper';
import OffsetCard from './components/offset-card/offset-card';
import CarouselManager from './components/carousel/carousel';
import NavBar from './components/nav-bar/nav-bar';
import ScrollReveal from './components/scroll-reveal/scroll-reveal';
function App() {

  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  "
  const galeryImages = ['https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.15752-9/131345345_486973955922786_8931013393228647179_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=MXMbzGrmJX4AX8AMAxf&_nc_ht=scontent.fbeg2-1.fna&oh=9eaf6045b3c319a051aa380773053c3a&oe=60CEA4F7',
  'https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.15752-9/194786156_222432949721462_4871035402839871358_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=-_3JLMUk5Z4AX9rlaAA&tn=jZyvX6IUZvpWuRkK&_nc_ht=scontent.fbeg2-1.fna&oh=89a073278e6fb9af8baf7f011047d9e3&oe=60CF0DAD',
  'https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.15752-9/197261210_1284607891957657_7974087377703062011_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=amK6ddUInGgAX-8Tqoo&_nc_ht=scontent.fbeg2-1.fna&oh=985d658920416e9dca01a2d46cd7eba7&oe=60D0771C']
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <NavBar></NavBar>

        <ScrollReveal>
        <h1 style={{ margin: 0 , paddingTop: '200px'}}>This Scrolls Up</h1>
        <img src={Beach}></img>
        </ScrollReveal>
        <CarouselManager images={galeryImages}></CarouselManager>
          <ResRowWrapper title="The PhotoShoot Consistes Of" margin='60px auto' link={"service full"}>
            <ServiceCard title="Clothes Selection"  imgUrl={Clothes} description={text}></ServiceCard>
            <ServiceCard title="Some Test Shots To Get The Camera To Love You" imgUrl={Camera} description={text}></ServiceCard>
            <ServiceCard title="Location Selection" imgUrl={Map} description={text}></ServiceCard>
            <ServiceCard title="Posing Tips And Trics" imgUrl={Pose} description={text}></ServiceCard>
          </ResRowWrapper>
          <ResRowWrapper title="About Me" justify='space-betwen' link={"about-me"}>
            <OffsetCard text="oprem" put='top' imgSrc={Bulb} height="100vh" cardWidth="426px"></OffsetCard>
            <OffsetCard text="I am a avaturist And love gathering expiriences and knowlage" put='middle' imgSrc={Woods} height="100vh" cardWidth="426px"></OffsetCard>
          </ResRowWrapper>
          
          {/* <div>Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    
  );
}

export default App;
