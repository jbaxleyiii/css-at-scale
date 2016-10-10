// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  S,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import {
  theme,
} from "../assets";


const images = {
  black: require("../assets/bg-black.jpg"),
  orange: require("../assets/bg-orange.jpg"),
  white1: require("../assets/bg-white-1.jpg"),
  white2: require("../assets/bg-white-2.jpg"),
};

preloader(images);

const getImage = (image) => {
  if (image && images[image]) {
    return images[image].replace("/", "");
  }
  return images.orange.replace("/", "");
};

const Presentation = () => (
  <Spectacle theme={theme}>
    <Deck transition={["fade", "slide"]} transitionDuration={500}>

      {/* Intro */}
      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">Designing for the future</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Scaleable CSS
        </Heading>
      </Slide>

      {/* Self */}
      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading  fit caps lineHeight={1} textColor="primary">
          Hello! I'm James
        </Heading>
        <Heading size={10} textFont="secondary" textColor="dark-secondary">
          <S type="italic">Development Director at NewSpring Church</S>
        </Heading>
      </Slide>

      {/* What */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading  fit caps lineHeight={1} textColor="primary">
          What is css?
        </Heading>
        <Heading size={10} textFont="secondary" textColor="dark-secondary">
          <S type="italic">and why that isn't a bad word</S>
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          Initially introduced to the web in late 1996, CSS (or Cascading Style Sheets) is a style sheet language used to control the visual presentation of HMTL<br/><br/><S type="bold italic">CSS is powerful.</S> It is one of three languages every webview in the world can read. It is also the first point of engagement with anything on the web.
        </Text>
      </Slide>

      {/* Where */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          The scope of CSS
        </Heading>
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="100%" src="https://www.google.com/adwords/images/illustrations/overview-browser-text.png" />
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="70%" height="100%" src="https://dg0ddngxdz549.cloudfront.net/images/cached/images/remote/http_images.newspring.cc/section/worship/1x1_2370_2370_90.jpg" />
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="100%" src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/screenshot-main@2x-f5f56d18fa8896b3d987d24fc903d03f.png" />
      </Slide>

      {/* What can I css */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          The usage of CSS
        </Heading>
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="80%" src="http://una.im/images/posts/classy-css/buttons.png" />
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="80%" src="https://d13yacurqjgara.cloudfront.net/users/61064/screenshots/3013018/attachments/630293/duolingo-bots-full.png" />
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="80%" src="http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/04/materialdesign_introduction.png" />
      </Slide>

      {/* What does scale mean */}
      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Measurements of scaleable css
        </Heading>
      </Slide>

      {/* Performant */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading  fit caps lineHeight={1} textColor="primary">
          Scaleable css is fast
        </Heading>
        <Heading size={10} textFont="secondary" textColor="dark-secondary">
          <S type="italic">speed is a core value</S>
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          There are three core concepts around css speed:
          <List textFont="secondary" textColor="dark-primary">
            <ListItem textSize="28px" margin="0 0 10px 0">Specificity</ListItem>
            <ListItem textSize="28px" margin="0 0 10px 0">Repaints and Reflow</ListItem>
            <ListItem textSize="28px" margin="0 0 10px 0">Size</ListItem>
          </List>
        </Text>
      </Slide>

      {/* Basic Example */}
      <CodeSlide
        lang="css"
        transition={[]}
        code={require("raw!./specificity.example")}
        ranges={[
          { loc: [0, 1], title: "Specificity Index" },
          { loc: [0, 1] },
          { loc: [1, 2] },
          { loc: [2, 3] },
          { loc: [3, 4] },
          { loc: [4, 5] },
          { loc: [5, 6] },
          { loc: [6, 7] },
          { loc: [8, 9], note: "Selectors work right to left" },
          { loc: [10, 11], note: "ID's are unique, so they don't need a tag name to go along with it" },
          { loc: [12, 13], note: "Please don't do this" },
        ]}
      />
      
      {/* Resuable */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading  fit caps lineHeight={1} textColor="primary">
          Scaleable css is resuable
        </Heading>
        <Heading size={10} textFont="secondary" textColor="dark-secondary">
          <S type="italic">automate what is important</S>
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          Imagine if you had to write inline styles for every element that gets rendered onto a page. How about for every page on your site? Scaleable css is infitely resuable and works regardless of context.
        </Text>
      </Slide>

      {/* Extendable */}
      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading fit caps lineHeight={1} textColor="primary">
          Scaleable css is extendable
        </Heading>
        <Heading size={10} textFont="secondary" textColor="dark-secondary">
          <S type="italic">accuracy matters</S>
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          By its very design, CSS is an extensable language. The cascade allows for slight variations of extisting patterns higher in the stylesheet. Scaleable css takes this princepal to heart which helps to enforce consistency while preventing cookie cutter design.
        </Text>
      </Slide>

      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">Learning from the industry</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Prior Art
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">Atomic Design</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Brad Frost
        </Heading>
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="80%" src="http://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png" />
      </Slide>

      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">ITCSS</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Harry Roberts
        </Heading>
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="80%" src="https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10154630/itcss-key-metrics.svg" />
      </Slide>

      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">Classy CSS</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Una Kravets
        </Heading>
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="40%" src="http://una.im/images/posts/classy-css/mixin.png" />
        <Image width="40%" src="http://una.im/images/posts/classy-css/extend.png" />
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="100%" src="https://media.giphy.com/media/OSWRJKmwUEOD6/giphy.gif" />
      </Slide>

      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">Functional CSS libraries</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          How to build scaleable css
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading  fit caps lineHeight={1} textColor="primary">
          Organic vs Inheritance vs Composition
        </Heading>
        <Heading size={10} textFont="secondary" textColor="dark-secondary">
          <S type="italic">Putting the fun in functional</S>
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          Organic architecture is the most common form of css writing. As styles are needed, they are added to the end of the sheet. Organic sheets tend to have a lot of exceptions and overwrites.
          <br />
          <br />
          Most libraries are built with the inheritance architecture. This is where you have a base style which gets extended and added on by another style. BEM conventions are strongly inheritance based.
          <br />
          <br />
          Compositional (or functional) architecture favors small helper classes over contextual classes. It brings the reusablity (and testability) of functional programming to css!
        </Text>
      </Slide>

      <Slide transition={[]} bgColor="light-primary">
        <Image width="40%" src="https://developers.google.com/schemas/images/now_flightconfirmation.png" />
      </Slide>

      {/* Organic Example */}
      <CodeSlide
        lang="css"
        transition={[]}
        code={require("raw!./organic.example")}
        ranges={[
          { loc: [0, 1], title: "Building Organically" },
          { loc: [1, 6] },
          { loc: [7, 13] },
          { loc: [14, 19] },
          { loc: [20, 23] },
          { loc: [24, 29] },
          { loc: [30, 34] },
          { loc: [35, 38] },
        ]}
      />

      <Slide transition={[]} bgColor="light-primary">
        <Image width="40%" src="https://developers.google.com/schemas/images/now_flightconfirmation.png" />
      </Slide>

      {/* Inheritance Example */}
      <CodeSlide
        lang="css"
        transition={[]}
        code={require("raw!./inheritance.example")}
        ranges={[
          { loc: [0, 1], title: "Building from Inheritance" },
          { loc: [1, 5] },
          { loc: [6, 12] },
          { loc: [13, 16] },
          { loc: [17, 20] },
          { loc: [21, 24] },
          { loc: [25, 28] },
        ]}
      />

      <Slide transition={[]} bgColor="light-primary">
        <Image width="40%" src="https://developers.google.com/schemas/images/now_flightconfirmation.png" />
      </Slide>

      {/* Compositional Example */}
      <CodeSlide
        lang="css"
        transition={[]}
        code={require("raw!./compositional.example")}
        ranges={[
          { loc: [0, 1], title: "Building from Composition" },
          { loc: [1, 13] },
          { loc: [14, 29] },
          { loc: [30, 45] },
          { loc: [46, 57] },
        ]}
      />

      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">How to build your library</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Compositional Architecture
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading  fit caps lineHeight={1} textColor="primary">
          Echo Architecture
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          The Echo architecture is a compositional focused alternative to ITCSS. It prioritizes simple components joined with a large number of variable controlled helpers. The architecture is made of the following types:
          <List textFont="secondary" textColor="dark-primary">
            <ListItem textSize="28px" margin="0 0 10px 0">Elements</ListItem>
            <ListItem textSize="28px" margin="0 0 10px 0">Components</ListItem>
            <ListItem textSize="28px" margin="0 0 10px 0">Helpers</ListItem>
            <ListItem textSize="28px" margin="0 0 10px 0">Overrides</ListItem>
          </List>
        </Text>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading fit caps lineHeight={1} textColor="primary">
          Elements
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          Elements are used to style native html elements and items like native elements (i.e icons). These can vary from headers to images to iframes. Some elements also create helper classes based on the base element. 
        </Text>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading fit caps lineHeight={1} textColor="primary">
          Components
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          Components are typically made up of multiple (sometimes nested) markup elements. They are styled more for layout and utility than traditional UI libraries. Components are thinks like cards, grids, and panels.
        </Text>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading fit caps lineHeight={1} textColor="primary">
          Helpers
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          Helpers is where from most of the magic of the echo architecture comes. These are namespaced for breakpoints, and can be used in conjuction to create complex and unique UI without custom css. An example of some helpers are things like text controls, padding controls, and event position controls.
        </Text>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white1")}>
        <Heading fit caps lineHeight={1} textColor="primary">
          Overrides
        </Heading>
        <Text
          margin="30px 0 0 0"
          textColor="dark-primary"
          textFont="secondary"
          textAlign="left"
          textSize="28px"
          lineHeight={1.4}
        >
          Used sparingly, overrides allow for forcing a style from higher in the sheet than custom later code. In practice, overrides are rarely needed, but when used, they allow for absolute control over display. An example override is a hidden utility to force an element to not be displayed.  
        </Text>
      </Slide>

      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">Real world examples</S>
        </Heading>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Echo in practice
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading size={1} caps lineHeight={1} textColor="primary">
          <Link href="https://my.newspring.cc/groups/b8f1efa94886942f9e7716c00c04dc14">Example 1</Link>
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading size={1} caps lineHeight={1} textColor="primary">
          <Link href="https://native.newspring.cc/series">Example 2</Link>
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading size={1} caps lineHeight={1} textColor="primary">
          <Link href="https://my.newspring.cc/give/history">Example 3</Link>
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("white2")}>
        <Heading size={1} caps lineHeight={1} textColor="primary">
          <Link href="https://my.newspring.cc/give/schedules">Example 4</Link>
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("orange")}>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Questions?
        </Heading>
      </Slide>

      <Slide transition={[]} bgImage={getImage("black")}>
        <Heading size={1} margin="20px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
          Thank you!
        </Heading>
        <Heading size={8} margin="0 20px 0 0" textFont="secondary" textColor="light-secondary">
          <S type="italic">james.baxley@newspring.cc</S>
        </Heading>
        <Heading size={8} textFont="secondary" textColor="light-secondary">
          <S type="italic">@jbaxleyiii</S>
        </Heading>
      </Slide>

    </Deck>
  </Spectacle>
);

export default Presentation;
