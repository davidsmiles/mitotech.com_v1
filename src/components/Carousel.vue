<template>
  <div>
    <div class>
      <div class="row carousel-row">
        <div
          class="MultiCarousel"
          data-items="1,3,5,6"
          data-slide="1"
          id="MultiCarousel"
          data-interval="1000"
        >
          <div
            class="MultiCarousel-inner"
            v-bind:style="
              'left: ' +
              carouselLeft +
              'px !important; padding-left: ' +
              leftPad +
              'px;' +
              carouselTransition
            "
            v-on:transitionend="carouselEnd"
            ref="cont"
          >
            <template v-for="(testimonial, id) in testimonials">
              <div
                class="item"
                v-bind:class="{ active: activeCarousel(testimonial) }"
              >
                <div class="pad15">
                  <p class="mb-4">
                    <svg-quote></svg-quote>
                  </p>

                  <p class="mb-4">{{ testimonial.review }}</p>

                  <div>
                    <div class="mr-2">
                      <img v-bind:src="testimonial.customer_photo" alt />
                    </div>
                    <div>
                      <strong class="font-mont-black">{{
                        testimonial.customer_name
                      }}</strong>
                      <small>Categories: {{ testimonial.categories }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <button class="btn btn-primary leftLst" v-on:click="slideLeft()">
            ❮
          </button>
          <button class="btn btn-primary rightLst" v-on:click="slideRight()">
            ❯
          </button>
        </div>

        <div class="slider">
          <div>
            <span v-bind:style="'left: ' + cursor + 'px;'"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          review:
            "Mitotech solutions is an end to end product delivery. this is some dummy text. This can be replaced. - 1",
          customer_photo: "//via.placeholder.com/150",
          customer_name: "Arthur Broklyn",
          categories: "3d Modelling",
        },
        {
          id: 2,
          review:
            "Mitotech solutions is an end to end product delivery. this is some dummy text. This can be replaced. - 2",
          customer_photo: "//via.placeholder.com/150",
          customer_name: "Arthur Broklyn",
          categories: "3d Modelling",
        },
        {
          id: 3,
          review:
            "Mitotech solutions is an end to end product delivery. this is some dummy text. This can be replaced. - 3",
          customer_photo: "//via.placeholder.com/150",
          customer_name: "Arthur Broklyn",
          categories: "3d Modelling",
        },
        {
          id: 4,
          review:
            "Mitotech solutions is an end to end product delivery. this is some dummy text. This can be replaced. - 4",
          customer_photo: "//via.placeholder.com/150",
          customer_name: "Arthur Broklyn",
          categories: "3d Modelling",
        },
        {
          id: 5,
          review:
            "Mitotech solutions is an end to end product delivery. this is some dummy text. This can be replaced. - 5",
          customer_photo: "//via.placeholder.com/150",
          customer_name: "Arthur Broklyn",
          categories: "3d Modelling",
        },
        {
          id: 6,
          review:
            "Mitotech solutions is an end to end product delivery. this is some dummy text. This can be replaced. - 6",
          customer_photo: "//via.placeholder.com/150",
          customer_name: "Arthur Broklyn",
          categories: "3d Modelling",
        },
      ],

      itemWidth: 0,
      slide: 1,
      leftPad: 0,
      scrollDirection: "none",
      isSliding: false,
      curItem: 2,
      transitionState: true,
      carouselLeft: 0,
    };
  },

  methods: {
    updateItemWidth() {
      this.itemWidth = document.querySelector(".item").offsetWidth + 20;
    },

    endSliding() {
      setTimeout(() => {
        this.isSliding = false;
        // console.log(this.curItem);
        // alert("ended slide");
      }, 1100);
    },

    slideLeft() {
      if (!this.isSliding) {
        // console.log(this.curItem);
        this.isSliding = true;
        this.slide += 1;
        this.carouselLeft = this.itemWidth * -1;
        this.curItem = this.curItem == 6 ? 1 : this.curItem + 1;
        this.scrollDirection = "left";
        this.endSliding();
      }
    },

    slideRight() {
      if (!this.isSliding) {
        this.isSliding = true;

        if (this.slide <= 1 || true) {
          let comp = this;
          this.transitionState = false;
          this.carouselLeft = this.itemWidth * -1;
          let last_testimonial = this.testimonials.pop();
          this.testimonials.unshift(last_testimonial);

          setTimeout(() => {
            comp.transitionState = true;
            comp.carouselLeft = 0;
            comp.slide -= 1;
            comp.curItem = comp.curItem == 1 ? 6 : comp.curItem - 1;
            comp.scrollDirection = "right";
          }, 50);
        } else {
          this.scrollDirection = "right";
          let last_testimonial = this.testimonials.pop();
          this.testimonials.unshift(last_testimonial);
          this.leftPad -= this.itemWidth;
          this.slide -= 1;
          this.curItem = this.curItem == 1 ? 6 : this.curItem - 1;
        }

        this.endSliding();
      }
    },

    carouselEnd(event) {
      if (event.propertyName == "left") {
        if (this.scrollDirection == "left") {
          this.transitionState = false;
          let first_testimonial = this.testimonials.shift();
          this.testimonials.push(first_testimonial);
          this.carouselLeft = 0;
          setTimeout(() => {
            this.transitionState = true;
          }, 50);
          // this.leftPad += this.itemWidth;
        } else if (this.scrollDirection == "right") {
          // let last_tes = this.testimonials.shift();
          // this.testimonials.push(last_tes);
          // this.leftPad += this.itemWidth;
        }
      }
    },

    activeCarousel(testimonial) {
      if (this.$resize && this.$mq.above(768)) {
        return testimonial.id == this.curItem;
      } else {
        return this.curItem == 1 ? testimonial.id == 6 : testimonial.id == this.curItem - 1;
      }
    },
  },

  mounted() {
    this.updateItemWidth();
  },

  computed: {
    carouselTransition() {
      return this.transitionState ? "transition: 1s ease left;" : "";
    },

    cursor() {
      return this.curItem == this.testimonials.length
        ? 66.5
        : ((this.curItem - 1) / this.testimonials.length) * 66.5;
    },
  },

  created() {},
};
</script>

<style scoped lang="scss">
@import "../sass/variables";
@import "../sass/_carousel.scss";
</style>