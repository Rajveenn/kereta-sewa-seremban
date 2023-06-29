<template>
  <v-app>
    <vue-particles
      color="#240b36"
      :particleOpacity="0.7"
      :particlesNumber="50"
      shapeType="star"
      :particleSize="4"
      linesColor="#c31432"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <v-container class="container">
      <div>
        <v-app-bar class="bar1" :elevation="11">
          <v-row align="center" class="d-flex align-center">
            <v-col :cols="4" align="center">
              <v-img
                src="../assets/images/logo.png"
                class="logo"
                alt="keretasewa"
                @click="$router.push({ path: '/car-rental-seremban' })"
              />
            </v-col>
            <v-col :cols="4">
              <ul
                class="nav-items"
                style="flex-direction: row !important; display: flex !important"
              >
                <li>
                  <a
                    href="https://www.facebook.com/jrvcarrentalseremban"
                    target="_blank"
                  >
                    <v-icon
                      size="40"
                      style="
                      text-decoration: none !important;
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                      class="btnWa"
                      @click="trackButtonClick('FacebookGroup')"
                      >mdi-facebook</v-icon
                    >
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/jastransport_rentalservices/"
                    target="_blank"
                  >
                    <v-icon
                      size="40"
                      style="
                      text-decoration: none !important;
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                      class="btnWa"
                      @click="trackButtonClick('InstagramGroup')"
                      >mdi-instagram</v-icon
                    >
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/DVZXvnBiDqS0Z9jkHwL9yT"
                    target="_blank"
                  >
                    <v-icon
                      size="40"
                      style="
                      text-decoration: none !important;
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                      class="btnWa"
                      @click="trackButtonClick('WhatsappGroup')"
                      >mdi-whatsapp</v-icon
                    >
                  </a>
                </li>
                <li>
                  <a href="https://t.me/+ILGvKb39imRkMDNl" target="_blank">
                    <v-icon
                      size="40"
                      style="
                      text-decoration: none !important;
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                      class="btnWa"
                      @click="trackButtonClick('TelegramGroup')"
                      >mdi-telegram</v-icon
                    >
                  </a>
                </li>
              </ul>
              <br />
              <v-card-text class="d-flex align-center justify-center title">
                JRV CAR RENTAL SEREMBAN
              </v-card-text>
            </v-col>
            <v-col :cols="4" align="center" style="max-width: 100% !important">
              <v-btn
                v-if="showAdminButton"
                class="justify-end btnWa"
                @click="$router.push({ path: '/home' })"
                ><v-icon
                  style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                >
                  mdi-home-circle-outline mdi-18px </v-icon
                >Admin</v-btn
              >
              <v-card-text class="username" v-if="userProfile.name">
                {{ userProfile.name }}
              </v-card-text>

              <v-btn
                icon
                @click="account()"
                v-if="userProfile.name"
                class="btnWa"
              >
                <v-icon
                  style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                  >mdi-account-circle-outline</v-icon
                >
              </v-btn>

              <v-btn
                icon
                @click="logout()"
                v-if="userProfile.name"
                class="btnWa"
              >
                <v-icon
                  style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                  >mdi-logout-variant</v-icon
                >
              </v-btn>

              <div v-else>
                <v-btn
                  class="justify-end btnWa"
                  @click="$router.push({ path: '/login' })"
                  ><v-icon
                    style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                    alt="WhatsApp icon"
                    aria-label="Contact JRV-Car-Rental-Seremban on WhatsApp"
                    >mdi-login</v-icon
                  >Login / Register</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-app-bar>
      </div>
      <v-card class="grid" :elevation="11">
        <div v-if="userProfile.name">
          <v-card-text class="text-center mx-auto header"
            >Welcome Mr/Ms {{ userProfile.name }} to JRV Car Rental Seremban, We
            offer a wide range of vehicles to suit your needs, including some of
            the top rented car models in Malaysia such as the Perodua Axia,
            Toyota Vios, Honda City, and Perodua Myvi, Proton X50, you may view
            our cars below and connect with us on whatsapp to make
            reservations.</v-card-text
          >
          <v-card-text class="text-center mx-auto header"
            >Selamat Datang Encik/Cik {{ userProfile.name }} ke JRV Car Rental
            Seremban, Kami menawarkan pelbagai jenis kenderaan untuk memenuhi
            keperluan anda, termasuk beberapa model kereta sewa yang popular di
            Malaysia seperti Perodua Axia, Toyota Vios, Honda City, dan Perodua
            Myvi, Proton X50, anda boleh lihat kereta kami di bawah dan
            berhubung dengan kami di whatsapp untuk membuat
            tempahan.</v-card-text
          >
        </div>
        <div v-else>
          <v-card-text class="text-center mx-auto header"
            >Welcome to JRV Car Rental Seremban, We offer a wide range of
            vehicles to suit your needs, including some of the top rented car
            models in Malaysia such as the Perodua Axia, Toyota Vios, Honda
            City, and Perodua Myvi, Proton X50, you may view our cars below and
            connect with us on whatsapp to make reservations.</v-card-text
          >
          <!-- <v-card-text class="text-center mx-auto header"
            >Selamat Datang ke JRV Car Rental Seremban, Kami menawarkan pelbagai
            jenis kenderaan untuk memenuhi keperluan anda, termasuk beberapa
            model kereta sewa yang popular di Malaysia seperti Perodua Axia,
            Toyota Vios, Honda City, dan Perodua Myvi, Proton X50, anda boleh
            lihat kereta kami di bawah dan berhubung dengan kami di whatsapp
            untuk membuat tempahan.</v-card-text
          > -->
        </div>
      </v-card>
      <v-card
        class="grid"
        :elevation="11"
        style="
          opacity: 1 !important;
          background: rgba(249, 236, 224, 0.59) !important !important;
        "
      >
        <v-tabs
          v-model="tab1"
          centered
          grow
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
        >
          <v-tab
            ><v-card-text class="text-center mx-auto header"
              >Our Cars</v-card-text
            ></v-tab
          >
          <v-tab
            ><v-card-text class="text-center mx-auto header"
              >Customer Reviews</v-card-text
            ></v-tab
          >
          <v-tab
            ><v-card-text class="text-center mx-auto header"
              >Find Us</v-card-text
            ></v-tab
          >
        </v-tabs>
        <v-tabs-items v-model="tab1" touchless>
          <v-tab-item style="margin-top: 20px !important">
            <v-tabs
              v-model="tab"
              centered
              next-icon="mdi-arrow-right-bold-box-outline"
              prev-icon="mdi-arrow-left-bold-box-outline"
              show-arrows
              grow
            >
              <v-tab
                v-for="(categoryCars, categoryName) in groupedCars"
                :key="categoryName"
                :value="categoryName"
                :href="`#${categoryName}`"
              >
                <v-card-text class="text-center mx-auto header">{{
                  categoryName
                }}</v-card-text>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab" touchless>
              <v-tab-item
                v-for="(categoryCars, categoryName) in groupedCars"
                :key="categoryName"
                :value="categoryName"
              >
                <v-container>
                  <v-row
                    v-for="car in categoryCars"
                    :key="car._id"
                    style="padding-bottom: 1%"
                  >
                    <v-card class="grid5" :elevation="5" shaped>
                      <v-row class="d-flex align-center justify-center">
                        <div class="text-center mx-auto text4">
                          {{ car.make }} {{ car.model }}
                        </div>
                      </v-row>
                    </v-card>
                    <carousel-3d>
                      <slide
                        v-for="(image, i) in car.imageUrl"
                        :index="i"
                        :key="i"
                        style="
                          max-width: 250px !important;
                          max-height: 250px !important;
                        "
                      >
                        <template
                          slot-scope="{
                            index,
                            isCurrent,
                            leftIndex,
                            rightIndex,
                          }"
                        >
                          <img
                            :data-index="index"
                            :class="{
                              current: isCurrent,
                              onLeft: leftIndex >= 0,
                              onRight: rightIndex >= 0,
                            }"
                            :src="image.url"
                            width="250px"
                            height="250px"
                          />
                        </template>
                      </slide>
                    </carousel-3d>
                    <v-row class="d-flex align-center justify-center">
                      <v-col>
                        <v-card-text
                          class="d-flex align-center justify-center price"
                        >
                          <textra
                            :data="car.pricePerDay"
                            :timer="3"
                            filter="left-right"
                            infinite
                          />
                        </v-card-text>
                      </v-col>
                      <v-col>
                        <v-card-text
                          class="d-flex align-center justify-center price2"
                        >
                          <textra
                            :data="car.pricePer3Days"
                            :timer="3"
                            filter="left-right"
                            infinite
                          />
                        </v-card-text>
                      </v-col>
                      <v-col>
                        <v-card-text
                          class="d-flex align-center justify-center price3"
                        >
                          <textra
                            :data="car.pricePerWeek"
                            :timer="3"
                            filter="left-right"
                            infinite
                          />
                        </v-card-text>
                      </v-col>
                    </v-row>
                    <v-row align="center" class="d-flex align-center">
                      <v-col :cols="6" class="d-flex align-center mx-auto">
                        <v-card-text class="text-center mx-auto color"
                          >Available Colors :
                        </v-card-text>
                        <v-card
                          v-for="color in car.colors"
                          :key="color"
                          min-height="20px"
                          min-width="20px"
                          :style="{ backgroundColor: color }"
                          style="
                            margin-left: 2px !important;
                            margin-right: 2px !important;
                          "
                        >
                        </v-card>
                      </v-col>
                      <v-col :cols="6" class="d-flex align-center mx-auto">
                        <v-btn
                          class="justify-end btnWa"
                          :href="`https://wa.me/138845477?text=I'm%20interested%20in%20your%20${car.make}%20${car.model}%20for%20rental%20from%20JRV%20Rental%20Services`"
                          target="_blank"
                          @click="
                            trackButtonClick('WhatsappMessageInactive', car)
                          "
                          ><v-icon
                            style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                            alt="WhatsApp icon"
                            aria-label="Contact JRV-Car-Rental-Seremban on WhatsApp"
                            >mdi-whatsapp</v-icon
                          >Book Now</v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row
                      class="d-flex align-center justify-center"
                      style="padding-top: 20px !important"
                    >
                      <!-- <div class="d-flex align-items-center justify-content-center"> -->
                      <div class="text-center mx-auto text3">
                        {{ car.desc }}
                      </div>
                      <!-- </div> -->
                    </v-row>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs-items>
          </v-tab-item>
          <v-tab-item style="margin-top: 20px !important">
            <v-form ref="form" @submit.prevent="submitReview">
              <v-card style="background-color: transparent !important">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <v-card-text
                        class="d-flex align-center justify-center about"
                        >Submit A Review</v-card-text
                      ></v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-card-text
                              class="d-flex align-center justify-center text2"
                              >Name</v-card-text
                            >
                            <v-text-field
                              dark
                              v-model="review.name"
                              :rules="[rules.required]"
                              required
                              class="text"
                              dense
                              solo
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-card-text
                              class="d-flex align-center justify-center text2"
                              >Car Rented</v-card-text
                            >
                            <v-select
                              required
                              v-model="review.car"
                              :items="generateCombinedModels"
                              dense
                              dark
                              solo
                            ></v-select>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-card-text
                              class="d-flex align-center justify-center text2"
                              >Rating 1-5</v-card-text
                            >
                            <v-rating
                              v-model="review.rating"
                              hover
                              style="background-color: #0000003d !important"
                              :value="3"
                              color="#80ff00 "
                              :rules="[rules.required]"
                              half-increments
                              requiree
                              dark
                              class="text-center mx-auto"
                            ></v-rating>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-card-text
                              class="d-flex align-center justify-center text2"
                              >Review (maximum 150 words)</v-card-text
                            >
                            <v-textarea
                              v-model="review.text"
                              :rules="reviewRules"
                              :counter="150"
                              required
                              dark
                              class="text"
                              dense
                              solo
                            ></v-textarea>
                          </v-col>
                        </v-row>
                        <v-row class="justify-center align-center" no-gutters>
                          <v-btn class="button" dark type="submit">
                            <v-icon color="#fff"> mdi-send mdi-18px </v-icon>
                            Submit
                          </v-btn>
                        </v-row>
                      </v-container>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card>
              <v-container>
                <v-card-text
                  class="d-flex align-center justify-center about"
                  style="margin-top: 2% !important"
                  >Reviews By Our Customers</v-card-text
                >
                <iframe
                  src="https://widgets.sociablekit.com/google-reviews/iframe/155436"
                  frameborder="0"
                  width="100%"
                  height="300"
                  style="background-color: transparent !important"
                  class="sk-ww-google-reviews sk-dashboard-iframe-preview"
                ></iframe>

                <v-row>
                  <v-col
                    v-for="(review, index) in currentReviews"
                    :key="index"
                    cols="12/3"
                    md="4"
                  >
                    <v-card class="my-card">
                      <v-rating
                        :value="review.rating"
                        readonly
                        :color="'#7A3F75 !important'"
                        half-increments
                        class="text-center mx-auto"
                      ></v-rating>
                      <v-card-text class="text-center mx-auto text5">{{
                        review.name
                      }}</v-card-text>
                      <v-card-text class="text-center mx-auto text6"
                        >"{{ review.text }}"</v-card-text
                      >
                    </v-card>
                  </v-col>
                </v-row>
                <v-pagination
                  dark
                  v-model="currentPage"
                  :total-visible="5"
                  :length="totalPages"
                  @input="pageChanged"
                  :disabled="disabled"
                />
              </v-container>
            </v-form>
          </v-tab-item>
          <v-tab-item style="margin-top: 20px !important">
            <v-row align="center" style="margin-top: 2% !important">
              <!-- <v-col :cols="4" align="center"> -->
              <a
                href="tel:+60193393600"
                target="_blank"
                class="text2 text-decoration-none"
              >
                <v-icon
                  size="24"
                  style="margin-right: 0 !important; background-image: linear-gradient(to right, #ad5389, #3c1053) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,"
                  >mdi-phone</v-icon
                >
                <span class="pl-2">: +60 13-884 5477</span>
              </a>
              <!-- </v-col> -->
              <!-- <v-col :cols="4" align="center"> -->
            </v-row>
            <v-row align="center" style="margin-top: 2% !important">
              <a
                href="tel:+60138845477"
                target="_blank"
                class="text2 text-decoration-none"
              >
                <v-icon
                  size="24"
                  style="margin-right: 0 !important; background-image: linear-gradient(to right, #ad5389, #3c1053) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,"
                  >mdi-cellphone</v-icon
                >
                <span class="pl-2">: +60 19-339 3600</span>
              </a>
              <!-- </v-col> -->
              <!-- <v-col :cols="4" align="center"> -->
            </v-row>
            <v-row align="center" style="margin-top: 2% !important">
              <a
                href="mailto:jas.rentalservices@gmail.com"
                target="_blank"
                class="text2 text-decoration-none"
              >
                <v-icon
                  size="24"
                  style="margin-right: 0 !important; background-image: linear-gradient(to right, #ad5389, #3c1053) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,"
                  >mdi-gmail</v-icon
                >
                <span class="pl-2">: jas.rentalservices@gmail.com</span>
              </a>
              <!-- </v-col> -->
            </v-row>
            <v-row align="center" style="margin-top: 2% !important">
              <a
              href="https://goo.gl/maps/2Xm8F6mH6iaquN7s7"
                target="_blank"
                class="text2 text-decoration-none"
              >
                <v-icon
                  size="24"
                  style="margin-right: 0 !important; background-image: linear-gradient(to right, #ad5389, #3c1053) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,"
                  >mdi-map-marker</v-icon
                >
                <span class="pl-2">: Seremban Gateway , Seremban
                      </span>
              </a>
              <!-- </v-col> -->
            </v-row>
            <div
              class="d-flex align-center justify-center"
              style="margin-top: 2% !important"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.3341561536085!2d101.91685587472371!3d2.7167051556592425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cde94c7dd2d7f1%3A0xd8e6033569306cdd!2sJRV%20Car%20Rental%20Seremban!5e0!3m2!1sen!2smy!4v1683872948030!5m2!1sen!2smy"
                frameborder="0"
                style="
                  width: 300px;
                  height: 300px;
                  max-width: 100%;
                  margin-bottom: 1%;
                "
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      <v-footer padless class="footer" color="transparent">
        <v-card-text class="d-flex flex-column align-top footer">
          <div class="footer-top mb-3">
            <v-row align="center" class="row2">
              <v-col>
                <span
                  class="mr-3 d-grid align-center justify-center"
                  style="text-align: justify"
                >
                  <a
                    href="https://jrvservices.co/car-rental-seremban"
                    target="_blank"
                    class="text2 text-decoration-none"
                  >
                    <v-card-text
                      class="d-flex align-center justify-center text2"
                      >JRV Car Rental Services, Located at Seremban and provided
                      as well at KL, Selangor, Melaka, JB, and throughout all
                      states in Malaysia.</v-card-text
                    >
                  </a>
                </span>
              </v-col>
            </v-row>
            <v-row align="center" class="row2">
              <v-col>
                <a
                  href="https://www.facebook.com/jrvcarrentalseremban"
                  target="_blank"
                >
                  <v-icon
                    size="32"
                    class="mx-2 btnWa"
                    style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                    @click="trackButtonClick('FacebookGroup')"
                    >mdi-facebook</v-icon
                  >
                </a>
                <a
                  href="https://www.instagram.com/jastransport_rentalservices/"
                  target="_blank"
                >
                  <v-icon
                    size="32"
                    class="mx-2 btnWa"
                    style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                    @click="trackButtonClick('InstagramGroup')"
                    >mdi-instagram</v-icon
                  >
                </a>
                <a
                  href="https://chat.whatsapp.com/DVZXvnBiDqS0Z9jkHwL9yT"
                  target="_blank"
                >
                  <v-icon
                    size="32"
                    class="mx-2 btnWa"
                    style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                    @click="trackButtonClick('WhatsappGroup')"
                    >mdi-whatsapp</v-icon
                  >
                </a>
                <a href="https://t.me/+ILGvKb39imRkMDNl" target="_blank">
                  <v-icon
                    size="32"
                    class="mx-2 btnWa"
                    style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
                    @click="trackButtonClick('TelegramGroup')"
                    >mdi-telegram</v-icon
                  >
                </a>
              </v-col>
            </v-row>
          </div>
          <div
            class="footer-bottom text2"
            style="margin-top: 1% !important ; margin-bottom: 1% !important"
          >
            Copyright {{ new Date().getFullYear() }} @
            <a
              href="https://www.linkedin.com/in/rajveenz2/"
              target="_blank"
              class="company-link"
              style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
              >Fast Track Solutions</a
            >
          </div>
        </v-card-text>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import DataService from "../services/dataService.js";
const dataService = new DataService();
import store from "./../app.store";

export default {
  data() {
    return {
      // name : this.$store.state.userProfile.name
      tab: "LOCAL",
      tab1: "OUR CARS",
      showPopup: true,
      popupTitle: "Missing Documents",
      popupMessage:
        "Please upload or fix the missing documents sent on email to avoid booking issues.",
      showAdminButton: false,
      bookingDate: null,
      returnDate: null,
      user: [],
      userProfile: [],
      cars: [],
      reviews: [],
      reviewRules: [
        (value) => {
          if (value) return true;

          return "Review is requred.";
        },
        (value) => {
          if (value?.length <= 150) return true;

          return "Review must be less than 150 characters.";
        },
      ],
      currentCarIndex: 0,
      activeSlide: 0,
      review: {
        car: "",
        name: "",
        rating: 0,
        text: "",
      },
      ratings: [1, 2, 3, 4, 5],
      rules: {
        required: (value) => !!value || "This field is required.",
      },
      currentPage: 1,
      itemsPerPage: 3,
      disabled: false,
    };
  },

  mounted: function () {
    this.getUser();
    this.getCars();
    this.getReviews();
    // setInterval(() => {
    //   this.nextSlide();
    // }, 20000);
  },

  computed: {
    generateCombinedModels() {
      let CombinedModels = this.cars.map((car) => car.make + " " + car.model);
      return CombinedModels;
    },
    groupedCars() {
      const categoryOrder = [
        "LOCAL",
        "MPV & VAN",
        "SUV",
        "LUXURY SEDAN",
        "PREMIUM",
        "4WD DRIVE VEHICLES",
        "2 DOOR SPORTS COUPE",
        "SUPERCAR",
      ];
      const grouped = this.cars.reduce((grouped, car) => {
        let c = car.category.toUpperCase();
        if (!grouped[c]) {
          grouped[c] = [];
        }
        const existingCarIndex = grouped[c].findIndex(
          (existingCar) =>
            existingCar.make === car.make && existingCar.model === car.model
        );
        if (existingCarIndex >= 0) {
          // Car already exists in group, add color to existing car's color array
          const existingCar = grouped[c][existingCarIndex];
          if (!existingCar.colors.includes(car.color)) {
            existingCar.colors.push(car.color);
          }
        } else {
          // Car does not exist in group, add it
          grouped[c].push({
            make: car.make,
            model: car.model,
            colors: [car.color],
            imageUrl: car.imageUrl,
            pricePerDay: ["RM " + car.pricePerDay.toString() + " / DAY"],
            pricePer3Days: ["RM " + car.pricePer3days.toString() + " / 3 DAYS"],
            pricePerWeek: ["RM " + car.pricePerWeek.toString() + " / WEEK"],
            desc: car.desc,
          });
        }
        return grouped;
      }, {});
      return Object.keys(grouped)
        .sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b))
        .reduce((sorted, category) => {
          sorted[category] = grouped[category].sort((carA, carB) => {
            const priceA = parseInt(carA.pricePerDay[0].split(" ")[1]);
            const priceB = parseInt(carB.pricePerDay[0].split(" ")[1]);
            return priceA - priceB;
          });
          return sorted;
        }, {});
    },

    chunkedReviews() {
      const chunkedArray = [];
      const reviewsCopy = [...this.reviews];
      while (reviewsCopy.length > 0) {
        chunkedArray.push(reviewsCopy.splice(0, this.itemsPerPage));
      }
      return chunkedArray;
    },
    currentReviews() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.reviews.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.reviews.length / this.itemsPerPage);
    },
  },

  methods: {
    async trackButtonClick(a, car, mobileNumber) {
      console.log(a);
      console.log(car);
      console.log(mobileNumber);
      if (car && mobileNumber) {
         await dataService.addTracker({
          name: "Clicks",
          buttonName: a,
          dataType: car.make + " " + car.model,
          mobileNumber: mobileNumber,
        });
      }
      if (car && !mobileNumber) {
       await dataService.addTracker({
          name: "Clicks",
          buttonName: a,
          dataType: car.make + " " + car.model,
          mobileNumber: "jrvservices.co",
        });
       }
      if (!car && !mobileNumber) {
       await dataService.addTracker({
         name: "Clicks",
         buttonName: a,
         dataType: "Groups",
         mobileNumber: "jrvservices.co",
       });
      }
    },

    async getUser() {
      this.$setLoader();
      await dataService.addTracker({
        name: "Site Loaded",
        buttonName: "Page Click",
        dataType: "jrvservices.co",
        mobileNumber: "Null",
      });
      window.$cookies.set("posToken", window.$cookies.get("posToken"));
      if (window.$cookies.get("posToken") !== "null") {
        store.state.loader = true;
        dataService
          .whoAmI()
          .then((res) => {
            this.user = res.data.localUser;
            if (this.user.roles[0] == "admin") {
              this.showAdminButton = true;
            }
            this.userProfile = res.data.user;
            store.state.loader = false;
          })
          .catch(() => {
            window.location.reload();
          });
      } else {
        store.state.loader = false;
      }
    },
    async getCars() {
      this.$setLoader();
      // await dataService.getCars().then((res) => {
      //   for (let car of res.data.cars) {
      //     if (car.rentStatus != "Inactive") {
      //       car.imageUrl[4] = car.imageUrl[1];
      //       this.cars.push(car);
      //     }
      //   }
      // });
      await dataService.addTracker({
          name: "Site Loaded",
          buttonName: "Page Click",
          dataType: "kereta-sewa-seremban.site",
          mobileNumber: "Null",
        });
      window.location.href = 'https://jrvservices.co';

      this.$disableLoader();
    },

    async getReviews() {
      this.$setLoader();
      await dataService.getReviews().then((res) => {
        this.reviews = res.data.reviews;
      });

      this.$disableLoader();
    },

    pageChanged(pageNumber) {
      this.currentPage = pageNumber;
    },

    async submitReview() {
      this.$setLoader();
      const isValid = await this.$refs.form.validate();
      if (isValid) {
        await dataService.addReview(this.review).then((res) => {
          console.log(res);
          this.$refs.form.reset();
          window.location.reload();
        });

        this.$disableLoader();
      } else {
        alert("Please fill out all required fields");
        this.$disableLoader();
      }
    },

    account() {
      this.$router.push({ path: `/edit` });
    },

    logout() {
      window.getApp.$emit("APP_LOGOUT");
    },
  },
};
</script>

<style scoped lang="scss">
#particles-js {
  background-color: #f9ece0;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
.container {
  /* margin-top: 5%; */
  height: fit-content !important;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 0 10px;
  }
}
i {
  display: none;
}

.v-application .elevation-8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.2), 0px 3px 14px 2px rgba(0, 0, 0, 0.2) !important;
}

.v-application .elevation-12 {
  box-shadow: 0px 5px 5px -3px #00000049, 0px 8px 10px 1px #0000004d,
    0px 3px 14px 2px #00000054 !important;
}

.my-card {
  height: 240px !important;
  background-color: transparent !important;
}
</style>
