const Eureka = require("eureka-js-client").Eureka;

const client = new Eureka({
  // application instance information
  instance: {
    app: "khyati",
    hostName: "localhost",
    ipAddr: "127.0.0.1",
    port: {
      $: 3000,
      "@enabled": "true",
    },
    vipAddress: "khyati.com",
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    // eureka server host / port
    host: "192.168.2.79",
    port: 8761,
    servicePath: "/eureka/apps/",
  },
});

module.exports = client;
