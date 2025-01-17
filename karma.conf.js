// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  process.env.CHROME_BIN = '/usr/bin/chromium-browser'
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/paisa-vasool'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers:{  
      ChromeHeadlessNoSandbox:{  
         base:"ChromeHeadless",
         flags:[  
            "--no-sandbox",
            "--disable-web-security",
            "--disable-gpu",
            "--remote-debugging-port=9222",
            '--disable-extensions', 
            '--no-proxy-server'
         ]
      }
   },
    singleRun: false,
    restartOnFileChange: true,
    junitReporter:{  
      // results will be saved as $outputDir/$browserName.xml 
      outputDir:'test-reports',
      // if included, results will be saved as $outputDir/$browserName/$outputFile 
      outputFile:'junit-report.xml',
      // suite will become the package name attribute in xml testsuite element 
      suite:'',
      // add browser name to report and classes names 
      useBrowserName:false,
      // function (browser, result) to customize the name attribute in xml testcase element 
      nameFormatter:undefined,
      // function (browser, result) to customize the classname attribute in xml testcase element 
      classNameFormatter:undefined,
      properties:{     }   // key value pair of properties to add to the section of the report
   }
  });
};
