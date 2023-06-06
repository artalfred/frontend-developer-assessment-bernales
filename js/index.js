// NAVIGATION
Vue.createApp({
  data() {
    return {
      navLinks: "Home",
    };
  },
}).mount("#nav");

// HERO CONTENT
Vue.createApp({
  data() {
    return {
      heroTitle: "Protoapp",
      heroDescription:
        "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
      heroBtn: "Get Started",
    };
  },
}).mount("#hero-content");

// SECTION 1 CONTENT
Vue.createApp({
  data() {
    return {
      section_1_title: "Meet Protoapp",
      section_1_description:
        "The app lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.",
    };
  },
}).mount("#section_1");

Vue.createApp({
  data() {
    return {
      actionTitle: "Let's Call to Action",
      actionDesc: "Another content goes here.",
    };
  },
}).mount("#action");

Vue.createApp({
  data() {
    return {
      actionTitle: "Let's Call to Action",
      actionDesc: "Another content goes here.",
    };
  },
}).mount("#cardOne");

Vue.createApp({
  data() {
    return {
      actionTitle: "Let's Call to Action",
      actionDesc: "Another content goes here.",
    };
  },
}).mount("#cardTwo");
