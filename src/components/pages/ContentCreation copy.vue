 <template>
  <div>
    <!-- <div class="background">
      <img class="rect-1" src="../../assets/svg/Rectangle 16 (2).svg" alt="" />
      <img class="rect-2" src="../../assets/svg/Rectangle 21@2x.svg" alt="" />
      <img class="rect-3" src="../../assets/svg/Rectangle 21@2x.svg" alt="" />
      <img class="ecl-1" src="../../assets/svg/Ellipse 11.svg" alt="" />
      <img class="rect-4" src="../../assets/svg/Rectangle 22 (2).svg" alt="" />
      <img class="rect-5" src="../../assets/svg/Rectangle 19 (2).svg" alt="" />
      <img class="rect-6" src="../../assets/svg/Rectangle 23 (2).svg" alt="" />
    </div> -->
    <section class="hero">
      <div>
        <img src="../../assets/svg/Rectangle 16.svg" alt="" />
        <img src="../../assets/svg/Rectangle 21.svg" alt="" />
        <img src="../../assets/svg/Vector 1.svg" alt="" />
        <img src="../../assets/svg/Ellipse 11.svg" alt="" />
        <img src="../../assets/svg/Rectangle 21.svg" alt="" />
      </div>

      <div
        class="container"
        v-bind:class="$resize && $mq.above(768) ? 'container-mito-1' : ''"
      >
        <div class="text">
          <p class="font-uni-bold">CONTENT CREATION</p>
          <h1 class="title font-mont-bold mb-3">
            High value content for your <br />target audience
          </h1>
        </div>
      </div>
    </section>

    <section class="section-2">
      <div class="bg-texture">
        <img
          src="../../assets/svg/Rectangle 23 (1).svg"
          alt=""
          class="rect-1"
        />
      </div>
      <div v-bind:class="$resize && $mq.above(768) ? '' : 'container'">
        <div class="row">
          <div class="col">
            <h2 class="title font-uni-bold">Content Creation</h2>
          </div>
        </div>
      </div>

      <div>
        <div v-bind:class="$resize && $mq.above(768) ? '' : 'container'">
          <div class="row">
            <div class="col-md-6">
              <img src="../../assets/img/Vector 3.png" alt="" />
            </div>
            <div class="col-md-6">
              <div class="featured-text">
                <p class="font-uni-bold">
                  MitoTech creates high value content that engages your target
                  audience.Our imagination is unrestricted and dynamic, just to
                  give you the best content your target audience won't get
                  anywhere else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="lets-talk">
      <div v-bind:class="$resize && $mq.above(768) ? '' : 'container'">
        <div class="lt-text">
          <h2 class="font-uni-bold">Let's talk</h2>
          <p class="font-uni-bold">
            Our team is ready to build solutions for that amazing idea!
          </p>
          <p class="font-uni-bold">
            Send us a mail:
            <a href="mailto:info@mitotech.com" class="font-uni-bold"
              >info@mitotech.com</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {};
  },
};
</script>
 
 <style scoped lang="scss">
@import "../../sass/variables";

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  //   z-index: 9999999;
  overflow: hidden;
  height: calc(100% + 92px);

  img {
    position: absolute;
  }

  .rect-6 {
    bottom: -121px;
    left: calc(50% - 200px);
  }

  .rect-1 {
    top: -143px;
    left: 187px;
  }

  .rect-4 {
    right: 0;
    bottom: -61px;
  }

  .rect-3 {
    top: 300px;
    left: 189px;
  }

  .rect-2 {
    top: 365px;
    left: 79%;
  }

  .ecl-1 {
    right: 24%;
    top: 221px;
  }

  .rect-5 {
    left: 0;
    top: 400px;
  }
}

.hero {
  // background: #ccc;
  position: relative;

  > div:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    overflow: hidden;

    img {
      position: absolute;
    }

    > img:nth-of-type(1) {
      left: 243px;
    }

    > img:nth-of-type(2) {
      left: 134px;
      top: 266px;
    }

    > img:nth-of-type(3) {
      right: 0px;
      top: 0px;
    }

    > img:nth-of-type(4) {
      right: 307px;
      top: 146px;
    }

    > img:nth-of-type(5) {
      right: 184px;
      top: 372px;
    }
  }

  > div:nth-of-type(2) {
    position: relative;
    z-index: 2;

    .text {
      padding-top: 350px;
      padding-bottom: 300px;

      @media (max-width: 768px) {
        text-align: center;
      }

      h1 {
        font-size: 51px;

        @media (max-width: 768px) {
          font-size: 36px;
        }
      }

      p {
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 0;
      }
    }
  }
}

.section-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media #{$mobile} {
    margin-bottom: 102px;
  }

  > div:nth-of-type(2) {
    > .row:nth-of-type(1) {
      margin-bottom: 80px;

      @media #{$mobile} {
        margin-bottom: 30px;
      }

      .title {
        font-size: 38px;
        position: relative;
        width: fit-content;
        margin: 0 auto;
        width: moz-fit-content;
        padding-left: 15px;

        @media #{$mobile} {
          font-size: 28px;
          padding-left: 0;
        }

        &:before {
          content: "";
          position: absolute;
          width: 96px;
          height: 5px;
          background: #002f5b;
          top: -13px;
          left: 0;
          z-index: 1;

          @media #{$mobile} {
            width: 77px;
            height: 4px;
            top: -11px;
          }
        }
      }
    }
  }

  > div:nth-of-type(3) {
    margin-bottom: 146px;
    position: relative;

    @media #{$mobile} {
      margin-bottom: 60px;
    }

    .container {
      > .row:nth-of-type(1) {
        > .col-md-8 {
          > div {
            width: 100%;
            height: 750px;
            // background: #eee;
            position: relative;

            @media #{$mobile} {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px;
              height: auto;
            }

            > div {
              width: 468px;
              height: 302px;
              position: absolute;
              top: 264px;
              right: 27px;
              background: url(../../assets/img/gif-1.gif);
              filter: drop-shadow(-17px 16px 6px rgba(17, 17, 17, 0.25));
              border-radius: 2px;
              background-size: cover;
              background-position: center center;

              @media #{$mobile} {
                border-radius: 20px;
                position: relative;
                top: 207px;
                left: 0;
                width: 100%;
              }
            }
          }
        }

        > .col-md-4 {
          p {
            font-size: 28px;
            line-height: 33px;

            @media #{$mobile} {
              font-size: 22px;
            }
          }

          h3 {
            font-size: 35px;
            margin-bottom: 73px;
            margin-left: 50px;
            margin-top: 132px;

            @media #{$mobile} {
              margin-top: 245px;
              margin-left: 0;
              font-size: 30px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }

    img {
      left: 0;
      top: 0;
      width: 100%;

      @media #{$mobile} {
        margin-bottom: 23px;
      }
    }
  }
}

.bg-texture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .rect-1 {
    position: absolute;
    left: calc(50% - 176px);
    top: -178px;
    width: 79px;
  }
}

.featured-text {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
    text-align: center;
    padding: 0 71px;
    line-height: 34px;

    @media #{$mobile} {
      padding: 0;
      font-size: 22px;
    }
  }
}

section.lets-talk {
  width: 100%;
  background: url("../../assets/img/Group-67.png");
  padding: 70px 0;
  background-size: cover;
  background-position: center center;
  margin-bottom: 150px;

  .lt-text {
    text-align: center;

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 23px;

      a {
        color: $theme-color-1;
      }
    }
  }
}
</style>