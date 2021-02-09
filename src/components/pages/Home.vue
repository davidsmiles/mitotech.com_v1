<template>
  <div>
    <section class="hero" id="home">

      <div>
        <img src="../../assets/svg/Rectangle 16.svg" alt="">
        <img src="../../assets/svg/Rectangle 21.svg" alt="">
        <img src="../../assets/svg/Vector 1.svg" alt="">
        <img src="../../assets/svg/Ellipse 11.svg" alt="">
        <img src="../../assets/svg/Rectangle 21.svg" alt="">
      </div>

      <div class="container" v-bind:class="$resize && $mq.above(768) ? 'container-mito-1' : ''">
        <div class="text">
          <h1 class="title font-mont-bold mb-3">
            We are
            <br />MitoTech
          </h1>
          <p>A digital agency delivering end-to-end solutions</p>
        </div>
      </div>
    </section>

    <section class="what-we-do" id="services">

      <div>
        <img src="../../assets/svg/Rectangle 19.svg" alt="">
        <img src="../../assets/svg/Rectangle 23.svg" alt="">
      </div>

      <div>
        <div class="container" v-bind:class="$resize && $mq.above(768) ? 'container-mito-1' : ''">
          <div class="content pt-5 pb-5 pr-4">
            <div>
              <h2 class="title font-uni-bold mb-4">What we do.</h2>

              <p
                class="mb-5"
              >We at Mito tech solutions .This is some dummy text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec mauris ultrices at dui tempus. Quam elit arcu tempus varius ornare elit nulla amet.</p>
            </div>

            <div class="row justify-content-center">
              <div class="col">
                <div class="service d-flex justify-content-center flex-column align-items-center">
                  <svg-content-creation class="mb-2"></svg-content-creation>
                  <h4 class="font-uni-bold text-center">
                    Content
                    <br />creation
                  </h4>
                </div>
              </div>
              <div class="col">
                <div class="service d-flex justify-content-center flex-column align-items-center">
                  <svg-speaker-promotion class="mb-2"></svg-speaker-promotion>
                  <h4 class="font-uni-bold text-center">
                    Online
                    <br />marketing
                  </h4>
                </div>
              </div>

              <div class="col">
                <div class="service d-flex justify-content-center flex-column align-items-center">
                  <svg-corporate-branding class="mb-2"></svg-corporate-branding>
                  <h4 class="font-uni-bold text-center">
                    Corporate
                    <br />branding
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-us" id="about">
      <div class="container" v-bind:class="$resize && $mq.above(768) ? 'container-mito-2' : ''">
        <div class="row mb-md-5 mb-3">
          <div class="col">
          	<h2 class="title font-uni-bold">ABOUT US</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <h1 class="font-uni-bold">We are a digital agency with 5+ years of experience.</h1>
          </div>
          <div class="col-md-7">
            <p
              class="font-uni-reg"
            >We are here to render digital solutions for your business. Some more dummy text.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus purus malesuada sit aenean lacus at. Massa consequat mi ornare semper platea aliquet nunc morbi.</p>

            <ul>
              <li class="mb-2">
                <span class="d-inline-block pr-4">
                  <svg-message></svg-message>
                </span>
                <span>info@mitotech.com</span>
              </li>
              <li class="mb-3">
                <span class="d-inline-block pr-4">
                  <svg-location></svg-location>
                </span>
                <span>29, Ihama road, off airport road. Benin city Edo State. Nigeria.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="container" v-bind:class="$resize && $mq.above(768) ? 'container-mito-2' : ''">
        <div class="row">
          <div class="col">
            <h2 class="title font-uni-bold">
              SOME PROJECTS
              <br />COMPLETED
            </h2>
          </div>
        </div>
      </div>

      <div>
        <div class="container" v-bind:class="$resize && $mq.above(768) ? 'container-mito-2' : ''">
          <div class="row">
            <div class="col-md-8">
              <div>
                <div></div>
              </div>
            </div>
            <div class="col-md-4">
              <h3 class="font-uni-bold">FlyKnit</h3>
              <p
                class="font-uni-reg"
              >FlyKnit is a clothing line. We helped them create the perfect digital marketing funnel that propelled increase in sales and profit.</p>
            </div>
          </div>
        </div>

        <img src="../../assets/img/woman.png" alt="mitotech flyknit" />
      </div>

      <div>
        <div class="container" v-bind:class="$resize && $mq.above(768) ? 'container-mito-3' : ''">
          <div class="row">
            <div class="col-md-4">
              <h3 class="font-uni-bold">Counser</h3>
              <p
                class="font-uni-reg"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra et integer nisi, cras sapien tincidunt placerat velit. Luctus</p>
            </div>

            <div class="col-md-8">
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <img src="../../assets/img/accessories.png" alt="mitotech counser">
      </div>
    </section>

    <section class="testimonials">

      <div>
        <img src="../../assets/svg/Rectangle 16.svg" alt="">
        <img src="../../assets/svg/Rectangle 16.svg" alt="">
      </div>

      <div class="text-center container">
        <h3 class="font-uni-bold mb-md-5 mb-3">What clients say</h3>
        <p>Mititech solutions is an end to end product delivery. this is some dummy text. This can be replaced.</p>
      </div>-

      <div>
        <carousel-comp></carousel-comp>
      </div>
    </section>

    <section class="work-with-us" id="contact">
      <div class="container" v-bind:class="$resize && $mq.above(768) ? 'container-mito-2' : ''">
        <div class="row">
          <div class="col-md-6">
            <h2 class="font-uni-bold">
              COME WORK
              <br />WITH US
            </h2>

            <img src="../../assets/img/Rectangle 13.png" alt="work with us" class="d-inline-block d-md-none"  />

            <p>Lets build your project together. We are here to give you digital solutions to your business at a good price.</p>

            <a href="mailto:info@mitotech.com" class="font-uni-bold">Contact Us</a>
          </div>
          <!-- <div class="col-md-6">
          </div>-->
        </div>
      </div>

      <img src="../../assets/img/Rectangle 13.png" alt="work with us" class="d-none d-md-inline-block"  />
    </section>
  </div>
</template>

<script>
import Carousel from "../../components/Carousel";

export default {
  components: {
    "carousel-comp": Carousel,
  },

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../../sass/variables";
@import "../../sass/home";
</style>