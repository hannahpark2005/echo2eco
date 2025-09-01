import Grid from '@mui/material/Grid';
import Section from '../components/Section';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const StickyContainer = styled(Box)({
  position: 'sticky',
  top: 64,
  height: 'calc(100vh - 64px)',
  overflow: 'hidden',
});

const Image = styled('img')(({ visible }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: visible ? 1 : 0,
  transition: 'opacity 0.5s ease-in-out',
}));

const images = [
  { src: './about-zebras.jpg', scrollPosition: 0 },
  { src: './about-elephant(1).jpg', scrollPosition: 500 },
  { src: './about-rhinos.jpg', scrollPosition: 1000 },
  { src: './about-elephant(2).jpg', scrollPosition: 1500 },
];

const About = () => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const isVisible = (imageScrollPosition) => {
    return currentScrollPosition >= imageScrollPosition;
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setCurrentScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid container>
      <Grid item md={4} xs={12}>
        <StickyContainer>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt='dynamic'
              visible={isVisible(image.scrollPosition)}
            />
          ))}
        </StickyContainer>
      </Grid>
      <Grid
        container
        item
        md={8}
        xs={12}
        paddingLeft={7}
        paddingRight={5}
        paddingY={5}
      >
        <Section title='About Echo2Eco' subtitle='What is the background.'>
          <Typography marginBottom={1} fontSize={18}>
            Every 22 hours on average, a rhino is poached for its horn in
            Africa. In 2018, rangers were being killed at a rate of nearly two
            deaths per week protecting wildlife. These daunting statistics are
            only two of the many that support the destructive reality of illegal
            wildlife trafficking, also called poaching. This deadly,
            international network of organized crime is driven by reasons such
            as greed for trophies and mythical medicinal properties of specific
            animal parts. Poaching gangs target countless species, including
            elephants for their tusks, tigers for their skin, and rhinos for
            their horns. Anti-poaching patrols work to combat this crime,
            contributing to global conservation efforts essential for a healthy
            ecosystem, providing medicinal value, inhibiting the rise of
            invasive species, and lowering the risk of zoonotic transmission,
            among others. To best preserve the remaining percentage of wildlife
            that humanity has not destroyed, many are looking to modern, safer,
            and efficient methods.
          </Typography>
          <Typography marginBottom={1} fontSize={18}>
            Technology, specifically artificial intelligence, is one such tool
            that accomplishes this goal. This novel, interdisciplinary field is
            transforming how we approach conservation. With the help of AI,
            wildlife protection has become more efficient and safe. Researchers
            are increasingly using image classifiers in the popular method of
            deploying “camera traps” in the wild. However, this non-invasive
            monitoring process is limited in efficiency and range of sight;
            cameras often capture thousands of low-quality photos of repetitive
            landscapes and blurry, unidentifiable animals.
          </Typography>
          <Typography marginBottom={1} fontSize={18}>
            A bio-acoustic sensor, connected to a machine learning model, can
            help future citizen scientists streamline and refine the data
            collection process. Perhaps a more novel type of sensor in the
            field, acoustic sensors are “cheaper [than motion sensors], record
            continuously, and can detect events further with a 360-degree
            radius.” The Zoological Society of London (ZSL) and Google Cloud
            have successfully developed one form of acoustic sensors: gunshot
            detection technology to alert anti-poaching patrols of illegal
            activity. However, gunshots are not the only methods that poachers
            use – snares and poisoning are among the many “silent” methods of
            capturing animals.
          </Typography>
          <Typography marginBottom={1} fontSize={18}>
            Echo2Eco bio-acoustic sensors apply machine learning to train a
            sensor system that can detect and classify noises of animals in
            distress, providing anti-poaching patrols with real-time alerts of
            illegal wildlife trafficking. By applying artificial intelligence to
            streamline and safeguard wildlife conservation, Echo2Eco works to
            further the global efforts of preserving the living world.
          </Typography>
        </Section>
        <Section title='Project Goals' subtitle='What our objectives are.'>
          <Typography marginBottom={1} fontSize={18}>
            The goal of my project is to design and build a bio-acoustic sensor
            prototype that is trained to classify the noises of endangered
            animals in distress. This includes the completion of an audio
            classification machine learning model, a hardware prototype of the
            sensor, and a full-stack web application that acts as a dashboard
            for rangers and researchers to pinpoint alerts and analyze/visualize
            data. In collaboration with global conservation organizations,
            long-term goals include implementing the sensor in real-world
            anti-poaching efforts.
          </Typography>
        </Section>
        <Section
          title='How it works'
          subtitle='How our sensors aid in anti-poaching efforts.'
          videoURL='https://www.youtube.com/embed/XI49uFm5HRE'
        >
          <Typography marginBottom={1} fontSize={18}>
            The project utilizes a deep-learning artificial intelligence
            algorithm also known as Multi-Layer Perceptron (MLP) to solve a
            classification problem. Using Keras, a python library well-known for
            its powerfulness for machine-learning models, the model comprises 2
            hidden layers wrapped around with an input and an output layer. The
            input layer has two input nodes as the Arduino system takes two
            features - decibel and frequency - as inputs. The hidden layers have
            64 and 32 nodes augmented with ReLU activation function which is
            well-known for its performance for classification problems. The
            number of nodes in hidden layers were tuned by testing the model
            performance with test sets. The model shows an exceptionally high
            performance with an accuracy of 80%.
          </Typography>
        </Section>
        <Section
          title='Who am I'
          subtitle='And why I am passionate about wildlife protection.'
        >
          <Typography marginBottom={1} fontSize={18}>
            Moving across three countries by the age of six, nature was an
            everlasting home, found in the mountains of Vancouver and critters
            of my backyard in the United States. At eight years old, I formed my
            own hospital for insects, mending butterfly wings and ant legs with
            homemade cardstock splints and Disney bandaids. At ten, I followed
            my aunt to the animal rescue center where she volunteered, and
            listened to the horrific stories behind each innocent soul I met.
            For years, I cherished the fulfillment that stemmed from using my
            voice and actions to preserve the more-than-human world. After my
            last trip to Korea, I recognized that my appreciation for the
            natural world was also rooted in my culture, branched from Confucian
            roots. Just as I learned to express deference to elders through
            detailed rules of etiquette, my family long held an appreciation for
            all living beings, recognizing the human-earth connection in our
            traditions and language.
          </Typography>
          <Typography marginBottom={1} fontSize={18}>
            In eighth grade, I realized that my childhood insect hospital only
            took me so far in terms of environmental efforts. To focus on
            larger-scale issues, I sought inspiration from naturalist E.O.
            Wilson’s optimistic view surrounding compromise – between the human
            and nonhuman and in cooperation with technology and conservation,
            written in Half-Earth: “[Biology, nanotechnology, robotics] have the
            potential either to favor biodiversity or destroy it. I believe they
            will favor it.”
          </Typography>
          <Typography marginBottom={1} fontSize={18}>
            This mindset was a paradox: how could modern, human-made tools be
            beneficial to its polar opposite: ancient nature? I delved into
            coursework and found parallels in computer science and the natural
            world: tree data structures and distribution networks tracing the
            veins of leaves. I was drawn to the explorative nature of coding and
            machines, replicating the wilderness of nature.
          </Typography>
          <Typography marginBottom={1} fontSize={18}>
            In high school, I explored this paradox by nurturing my curiosity
            for the natural world. I sought real-world applications of
            technology while assisting in global, environmental research. Fully
            immersed in nature, I found myself welcomed by not only the earth
            but also a community of citizen scientists. Though many of us came
            from a myriad of backgrounds all over the globe, we shared the same
            compassion for the living world.
          </Typography>
          <Typography marginBottom={1} fontSize={18}>
            Today, I seek to give back to the selfless earth and my global
            community of environmental stewards through my words and my actions.
            At home, I discuss Korean policies about sustainable development
            with my dad and follow panda conservation efforts with my mom. At
            school, I raise discussions on climate injustice and environmental
            resilience and mobilize others to join me in my conservation and
            sustainability efforts by spearheading projects that apply modern
            technology in recycling campaigns, animal advocacy, and water
            scarcity discussions. In designing and developing the bio-acoustic
            sensor rooted in my compassion for the natural world, what was once
            a childhood dream has expanded into a life-long responsibility.
          </Typography>
        </Section>
      </Grid>
    </Grid>
  );
};

export default About;
