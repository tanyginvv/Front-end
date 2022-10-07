const editor = {
    presentation,
    tools: [tool]
}

const presentation = {
    presentationName: 'Презентация',
    slides: [slide]
}

const slide = {
    background: 'white',
    blocks: [block]
}

const block = {
    typeBlock: text | image | figure,
    width: 1920,
    height: 1080,
    position: {
        x: 232,
        y: 242
    }
}

const text = {
    content: 'Привет',
    width: 400,
    height: 600,
    fontFamily: 'Roboto',
    color: 'black'
}

const image = {
    width: 400,
    height: 600,
    src: '/study/hello.jpg'
}

const figure = {
    figureType: rectangle | circle | triangle,
    color: 'black',
    borderColor: 'white'
}

const circle = {
  centerPoint: {
    x: 40,
    y: 30
  },
  radiusPoint: {
    x: 80,
    y: 40
  }
}

const rectangle = {
  width: 400,
  height: 600,
  mainPoint: {
    x: 80,
    y: 40
  }
}

const triangle = {
  firstPoint: {
    x: 40,
    y: 30
  },
  secondPoint: {
    x: 80,
    y: 40
  },
  thirdPoint: {
    x: 40,
    y: 30
  } 
}