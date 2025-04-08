# Project Notes

## Project Setup & Systems

### Design Systems

- **Colors**

  - Primary: #014463, #004464, #0786C0
  - Secondary: #A6E2E2
  - Accent: #F97316, #F15B2D
  - Neutral: Various shades from #111827 to #FFFFFF

- **Typography**

  - Primary: Ubuntu
  - Secondary: Syne

- **Responsive Design**
  - Mobile-first approach
  - Using Tailwind default breakpoints

### Required Libraries

- React
- Tailwind CSS
- Swiper (for carousels)

### Project Structure

```
src/
├── components/
│   ├── common/
│   └── sections/
└── pages/
```

## Components Architecture

### Common Components

1. **Buttons**

   - Standard Button (4 variants)
   - SliderNavButton
   - SocialButton

2. **Cards**
   - HeroCard
   - HowItWorkCard
   - ProgramsCard
   - CommunityCard
   - TestimonialsCard
   - FeaturedCard

### Section Components

- Navigation
- Hero
  - HeroSlider
  - HeroBanner1
  - HeroBanner2
  - HeroBanner3
  - HeroBanner4
  - HeroCard
- WhatWeDo
- HowItWorks
- OurPrograms
- Community
- Partners
- Testimonials
- LatestNews
- FeaturedNews
- CTA
- Footer

## Implementation Progress

### Completed

- [x] Color system
- [x] Font system
- [x] Library selection
- [x] Breakpoints setup
- [x] Navbar component
- [x] Carousel implementation
- [x] Reusable button component
- [x] Built the initial stracture of the project

### In Progress

- [x] Refactor Button component.
- [x] Refactor Navigation component.
- [x] Refactor Hero section component.
- [x] Refactor WhatWeDo component.
- [ Leave It ] Refactor HowItWorks component.
- [x] Refactor OurPrograms component.
- [x] Refactor Community component.
- [x] Refactor LatestNews component.
- [x] Refactor CTA component.
- [x] Refactor Footer component.

- [x] Build Our Partners component.
- [x] Build Testimonials component.
- [x] Build FeaturedNews component.

- [ ] Card animation implementation
- [ ] Scroll reveal animations

### Development Notes

- Keep color and font variable names generic
- Maintain generic image import variables
- Implement scroll reveal animations throughout
- Use Swiper library for all carousels
- Download hero section SVG

### Refactor WhatWeDo component.

## Daily Progress

### Day 1: Foundation

- Set responsive design strategy
- Established design system
- Created directory structure

### Day 2: Navigation

- Implemented responsive navigation
- Created dynamic state management
- Added transition animations

<!-- notes stash -->

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
