const HtmlPwaPlugin = require("@vue/cli-plugin-pwa/lib/HtmlPwaPlugin");

module.exports = {
  pluginOptions: {
    sitemap: {
      urls: ["https://jrvservices.co/login", "https://jrvservices.co/register", "https://jrvservices.co/reset", "https://jrvservices.co/404"],
    },
  },
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new HtmlPwaPlugin({
        start_url: "./",
        filename: "index.html",
        template: "public/index.html",
        minify: process.env.NODE_ENV === "production",
        serviceWorker: {
          events: true,
        },
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",
        manifestOptions: {
          name: "JRV Car Rental",
          short_name: "JRV Car Rental",
          icons: [
            {
              src: "https://jrvservices.co/img/icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "https://jrvservices.co/img/icons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
          theme_color: "#338175",
          background_color: "#338175",
          start_url: "https://jrvservices.co/car-rental-seremban",
          display: "standalone",
          description:
            "JRV Car Rental Seremban is a reliable and affordable car rental company serving the Seremban area, as well as other parts of Malaysia including KL, Melaka, JB, Selangor, and Perak. Our goal is to provide our customers with the best rental experience possible, and we take pride in our commitment to exceptional customer service. We offer a wide range of vehicles to suit your needs, including some of the top rented car models in Malaysia such as the Perodua Axia, Toyota Vios, Honda City, and Proton Saga. Our rental process is straightforward and hassle-free.",
          lang: "en",
          dir: "auto",
          orientation: "any",
          categories: ["business", "travel"],
        },
      }),
    ],
  },
};
