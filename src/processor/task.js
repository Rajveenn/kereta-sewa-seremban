export default {
  /* eslint-disable */

  printError(message) {
    console.log(message)
    process.exit()
  },

  pageProcessor(i, task, results, page_i, section_i, question_i) {
    if (task.pages) {
      task.pages.push({
        hidden: true
      })
    }
  },

  sectionProcessor(i, task, results, page_i, section_i, question_i) {
    try {
      if (!task.pages[page_i].sections) {
        task.pages[page_i].sections = []
      }
    } catch (error) {
      this.printError("Error 1000 - Page does not exists!")
    }

    if (results[i].language == "") {
      task.pages[page_i].sections.push({
        title: results[i].title,
        description: results[i].description
      })
    } else {
      task.pages[page_i].sections.push({
        title: results[i].title,
        description: results[i].description
      })
  
      task.pages[page_i].sections[section_i].title = {}
      task.pages[page_i].sections[section_i].description = {}
  
      while(results[i].language != "") {
        task.pages[page_i].sections[section_i].title[results[i].language] = results[i].title
        task.pages[page_i].sections[section_i].description[results[i].language] = results[i].description
  
        if (results[i+1].generatorType == '' && results[i+1].questionType == '') {
          i += 1
        } else {
          break
        }
      }
    }
  },

  textboxProcessor(i, task, result, page_i, section_i, question_i) {
    try {
      if (result.keyboardInput != "")
        task.pages[page_i].sections[section_i].questions[question_i].keyboardInput = result.keyboardInput

      if (result.minValue != "")
        task.pages[page_i].sections[section_i].questions[question_i].minValue = parseFloat(result.minValue)

      if (result.maxValue != "")
        task.pages[page_i].sections[section_i].questions[question_i].maxValue = parseFloat(result.maxValue)
    } catch (error) {
      this.printError("Error 1015 - Error at creating textbox!")
    }
  },

  cameraProcessor(i, task, result, page_i, section_i, question_i) {
    // task.pages[page_i].sections[section_i].questions[question_i].showCamera = false

    task.pages[page_i].sections[section_i].questions[question_i].image = {
      data: null,
      uri: null
    }
  },

  recognitionProcessor(i, task, result, page_i, section_i, question_i) {
    task.pages[page_i].sections[section_i].questions[question_i].recognitionKey = result.recognitionKey ? result.recognitionKey : "text"
    task.pages[page_i].sections[section_i].questions[question_i].hidden = result.hidden ? result.hidden : true

    if (result.filters) {
      let arrayOfFilters = []

      result.filters.split(",").forEach(filter => {
        arrayOfFilters.push(filter.trim())
      })

      task.pages[page_i].sections[section_i].questions[question_i].filters = arrayOfFilters
    }

    if (result.questionType == "rawRecognition") {
      task.pages[page_i].sections[section_i].questions[question_i].required = result.required ? result.required : false
    }
  },

  locationProcessor(i, task, result, page_i, section_i, question_i) {
    task.pages[page_i].sections[section_i].questions[question_i].disabled = result.disabled ? result.disabled : true
  },

  questionProcessor(i, task, results, page_i, section_i, question_i) {
    try {
      if (!task.pages[page_i].sections[section_i].questions) {
        task.pages[page_i].sections[section_i].questions = []
      }
    } catch (error) {
      this.printError("Error 1010 - Section does not exists!")
    }

    task.pages[page_i].sections[section_i].questions[question_i] = {
      title: {},
      description: {},
      questionType: results[i].questionType,
      model: null,
      required: results[i].required ? results[i].required : true
    }

    if (results[i].questionType == "textbox") {
      this.textboxProcessor(i, task, results[i], page_i, section_i, question_i)
    } else if (results[i].questionType == "camera" || results[i].questionType == "cameraRecognition") {
      this.cameraProcessor(i, task, results[i], page_i, section_i, question_i)
    } else if (results[i].questionType == "location") {
      this.locationProcessor(i, task, results[i], page_i, section_i, question_i)
    } else if (results[i].questionType == "textboxRecognition" || results[i].questionType == "rawRecognition") {
      this.recognitionProcessor(i, task, results[i], page_i, section_i, question_i)
    }

    if (results[i].language != '') {
      while (results[i].language != '') {
        task.pages[page_i].sections[section_i].questions[question_i].title[results[i].language] = results[i].title
        task.pages[page_i].sections[section_i].questions[question_i].description[results[i].language] = results[i].description

        if (results[i + 1].generatorType == '' && results[i + 1].questionOption == '' && results[i + 1].questionType == '') {
          i += 1
        } else {
          break
        }
      }
    } else {
      task.pages[page_i].sections[section_i].questions[question_i].title = results[i].title
      task.pages[page_i].sections[section_i].questions[question_i].description = results[i].description
    }
  },

  optionProcessor(i, task, results, page_i, section_i, question_i) {
    let option_i = -1
    let optionObject = {
      options: []
    }

    while (results[i + 1] && results[i + 1].questionOption == "option") {
      i += 1

      if (results[i].language != "") {
        while (results[i].language != "") {
          if (results[i].questionOption == "option") {
            option_i += 1

            optionObject.options.push({
              title: {},
              selected: false,
              terminate: results[i].terminate ? true : false
            })
          }

          optionObject.options[option_i].title[results[i].language] = results[i].title

          if (results[i+1] != undefined && results[i+1].language != "" && results[i+1].generatorType == "" && results[i+1].questionType == "") {
            i += 1
          } else {
            break
          }
        }

      } else {
        optionObject.options.push({
          title: results[i].title,
          selected: false,
          terminate: results[i].terminate ? true : false
        })
      }
    }

    Object.assign(task.pages[page_i].sections[section_i].questions[question_i], optionObject)
  },

  init(results) {
    let i = 0

    let task = {
      title: null,
      description: null,
      pages: []
    }

    let page_i = -1
    let section_i = -1
    let question_i = -1

    for (i = 0; i < results.length; i++) {
      if (results[i].generatorType == "page") {
        page_i += 1
        section_i = -1

        this.pageProcessor(i, task, results, page_i, section_i, question_i)
      } else if (results[i].generatorType == "section") {
        section_i += 1
        question_i = -1

        this.sectionProcessor(i, task, results, page_i, section_i, question_i)
      } else if (results[i].generatorType == "question") {
        question_i += 1

        this.questionProcessor(i, task, results, page_i, section_i, question_i)

        if (results[i].questionType == "radio" || results[i].questionType == "dropdown" || results[i].questionType == "checkbox") {
          this.optionProcessor(i, task, results, page_i, section_i, question_i)
        }
      } else {
        // console.log(results[i])
      }
    }
   
    return task
  }

}