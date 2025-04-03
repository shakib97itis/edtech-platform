# Notes

## general notes

- Make the color and font variables names generic so it can be reused anywhere.
- kepp image import variable generic.

## Things i found notes

- They are using swiper library for all carrousel.
- in the hero section there is a svg. (download it).
- There is a lot of on scroll reveal animation on the landing page.

## TODO - Things to figure out and build

- (done) What are the coloures they are using? Make a color system.
- (done) What are the fonts they are using? Make a font system.
- (done) what are the libraty the are using? Take notes of libraty.
- (done) Setup breakpoints of the website?
- (done) How am I going to build carrousel?
- (dont) What the font sizes of the website?
- (done) Create the navBar.
- (done) Make the navbar a reuseable component.
- (done) Create Reuseable button.
- () Initial stracture of the landing page.

- How they are doing the card animation - (related to on scroll reveal animation)?
- how the navbar is built?
- What are the reuseable component i can built?
- how to do -> on scroll reveal animation react?

## responsivenes

- we are approaching mobile first method.
- we are going to use tailwind default breakpoints.

## Library needed >

- React.
- Tailwind for style.
- Swiper - for carrousel.

## fonts system

- Primary font: Ubuntu
- Secondary font: Syne

## color system

- Primary:
  -- #014463
  -- #004464
  -- #0786C0
- Secondary:
  -- #A6E2E2
- Accent:
  -- #F97316
  -- #F15B2D
- Natural:
  -- #111827
  -- #6B7280
  -- #E5E7EB
  -- #F3F4F6
  -- #374151
  -- #4B5563
  -- #0D0D0D
  -- #242424
  -- #C1C1C1
  -- #CCCCCC
  -- #FFFFFF

## Component list

### Common Components

- Btn
  -- There are five different variant of button component.
  -- We will be using btnType prop for indicate.
- AppBtn
- SliderNavBtn.
  -- we are using this carrousel button for 2 diffrent slider.
  -- we will be use navType prop for indicate is it previous or next button.
- HeroCard.
  -- props ==> image, title, description.
- howItWorkCard.
  -- props ==> image, title, description, color.
  -- we will provide color as css props.
- Programs Card.
  -- props => images, title, price,
- Community Card.
  -- props => stats, title,
- Testimonials Card.
- Featured Card.
  -- props => title, subtitle, description, categori, date
  -- Image zoom out while hover.
- SocialButton.
  -- Diffrent social button has difffrent background color.
  -- props - backgroundColor.
- TestimonialCard
  -- props => testimonial, name, degignation, image,

### Sections Components

- NavigationSection
- HeroSection
  -- HeroSlider -> HeroSlide
- WhatWeDoSection
- HowItWorksSection
- OurProgramsSection
- CommunitySection
- PartnersSection
  -- plan it later.
  -- router will be used for tab.
  -- slide component will be reuseable.
- TestimonialSection
- LatestNewsSection
  -- we will build it right here.

- ## FeaturedNewsSection

- CtaSection
- FooterSection

## Component Notes

### Navbar (done)

- (done) We need an object for navigation list.
- (done) On the top left create a hamburger button and Main logo.
- (done) Create seperate navbar for mobile and desktop.
- (done) Create a signup button on the right side.
- (done) Implement the slide functionality.
- (done) Make all the nav elements reuseable.
- discuss on what is the most efficient way to build navbar/component?

### Reuseable Btn (done)

- There are five diffrent varient of button component.
- We will be using btnType prop for indicate.

### Ours Programs section

- Create the initial stracture of the section
  - Section has a heading secondary which is reuseable.
  - Section has program card, which is reuseable.
- Tasks:
  - Create overall layout of the project.
  - Create the headingSecondary section.
  - Create the program cart


## project structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Card/
│   │   ├── Navbar/
│   │   └── Footer/
│   └── sections/
│       ├── Navigation/
│       ├── Hero/
│       └── Testimonials/
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
|
```

## Working progress -

### Day 1: Project Foundation & System Design

✅ **Completed**:

- Responsive design strategy for all device breakpoints
- Core feature set and user flow mapping
- Design system foundations:
  - Color palette with semantic hierarchy
  - Typography system (Inter + Roboto)
- Scalable directory structure

---

### Day 2: Core Navigation Implementation

🚀 **Successfuly Developed**:

- Reusable navigation component featuring:
  - Mobile-first responsive layout
  - Dynamic state management
  - Transition animations
- Prop-based customization system for:
  - Theme variants
  - Menu configurations
- Tailwind-powered animation framework
